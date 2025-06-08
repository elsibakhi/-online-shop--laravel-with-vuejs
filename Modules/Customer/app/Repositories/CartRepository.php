<?php

namespace Modules\Customer\Repositories;

use Illuminate\Database\Eloquent\Collection;
use Modules\Customer\Models\Cart;

class CartRepository
{
    public function __construct(protected Cart $cartModel) {}

    /**
     * Load items from cart
     *
     * @return Collection<int, \Modules\Vendor\Models\Item>
     */
    public function getItemsInCart(int|string $ownerId, bool $isAuthenticated): Collection
    {

        $cart = $this->getCartOrCreateByOwnerId($ownerId, $isAuthenticated);
        $items = $cart->items()->withPivot('quantity')
            ->with([
                'extensions' => function ($query) {
                    $query->latest()->limit(1);
                },
                'priceable',

            ])
            ->get();

        return $items;

    }

    public function CheckTheItemQuantityInCart(int $item_id, int $cartId): int
    {
        $cart = $this->find($cartId);
        $item = $cart->items()->withPivot('quantity')->find($item_id);

        return $item ? $item->pivot->quantity : 0;
    }

    /**
     * Add an item to cart or update its quantity
     */
    public function addOrUpdate(int $cart_id, int $item_id, int $quantity = 1): Collection
    {
        $cart = $this->find($cart_id);

        // Load current items with pivot data
        $cart->load('items');

        // Check if item already exists in the cart
        $existingItem = $cart->items->firstWhere('id', $item_id);

        if ($existingItem) {
            // Update quantity
            $newQuantity = $existingItem->pivot->quantity + $quantity;
            $cart->items()->updateExistingPivot($item_id, ['quantity' => $newQuantity]);
        } else {
            // Attach new item
            $cart->items()->attach($item_id, ['quantity' => $quantity]);
        }
        // If the item quantity in the cart equal 0 then remove the item from the cart
        // This if we decrement the quantity of the item in the cart
        if ($quantity < 0) {

            $cart->items()->wherePivot('quantity', '=', 0)->detach();
        }

        // Return updated items with pivot data
        return $cart->items()->withPivot('quantity')->get();
    }

    public function removeAnItem(int $cart_id, int $item_id): void
    {
        $cart = $this->find($cart_id);
        $cart->items()->detach($item_id);

    }

    public function empty(int $cart_id): void
    {
        $cart = $this->find($cart_id);
        $cart->items()->detach();

    }

    /**
     * Get cart by id
     *
     * @return TModel|null
     */
    public function find(int $id): Cart
    {
        return $this->cartModel->find($id);
    }

    /**
     * Get cart id by  owner id if authenticated by user_id and else by session_id
     */
    public function getCartId(int|string $ownerId, bool $isAuthenticated): int
    {

        return $this->getCartOrCreateByOwnerId($ownerId, $isAuthenticated)->id;

    }

    public function authticateCart(int|string $ownerId, string $session_id): void
    {
        if ($this->cartModel->where('user_id', $ownerId)->exists()) {
            $userCart = $this->cartModel->firstWhere('user_id', $ownerId);
            $sessionCart = $this->cartModel->firstWhere('session_id', $session_id);

            foreach ($sessionCart?->items ?? [] as $sessionItem) {
                $existingItem = $userCart->items()
                    ->where('item_id', $sessionItem->pivot->item_id)
                    ->first();

                if ($existingItem) {
                    // Update quantity
                    $newQuantity = $existingItem->pivot->quantity + $sessionItem->pivot->quantity;
                    if ($existingItem->remaining_quantity < $newQuantity) {
                        $newQuantity = $existingItem->remaining_quantity;
                    }
                    $userCart->items()->updateExistingPivot($existingItem->id, [
                        'quantity' => $newQuantity,
                    ]);
                } else {
                    // Attach as new item
                    $userCart->items()->attach($sessionItem->id, [
                        'quantity' => $sessionItem->pivot->quantity,
                    ]);
                }
            }

            $sessionCart?->delete();

        } else {
            $this->cartModel->where('session_id', $session_id)->update([
                'user_id' => $ownerId,
                'session_id' => null,
            ]);
        }

    }

    /**
     * get the cart by user or session id and if not exist create it
     */
    private function getCartOrCreateByOwnerId(int|string $ownerId, bool $isAuthenticated): Cart
    {

        $owner_key = $isAuthenticated ? 'user_id' : 'session_id';

        return $this->cartModel->firstOrCreate([$owner_key => $ownerId]);

    }
}
