<?php

namespace Modules\Customer\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Modules\Customer\Http\Requests\AddOrUpdateToCartRequest;
use Modules\Customer\Http\Requests\DecrementQuantityRequest;
use Modules\Customer\Services\CartService;

class CartController extends Controller
{
    public function __construct(protected CartService $cartService) {}

    /**
     * Load the items in the cart by cart service.
     */
    public function load(): AnonymousResourceCollection
    {

        $reponse = $this->cartService->load();

        return $reponse;

    }

    /**
     * Summary of addOrUpdate
     */
    public function addOrUpdate(AddOrUpdateToCartRequest $request): string
    {

        $items = $this->cartService->addOrUpdate($request->validated());

        return $items->toJson();
    }

    public function decrementQuantity(DecrementQuantityRequest $request) {}

    /**
     * Remove an item from the cart.
     */
    public function remove(int $item): void
    {
        $this->cartService->removeAnItem($item);
    }

    /**
     * Empty the cart.
     */
    public function empty(): void
    {

        $this->cartService->clearCart();
    }
}
