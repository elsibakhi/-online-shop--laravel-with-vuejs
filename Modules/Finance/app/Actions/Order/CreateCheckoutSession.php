<?php

namespace Modules\Finance\Actions\Order;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use Modules\Finance\Actions\Order\Common\ValidateItemForSelling;
use Modules\Finance\Services\Stripe;
use Modules\Vendor\Models\Item;

class CreateCheckoutSession
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
                'status' => 'pending',
            ]);

            $order->items()->attach($item, ['quantity' => $quantity]);

            $checkout_session = Stripe::createCheckoutSession([
                'line_items' => [
                    [
                        'price_data' => [
                            'currency' => 'usd',
                            'product_data' => [
                                'name' => $item->title,
                            ],
                            'unit_amount' => $unit_price_after_discount * 100, // convert the price to cent
                        ],
                        'quantity' => $quantity,
                    ],
                ],
                'mode' => 'payment',
                'ui_mode' => 'embedded',
                'customer_email' => $user->email,
                'return_url' => route('order.stripe.checkout-return').'?session_id={CHECKOUT_SESSION_ID}',
                'metadata' => [
                    'order_id' => $order->id,
                    'item_id' => $item->id,
                    'unit_price' => $unit_price_after_discount,
                    'quantity' => $quantity,
                ],
            ]);

            return [
                'clientSecret' => $checkout_session->client_secret,
            ];

        });
    }
}
