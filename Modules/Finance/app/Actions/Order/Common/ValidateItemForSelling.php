<?php

namespace Modules\Finance\Actions\Order\Common;

use Illuminate\Validation\ValidationException;
use Modules\Vendor\Models\Item;

trait ValidateItemForSelling
{
    public function validate(Item $item, $quantity)
    {
        if (! $item) {

            throw ValidationException::withMessages([
                'error' => ['The selected item does not exist.'],
            ]);

        }

        if ($item->remaining_quantity <= 0) {
            throw ValidationException::withMessages([
                'error' => ['This item '.$item->title.' is out of stock.'],
            ]);

        }

        if ($item->user_id === auth()->id()) {
            throw ValidationException::withMessages([
                'error' => ['You cannot buy your own item'.$item->title.'.'],
            ]);

        }

        if ($item->remaining_quantity < $quantity) {
            throw ValidationException::withMessages([
                'error' => ['This quantity is large than the available '.$item->title.' item quantity.'],
            ]);

        }
    }
}
