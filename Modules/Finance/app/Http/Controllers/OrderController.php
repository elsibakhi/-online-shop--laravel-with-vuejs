<?php

namespace Modules\Finance\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Modules\Customer\Services\CartService;
use Modules\Finance\Actions\Order\BuyFromBalanceAction;
use Modules\Finance\Actions\Order\CheckoutCartFormBalanceAction;
use Modules\Finance\Actions\Order\CreateCheckoutSession;
use Modules\Finance\Actions\Order\GetItemForBuyNowPageAction;
use Modules\Finance\Actions\Order\GetStripeCheckoutPageAction;
use Modules\Finance\Actions\Order\HandleCancelBuyNowFromStripeCheckoutAction;
use Modules\Finance\Actions\Order\HandleReturnFromCheckoutSession;
use Modules\Finance\Actions\Order\HandleSuccessBuyNowFromStripeCheckoutAction;
use Modules\Finance\Http\Requests\BuyNowFromBalanceRequest;
use Modules\Finance\Http\Requests\CheckoutFromCartRequest;

class OrderController extends Controller
{
    public function buyNow(GetItemForBuyNowPageAction $getItemForBuyNowPageAction, $item)
    {

        $item = $getItemForBuyNowPageAction->execute($item);

        return Inertia::render('Finance::Order/buy-now', compact('item'));
    }

    public function getStripeCheckoutPage(BuyNowFromBalanceRequest $request, GetStripeCheckoutPageAction $getStripeCheckoutPageAction)
    {

        $response = $getStripeCheckoutPageAction->execute($request->validated(), route('order.stripe.checkout-session'));

        return $response;

    }

    public function createCheckoutSession(BuyNowFromBalanceRequest $request, CreateCheckoutSession $createCheckoutSession)
    {

        $response = $createCheckoutSession->execute($request->validated());

        return $response;

    }

    public function returnFromCheckoutSession(Request $request, HandleReturnFromCheckoutSession $handleReturnFromCheckoutSession)
    {

        $data = $request->all();

        $response = $handleReturnFromCheckoutSession->execute($data);

        return $response;

    }

    public function buyNowFromStripeCheckoutSuccess(Request $request, HandleSuccessBuyNowFromStripeCheckoutAction $handleSuccessBuyNowFromStripeCheckoutAction)
    {

        $sessionId = $request->get('session_id');
        $response = $handleSuccessBuyNowFromStripeCheckoutAction->execute($sessionId);

        return $response;

    }

    public function buyNowFromStripeCheckoutCancel(Request $request, HandleCancelBuyNowFromStripeCheckoutAction $handleCancelBuyNowFromStripeCheckoutAction)
    {
        $sessionId = $request->get('session_id');

        $response = $handleCancelBuyNowFromStripeCheckoutAction->execute($sessionId);

        return $response;

    }

    public function buyNowFormBalance(BuyNowFromBalanceRequest $request, BuyFromBalanceAction $buyFromBalanceAction)
    {

        $validatedData = $request->validated();
        $data = [
            'items' => [
                [
                    'id' => $validatedData['item_id'],
                    'quantity' => $validatedData['quantity'],
                ],
            ],
        ];

        $response = $buyFromBalanceAction->execute($data);

        return $response;
    }

    public function CheckoutItemsCartFormBalance(CheckoutFromCartRequest $request, BuyFromBalanceAction $buyFromBalanceAction, CartService $cartService)
    {

        $response = $buyFromBalanceAction->execute($request->validated());

        // Clear the cart after successful checkout
        $cartService->clearCart();

        return $response;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function getBalance()
    {
        $stripe = new \Stripe\StripeClient(config('services.stripe.secret'));
        $balance = $stripe->balance->retrieve();

        $availableAmount = $balance->available[0]->amount;
        $currency = $balance->available[0]->currency;
        dd("Available balance: $availableAmount $currency");
    }

    /**
     * Store a newly created resource in storage.
     */
    // public function checkoutCartFromBalance(CheckoutFromCartRequest $request, CheckoutCartFormBalanceAction $checkoutCartFormBalanceAction)
    // {

    //     $response = $checkoutCartFormBalanceAction->execute($request->validated());

    //     return $response;
    // }

}
