<?php

namespace Modules\Finance\Actions\Order;

use Modules\Finance\Services\Stripe;

class HandleReturnFromCheckoutSession
{
    public function execute(array $data)
    {

        $checkoutSession = Stripe::retrieveCheckoutSession($data['session_id']);

        if ($checkoutSession->status === 'complete') {
            return redirect()->route('order.stripe.checkout-success', [
                'session_id' => $data['session_id'],
            ]);
        } elseif ($checkoutSession->status === 'expired') {
            return redirect()->route('order.stripe.checkout-cancel', [
                'session_id' => $data['session_id'],
            ]);
        } elseif ($checkoutSession->status === 'open') {
            return redirect()->route('order.stripe.checkout-page', [
                'session_id' => $data['session_id'],
            ]);
        } else {
            return redirect()->route('order.stripe.checkout-cancel', [
                'session_id' => $data['session_id'],
            ]);
        }

    }
}
