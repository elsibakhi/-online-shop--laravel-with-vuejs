<?php

namespace Modules\Finance\Actions\Order;

use Modules\Finance\Http\Resources\ItemForOrderResource;
use Modules\Vendor\Models\Item;

class GetItemForBuyNowPageAction
{
    public function execute(int $itemId)
    {
        $item = Item::query()->normal()
            ->with('priceable')
            ->findOrFail($itemId);

        return new ItemForOrderResource($item);
    }
}
