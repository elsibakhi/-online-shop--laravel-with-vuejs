<?php

namespace Modules\Finance\Actions\Order;

use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;
use Laravel\Cashier\Cashier;
use Modules\Finance\Models\Order;
use Modules\Finance\Models\PurchaseTransaction;

class HandleSuccessBuyNowFromStripeCheckoutAction
{
    public function execute(string $sessionId)
    {
        $transactionForInvoiceOrResponse = DB::transaction(function () use ($sessionId) {

            if ($sessionId === null) {

                return;
            }

            $session = Cashier::stripe()->checkout->sessions->retrieve($sessionId);

            if ($session->payment_status !== 'paid') {

                return;
            }

            $orderId = $session['metadata']['order_id'] ?? null;
            $itemId = $session['metadata']['item_id'] ?? null;
            $unit_price = $session['metadata']['unit_price'] ?? null;
            $quantity = $session['metadata']['quantity'] ?? null;
            $total_price = $unit_price * $quantity;

            $order = Order::findOrFail($orderId);

            if ($order->status !== 'pending') {
                throw ValidationException::withMessages(['order' => 'You can\'t do the order twice.']);
            }

            $item = $order->items()->where('items.id', $itemId)->lockForUpdate()->firstOrFail();

            $item->decrement('remaining_quantity', $quantity);

            if ($item->remaining_quantity == 0) {
                $item->update(['status' => 'sold']);
            }

            $item->seller->increment('balance', $total_price);

            $order->update(['status' => 'in_warehouse']);

            $transaction = auth()->user()->purchaseTransactions()->create([

                'order_id' => $order->id,

                'amount' => $total_price,

            ]);

            $transaction->load(['seller', 'buyer', 'order']);

            return $transaction;
        });

        if ($transactionForInvoiceOrResponse instanceof PurchaseTransaction) {
            // It's a PurchaseTransaction
            return to_route('invoice.buy', ['transaction' => $transactionForInvoiceOrResponse]);
        } else {
            return $transactionForInvoiceOrResponse;
        }
    }
}
