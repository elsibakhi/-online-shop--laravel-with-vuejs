<?php

namespace Modules\Finance\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class CheckTheItemForOrderRule implements ValidationRule
{
    /**
     * Run the validation rule.
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $item = \Modules\Vendor\Models\Item::find($value);

        if (! $item) {
            $fail('The selected item does not exist.');

            return;
        }

        if ($item->remaining_quantity <= 0) {
            $fail('This item is out of stock.');

            return;
        }

        if ($item->user_id === auth()->id()) {
            $fail('You cannot buy your own item.');

            return;
        }
    }
}
