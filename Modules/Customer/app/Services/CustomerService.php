<?php

namespace Modules\Customer\Services;

use Modules\Vendor\Http\Resources\ItemResource;
use Modules\Vendor\Repositories\ItemRepository;

class CustomerService
{
    /**
     * Get guest customer data for langing page
     */
    public function guestCustomerIndex(): string
    {

        return resolve(ItemRepository::class)->getItemsForGuestCustomerInLanding()->groupBy(['category_name'])
            ->map(function ($group) {
                return ItemResource::collection($group->take(3)); // Take 3 items per category
            })->toJson();

    }
}
