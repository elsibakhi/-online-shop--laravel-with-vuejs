<?php

namespace Modules\Vendor\Repositories;

use Illuminate\Support\Carbon;
use Modules\Vendor\Models\Auction;

class AuctionRepository
{
    public function __construct(protected Auction $auctionModel = new Auction) {}

    public function getFields()
    {
        return $this->auctionModel->getFillable();
    }

    public function create(array $data): Auction
    {

        $data['start'] = Carbon::parse($data['date'].' '.$data['start_time'], auth()->user()->profile->timezone)->setTimezone('UTC')->toDateTimeString();
        $data['end'] = Carbon::parse($data['date'].' '.$data['end_time'], auth()->user()->profile->timezone)->setTimezone('UTC')->toDateTimeString();

        $data['current_price'] = $data['initial_price']; // Set current price to initial price on creation

        return $this->auctionModel->create($data);
    }
}
