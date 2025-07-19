<?php

namespace Modules\Finance\Actions\Balance;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use Modules\Finance\Services\Stripe;

class CreateCheckoutSession
{
    public function execute(array $data)
    {

        return DB::transaction(function () use ($data) {

            $user = User::where('id', auth()->id())->lockForUpdate()->firstOrFail();
            $amount = $data['amount'];

            $checkout_session = Stripe::createCheckoutSession([
                'line_items' => [[
                    'price_data' => [
                        'currency' => 'usd',
                        'product_data' => [
                            'name' => 'Wallet Top-up',
                        ],
                        'unit_amount' => $amount * 100, // cents
                    ],
                    'quantity' => 1,
                ]],
                'mode' => 'payment',
                'ui_mode' => 'embedded',
                'customer_email' => $user->email,
                'return_url' => route('balance.stripe.checkout-return').'?session_id={CHECKOUT_SESSION_ID}',
                'metadata' => [
                    'user_id' => $user->id,
                    'amount' => $amount,
                ],
            ]);

            return [
                'clientSecret' => $checkout_session->client_secret,
            ];

        });
    }
}
