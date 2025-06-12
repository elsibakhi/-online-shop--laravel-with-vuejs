<?php

namespace Modules\Finance\Actions\Bid;

class GetAuctionPageDataAction
{
    public function execute($auction)
    {

        // dd($this->check($auction));
        abort_unless($auction->is_active_now, 404);

        $lastBid = $auction->bids()->where('status', 'pending')->first();
        $youAreWinner = false;
        if ($lastBid && $lastBid->user_id == auth()->id()) {
            $youAreWinner = true;
        }
        $auction->load(['item.extensions']);

        return [
            'auction' => $auction,
            'now' => now('UTC')->toDateTimeString(),
            'youAreWinner' => $youAreWinner,

        ];
    }
}
