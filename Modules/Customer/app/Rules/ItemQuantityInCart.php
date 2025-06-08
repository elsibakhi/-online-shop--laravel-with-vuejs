<?php

namespace Modules\Customer\Rules;

use Closure;
use Illuminate\Contracts\Validation\DataAwareRule;
use Illuminate\Contracts\Validation\ValidationRule;
use Modules\Customer\Services\CartService;
use Modules\Vendor\Repositories\ItemRepository;

class ItemQuantityInCart implements DataAwareRule, ValidationRule
{
    /**
     * All of the data under validation.

     *

     * @var array<string, mixed>
     */
    protected $data = [];

    // ...

    /**
     * Set the data under validation.

     *

     * @param  array<string, mixed>  $data
     */
    public function setData(array $data): static
    {

        $this->data = $data;

        return $this;

    }

    /**
     * Run the validation rule.
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {

        $itemRepository = resolve(ItemRepository::class);
        $item = $itemRepository->findOrFail($this->data['item']);

        $cartService = resolve(CartService::class);
        $itemQuantityInTheCart = $cartService->CheckTheItemQuantityInCart($this->data['item']);

        if ($value > 0) {
            if (($value + $itemQuantityInTheCart) > $item->remaining_quantity) {
                $fail(trans('customer::validation.item.increment.quantity'));
            }

        } else {
            if ((-$value > $itemQuantityInTheCart)) {
                $fail(trans('customer::validation.item.decrement.quantity'));
            }
        }

    }
}
