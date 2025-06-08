<?php

namespace Modules\Customer\Services;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Modules\Customer\Http\Resources\ItemInCartResource;
use Modules\Customer\Repositories\CartRepository;

class CartService
{
    public function __construct(protected CartRepository $cartRepository) {}

    /**
     * Load the items in the cart from  cart repository
     */
    public function load(): AnonymousResourceCollection
    {

        $id = -1;

        if ($userIsAuthenticated = auth()->check()) {

            $id = auth()->id();

        } else {

            $id = session()->getId();

        }

        return ItemInCartResource::collection($this->cartRepository->getItemsInCart($id, $userIsAuthenticated));
    }

    /**
     * Adding item to the cart or updating the quantity of an existing item
     */
    public function addOrUpdate(array $data): Collection
    {
        $cart_id = $this->getCartId();

        return $this->cartRepository->addOrUpdate($cart_id, $data['item'], $data['quantity']);
    }

    public function removeAnItem(int $itemId): void
    {
        $cart_id = $this->getCartId();

        $this->cartRepository->removeAnItem($cart_id, $itemId);
    }

    public function clearCart(): void
    {
        $cart_id = $this->getCartId();

        $this->cartRepository->empty($cart_id);
    }

    public function CheckTheItemQuantityInCart(int $item_id): int
    {
        $cart_id = $this->getCartId();

        return $this->cartRepository->CheckTheItemQuantityInCart($item_id, $cart_id);
    }

    public function getCartId(): int
    {
        $owner_id = -1;
        if ($is_authenticated = auth()->check()) {
            $owner_id = auth()->id();
        } else {
            $owner_id = session()->getId();
        }

        return $this->cartRepository->getCartId($owner_id, $is_authenticated);

    }
}
