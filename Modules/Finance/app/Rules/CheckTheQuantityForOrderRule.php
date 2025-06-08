<?php

namespace Modules\Finance\Rules;

use Closure;
use Illuminate\Contracts\Validation\DataAwareRule;
use Illuminate\Contracts\Validation\ValidationRule;

class CheckTheQuantityForOrderRule implements DataAwareRule, ValidationRule
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
        $item = \Modules\Vendor\Models\Item::find($this->data['item_id']);

        if ($item->remaining_quantity < $value) {
            $fail('This quantity is large than the available item quantity.');

            return;
        }

    }
}
