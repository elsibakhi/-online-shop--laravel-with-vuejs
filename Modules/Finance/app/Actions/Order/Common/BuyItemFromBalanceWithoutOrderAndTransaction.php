<?php

namespace Modules\Finance\Actions\Order\Common;

use Illuminate\Validation\ValidationException;
use Modules\Vendor\Models\Item;

trait BuyItemFromBalanceWithoutOrderAndTransaction
{
    use ValidateItemForSelling;

    /**
     * This method change the balances of seller and buyer
     * If the buyer can buy item it returns the item,
     * otherwise it throws an exception.
     *
     * @param  mixed  $user
     */
    public function buy(array $data, $user)
    {
        $item = Item::query()->normal()->where('id', $data['item_id'])->lockForUpdate()->firstOrFail();

        // i validate here to use lock successfully

        $this->validate($item, $data['quantity']);

        $discount = $item->priceable->discount;
        $total_price = $item->priceable->price * $data['quantity'];
        $total_price_after_discount = $total_price - ($total_price * $discount);

        if ($user->balance_with_overhead >= $total_price_after_discount) {

            $item->decrement('remaining_quantity', $data['quantity']);

            if ($item->remaining_quantity == 0) {
                $item->update(['status' => 'sold']);
            }

            $item->seller->increment('balance', $total_price_after_discount);

            $user->decrement('balance', $total_price_after_discount);

            return $total_price_after_discount;

        } else {
            throw ValidationException::withMessages([
                'error' => ['You do not have enough balance to complete this transaction.'],
            ]);
        }
    }
}
