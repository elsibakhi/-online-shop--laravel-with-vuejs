<?php

namespace Modules\Finance\Actions\Order;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use Modules\Finance\Actions\Order\Common\BuyItemFromBalanceWithoutOrderAndTransaction;
use Modules\Finance\Models\PurchaseTransaction;

class BuyFromBalanceAction
{
    use BuyItemFromBalanceWithoutOrderAndTransaction;

    /**
     * Execute the action to process a buy now order with balance.
     *
     * @return PurchaseTransaction|\Illuminate\Http\RedirectResponse
     */
    public function execute(array $data)
    {
        $transactionForInvoice = DB::transaction(function () use ($data) {

            $user = User::where('id', auth()->id())->lockForUpdate()->firstOrFail();
            $amount = 0;
            $items = [];
            foreach ($data['items'] as $itemData) {
                $data['item_id'] = $itemData['id'];
                $data['quantity'] = $itemData['quantity'];

                $amount += $this->buy($data, $user);

                $items[$data['item_id']] = ['quantity' => $data['quantity']];

            }

            if (count($items) > 0) {
                $order = $user->orders()->create([
                    'status' => 'completed',
                ]);

                $order->items()->attach($items);
                $transaction = $user->purchaseTransactions()->create([

                    'order_id' => $order->id,
                    'amount' => $amount,

                ]);

                $transaction->load(['buyer', 'order']);

                return $transaction;
            }
        });

        // It's a PurchaseTransaction
        return to_route('invoice.buy', ['transaction' => $transactionForInvoice]);

    }
}
