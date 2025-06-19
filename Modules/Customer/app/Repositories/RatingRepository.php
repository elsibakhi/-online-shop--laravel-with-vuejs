<?php

namespace Modules\Customer\Repositories;

use Modules\Customer\Models\Rating;
use Modules\Vendor\Models\Item;

class RatingRepository
{
    public function __construct(protected Rating $ratingModel) {}

    public function getRatingsAsPageForAnItem(int $itemId,int $ratingsInPage=10){
       return Item::findOrFail($itemId)->ratings()->latest()->paginate($ratingsInPage);
    }
}
