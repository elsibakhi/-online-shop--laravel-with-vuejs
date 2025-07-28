<?php

namespace Modules\Customer\Services;

use Illuminate\Contracts\Pagination\Paginator;
use Modules\Vendor\Http\Resources\ItemResource;
use Modules\Vendor\Repositories\ItemRepository;

class CustomerService
{
    /**
     * Get guest customer data for langing page
     */
    public function guestCustomerIndex(): string
    {

        $items=null;
    
        if((request()->has('category') && request()->filled('category')) || (request()->has('search') && request()->filled('search'))) {
            $subCategorySlug = request()->get('category');
            $searchQuery = request()->get('search');
            $items = resolve(ItemRepository::class)->getItemsForGuestCustomerInLanding($subCategorySlug,$searchQuery)->groupBy(['category_name'])
                ->map(function ($group) {
                    
                    return ItemResource::collection($group); // Take 3 items per category
                })->toJson();
              
        } else {
        $items = resolve(ItemRepository::class)->getItemsForGuestCustomerInLanding()->groupBy(['category_name'])
            ->map(function ($group) {
                return ItemResource::collection($group->take(3)); // Take 3 items per category
            })->toJson();
        }
        
            return $items;

    }
}
