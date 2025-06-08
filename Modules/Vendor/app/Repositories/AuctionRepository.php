<?php

namespace Modules\Vendor\Repositories;

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
        return $this->auctionModel->create($data);
    }
}
