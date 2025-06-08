<?php

namespace Modules\Finance\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Modules\Customer\Services\CartService;
use Modules\Finance\Actions\Order\BuyFromBalanceAction;
use Modules\Finance\Actions\Order\CheckoutCartFormBalanceAction;
use Modules\Finance\Actions\Order\GetBuyNowStripeCheckoutFromPageAction;
use Modules\Finance\Actions\Order\GetItemForBuyNowPageAction;
use Modules\Finance\Actions\Order\HandleCancelBuyNowFromStripeCheckoutAction;
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

    public function buyNowFromStripeCheckoutPage(BuyNowFromBalanceRequest $request, GetBuyNowStripeCheckoutFromPageAction $getBuyNowStripeCheckoutFromPageAction)
    {

        $response = $getBuyNowStripeCheckoutFromPageAction->execute($request->validated());

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
    public function checkoutCartFromBalance(CheckoutFromCartRequest $request, CheckoutCartFormBalanceAction $checkoutCartFormBalanceAction)
    {

        $response = $checkoutCartFormBalanceAction->execute($request->validated());

        return $response;
    }

    /**
     * Show the specified resource.
     */
    public function show($id)
    {
        return view('finance::show');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        return view('finance::edit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id) {}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id) {}
}
