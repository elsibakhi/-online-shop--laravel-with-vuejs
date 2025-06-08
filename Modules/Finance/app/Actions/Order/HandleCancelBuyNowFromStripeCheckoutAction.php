<?php

namespace Modules\Finance\Actions\Order;

use Illuminate\Validation\ValidationException;
use Laravel\Cashier\Cashier;
use Modules\Finance\Models\Order;

class HandleCancelBuyNowFromStripeCheckoutAction
{
    public function execute(string $sessionId)
    {

        if (! $sessionId) {

            return;
        }

        $session = Cashier::stripe()->checkout->sessions->retrieve($sessionId);

        if ($session->payment_status !== 'unpaid') {

            return;
        }

        $orderId = $session['metadata']['order_id'] ?? null;
        $itemId = $session['metadata']['item_id'] ?? null;

        $order = Order::findOr($orderId, function () {
            throw ValidationException::withMessages(['order' => 'You can\'t do this request twice.']);
        });

        $order->delete();

        return to_route('order.buy-now', ['item' => $itemId])
            ->withErrors(['order' => 'Your order is canceled.']);

    }
}
