<?php

namespace Modules\Customer\Repositories;

use Modules\Customer\Models\Rating;

class RatingRepository
{
    public function __construct(protected Rating $ratingModel) {}
}
