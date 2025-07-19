<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Services\IpService;
use Exception;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use Modules\Customer\Events\CartOwnerIdChanged;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'username' => [
                'required',
                'string',
                'max:255',
                'unique:users,username',
                'regex:/^[A-Za-z0-9_]+$/',
            ],
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        DB::beginTransaction();

        try {

            $user = User::create([
                'name' => $request->name,
                'username' => $request->username,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            $location = IpService::getUserLocation($request->ip());

            $user->profile()->create([
                'timezone' => $location['timezone'],
                'countryCode' => $location['countryCode'],
                'lat' => $location['lat'],
                'lng' => $location['lng'],
                'city' => $location['city'],
                'locale' => request()->getPreferredLanguage() ?? 'en',

            ]);

            \Stripe\Stripe::setApiKey(config('services.stripe.secret'));

            $supportedCountries = ['US', 'GB', 'CA', 'FR', 'DE', 'NL', 'AU', 'SG', 'JP']; // example

            if (! in_array($location['countryCode'], $supportedCountries)) {
                $location['countryCode'] = 'US'; // default to US if unsupported
                // Optionally, you can log this or handle it differently
                // Log::warning("Unsupported country code: {$location['countryCode']}");
            }

            $account = \Stripe\Account::create([
                'type' => 'express', // or 'custom'
                'country' => $location['countryCode'],
                'email' => $user->email,
                'capabilities' => [
                    'transfers' => ['requested' => true],
                    'card_payments' => ['requested' => true],
                ],
            ]);

            $user->stripe_account_id = $account->id;
            $user->save();

            DB::commit();

        } catch (Exception $exception) {
            DB::rollBack();

            return redirect()->back();
        }

        event(new Registered($user));
        $last_session_id = session()->getId();

        Auth::login($user);

        event(new CartOwnerIdChanged(auth()->id(), $last_session_id));

        return redirect(route('dashboard', absolute: false));
    }
}
