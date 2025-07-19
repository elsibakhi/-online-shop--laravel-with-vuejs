<?php

namespace Modules\Finance\Services;

class Stripe
{
    /**
     * Get the Stripe API key.
     */
    public static function getApiKey(): string
    {
        return config('services.stripe.secret');
    }

    /**
     * Get the Stripe publishable key.
     */
    public static function getPublishableKey(): string
    {
        return config('services.stripe.key');
    }

    public static function createPaymentIntent(array $data)
    {
        $stripe = new \Stripe\StripeClient(self::getApiKey());

        return $stripe->paymentIntents->create($data);
    }

    public static function retrievePaymentIntent(string $id)
    {
        $stripe = new \Stripe\StripeClient(self::getApiKey());

        return $stripe->paymentIntents->retrieve($id);
    }

    public static function cancelPaymentIntent(string $id)
    {
        $stripe = new \Stripe\StripeClient(self::getApiKey());

        return $stripe->paymentIntents->cancel($id);
    }

    public static function createCheckoutSession(array $data)
    {
        $stripe = new \Stripe\StripeClient(self::getApiKey());

        return $stripe->checkout->sessions->create($data);
    }

    public static function retrieveCheckoutSession(string $id)
    {
        $stripe = new \Stripe\StripeClient(self::getApiKey());

        return $stripe->checkout->sessions->retrieve($id);

    }
}
