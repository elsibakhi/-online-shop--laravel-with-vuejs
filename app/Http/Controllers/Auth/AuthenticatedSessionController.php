<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use App\Services\IpService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;
use Laravel\Socialite\Facades\Socialite;
use Modules\Customer\Events\CartOwnerIdChanged;
use Str;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $last_session_id = session()->getId();

        $request->authenticate();

        event(new CartOwnerIdChanged(auth()->id(), $last_session_id));

        $request->session()->regenerate();

        return redirect()->intended(route('dashboard', absolute: false));
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }

    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
    }

    public function handleGoogleCallback()
    {
        $user = Socialite::driver('google')->user();

        // Here you can handle the user data, e.g., find or create a user in your database
        // and log them in.
        DB::beginTransaction();
        try {
            $user = User::firstOrCreate(
                ['email' => $user->getEmail()],
                [
                    'name' => $user->getName(),
                    'username' => $user->getNickname() ?: $user->getEmail(),
                    'password' => bcrypt(Str::random(16)), // Generate a random password
                ]
            );

            $location = IpService::getUserLocation();

            if (! $user->stripe_account_id) {
                \Stripe\Stripe::setApiKey(config('services.stripe.secret'));

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
            }

            $supportedCountries = ['US', 'GB', 'CA', 'FR', 'DE', 'NL', 'AU', 'SG', 'JP']; // example

            if (! in_array($location['countryCode'], $supportedCountries)) {
                $location['countryCode'] = 'US'; // default to US if unsupported
                // Optionally, you can log this or handle it differently
                // Log::warning("Unsupported country code: {$location['countryCode']}");
            }
            $user->profile()->updateOrCreate(
                ['user_id' => $user->id],
                [
                    'timezone' => $location['timezone'],
                    'countryCode' => $location['countryCode'],
                    'lat' => $location['lat'],
                    'lng' => $location['lng'],
                    'city' => $location['city'],
                    'locale' => request()->getPreferredLanguage() ?? 'en',
                ]
            );

            DB::commit();
        } catch (\Exception $exception) {
            DB::rollBack();

            return redirect()->back()->withErrors(['error' => 'Something went wrong. Please try again.']);
        }
        Auth::login($user);

        return redirect()->intended(route('dashboard', absolute: false));
    }
}
