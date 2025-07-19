<?php

namespace Modules\Finance\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Modules\Finance\Actions\Balance\CreateCheckoutSession;
use Modules\Finance\Actions\Balance\GetTransactionsForIndexPage;
use Modules\Finance\Actions\Balance\HandleReturnFromCheckoutSession;
use Modules\Finance\Actions\Order\GetStripeCheckoutPageAction;
use Modules\Finance\Http\Requests\ChargeBalanceRequest;
use Modules\Finance\Http\Requests\WithDrawarBalanceRequest;
use Modules\Finance\Models\WalletTransaction;

class BalanceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(GetTransactionsForIndexPage $getTransactionsForIndexPage)
    {

        // this for locale
        // request()->getPreferredLanguage()

        // dd(request()->fingerprint());

        $transactions = $getTransactionsForIndexPage->execute();

        return Inertia::render('Finance::Balance/index', compact('transactions'));
    }

    public function getStripeCheckoutPage(ChargeBalanceRequest $request, GetStripeCheckoutPageAction $getStripeCheckoutPageAction)
    {

        $response = $getStripeCheckoutPageAction->execute($request->validated(), route('balance.stripe.checkout-session'));

        return $response;

    }

    public function createCheckoutSession(ChargeBalanceRequest $request, CreateCheckoutSession $createCheckoutSession)
    {

        $response = $createCheckoutSession->execute($request->validated());

        return $response;

    }

    public function returnFromCheckoutSession(Request $request, HandleReturnFromCheckoutSession $handleReturnFromCheckoutSession)
    {

        $data = $request->all();

        $response = $handleReturnFromCheckoutSession->execute($data);

        return $response;

    }

    /**
     * Show the form for creating a new resource.
     */
    public function withdrawal(WithDrawarBalanceRequest $request)
    {

        try {
            $amount = $request->input('amount');
            $user = auth()->user();
            if ($amount > $user->balance) {
                return redirect()->back()->withErrors(['error' => 'Insufficient balance for withdrawal.']);
            }
            \Stripe\Stripe::setApiKey(config('services.stripe.secret'));

            $transaction = WalletTransaction::create([
                'amount' => $amount,
                'user_id' => $user->id,
                'status' => 'pending',
                'method' => 'stripe',
                'transaction_type' => 'withdrawal',
            ]);

            // Create a transfer to the connected account
            $transferObj = \Stripe\Transfer::create([
                'amount' => $amount * 100, // amount in cents (e.g. $10)
                'currency' => 'usd',
                'destination' => $user->stripe_account_id,
                'description' => 'Withdrawal to connected account',

            ]);

            if ($transferObj) {
                $user->decrement('balance', $amount);
                $transaction->update(['status' => 'completed']);

                // Commit the transaction

                return redirect()->route('balance.index')->with('message', 'Withdrawal successful!');
            } else {

                $transaction->update(['status' => 'failed']);

                return redirect()->back()->withErrors(['error' => 'Withdrawal failed. Please try again later.']);

            }

        } catch (\Stripe\Exception\ApiErrorException $e) {
            $transaction->update(['status' => 'failed']);

            return redirect()->back()->withErrors(['error' => 'redirect to onboarding link']);
        }

    }

    /**
     * Generate Onboarding Link (Express) to connect account
     */
    public function goToOnboardingLink()
    {

        try {
            \Stripe\Stripe::setApiKey(config('services.stripe.secret'));
            $accountLink = \Stripe\AccountLink::create([
                'account' => auth()->user()->stripe_account_id,
                'refresh_url' => route('stripe.onboarding-link'),
                'return_url' => route('stripe.onboarding.return'),
                'type' => 'account_onboarding',

            ]);
        } catch (\Exception $exception) {
            return redirect()->back()->withErrors(['error' => 'Something went wrong. Please try again.']);
        }

        return redirect($accountLink->url);

    }

    public function returnFromOnboarding()
    {

        return redirect()->route('balance.index')->with('message', 'Onboarding completed successfully!');

    }

    /**
     * Show the specified resource.
     */
    public function show($id)
    {
        return view('finance::show');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        return view('finance::edit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id) {}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id) {}
}
