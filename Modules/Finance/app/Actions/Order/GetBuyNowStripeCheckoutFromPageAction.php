<?php

namespace Modules\Finance\Actions\Order;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use Modules\Finance\Actions\Order\Common\ValidateItemForSelling;
use Modules\Vendor\Models\Item;

class GetBuyNowStripeCheckoutFromPageAction
{
    use ValidateItemForSelling;

    public function execute(array $data)
    {

        return DB::transaction(function () use ($data) {

            $user = User::where('id', auth()->id())->lockForUpdate()->firstOrFail();
            $item = Item::query()->normal()->where('id', $data['item_id'])->lockForUpdate()->firstOrFail();

            // i validate here to use lock successfully
            $this->validate($item, $data['quantity']);

            $discount = $item->priceable->discount;
            $unit_price = $item->priceable->price;
            $unit_price_after_discount = ($unit_price - ($unit_price * $discount));
            $quantity = $data['quantity'];

            $order = $user->orders()->create([
                'status' => 'in_warehouse',
            ]);

            $order->items()->attach($item, ['quantity' => $quantity]);

            return $user->checkoutCharge(
                $unit_price_after_discount * 100, // convert the price to cent
                $item->title,
                $quantity,
                [
                    'success_url' => route('order.stripe.checkout-success').'?session_id={CHECKOUT_SESSION_ID}',

                    'cancel_url' => route('order.stripe.checkout-cancel').'?session_id={CHECKOUT_SESSION_ID}',
                    'metadata' => [
                        'order_id' => $order->id,
                        'item_id' => $item->id,
                        'unit_price' => $unit_price_after_discount,
                        'quantity' => $quantity,

                    ],
                ]
            );

        });
    }
}
