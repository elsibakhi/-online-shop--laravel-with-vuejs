<?php

namespace Modules\Customer\Services;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Validation\ValidationException;
use Modules\Customer\Http\Resources\RatingResource;
use Modules\Customer\Repositories\RatingRepository;
use Modules\Vendor\Services\ItemService;

class RatingService
{
    public function __construct(protected RatingRepository $ratingRepository) {}

    public function store(int $item, array $data)
    {

        $user = auth()->user();
        $hasRatingOnThisItem = $user->whereHas('ratings', function (Builder $query) use ($item) {
            $query->where('item_id', $item);
        });

        if ($hasRatingOnThisItem) {
            throw ValidationException::withMessages(['error', 'You can\'t rate the item twice']);
        }
        $data['user_id'] = $user->id;
        resolve(ItemService::class)->rate($item, $data);

    }

    public function loadForItem(int $itemId){
          return  RatingResource::collection($this->ratingRepository->getRatingsAsPageForAnItem($itemId));
    }
}
