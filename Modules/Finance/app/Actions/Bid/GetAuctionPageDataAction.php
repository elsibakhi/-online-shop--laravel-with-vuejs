<?php

namespace Modules\Finance\Actions\Bid;

class GetAuctionPageDataAction
{
    public function execute($auction)
    {

        abort_unless($auction->status == 'started', 404);

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
            // this is the balance with overhead, which is used to show the user how much they can bid
            'availableBalance' => auth()->user()->availableBalanceWithoutTheOverheadOfAnAuction($auction->id),

        ];
    }
}
