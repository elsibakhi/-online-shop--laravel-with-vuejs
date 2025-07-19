<?php

namespace Modules\Finance\Actions\Balance;

use App\Models\User;
use Modules\Finance\Models\WalletTransaction;
use Modules\Finance\Services\Stripe;

class HandleReturnFromCheckoutSession
{
    public function execute(array $data)
    {

        $checkoutSession = Stripe::retrieveCheckoutSession($data['session_id']);
        if ($checkoutSession) {

            $user_id = $checkoutSession['metadata']['user_id'];
            $amount = $checkoutSession['metadata']['amount'];

            $transaction = WalletTransaction::create([
                'amount' => $amount,
                'user_id' => $user_id,
                'status' => 'pending',
                'method' => 'stripe',
                'transaction_type' => 'deposit',
            ]);
            if ($checkoutSession->status === 'complete') {

                $user = User::findOrFail($user_id);
                $user->increment('balance', $amount);
                $transaction->update(['status' => 'completed']);

                return redirect()->route('balance.index')->with('message', trans('finance::messages.balance.charged'));
            } elseif ($checkoutSession->status === 'open') {

                return redirect()->route('balance.stripe.checkout-page', [
                    'session_id' => $data['session_id'],
                ]);
            } else {

                $transaction->update(['status' => 'failed']);

                return redirect()->route('order.stripe.checkout-page', [
                    'session_id' => $data['session_id'],
                ]);
            }
        } else {

            return redirect()->route('order.stripe.checkout-page', [
                'session_id' => $data['session_id'],
            ]);
        }
    }
}
