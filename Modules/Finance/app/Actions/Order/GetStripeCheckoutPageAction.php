<?php

namespace Modules\Finance\Actions\Order;

use Modules\Finance\Services\Stripe;

class GetStripeCheckoutPageAction
{
    public function execute(array $data, string $checkoutSessionRoute)
    {

        return view('finance::checkout-page', [

            'publishable_key' => Stripe::getPublishableKey(),
            'checkoutSessionRoute' => $checkoutSessionRoute,

            'metadata' => $data,

        ]);

    }
}
