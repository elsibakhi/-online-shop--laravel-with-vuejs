<?php

namespace Modules\Finance\Actions\Bid;

use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;
use Modules\Finance\Events\UserMakeBid;
use Modules\Vendor\Models\Auction;

class MakeBidOnAuctionAction
{
    public function execute(array $data, $auction)
    {

        DB::transaction(function () use ($data, $auction) {

            $auction = Auction::where('id', $auction)->lockForUpdate()->firstOrFail();
            $data['user_id'] = auth()->id();

            // Update the auction's current price if the bid is higher

            if ($auction->status == 'started') {
                if ($data['amount'] > $auction->current_price) {
                    if (auth()->user()->availableBalanceWithoutTheOverheadOfAnAuction($auction->id) >= $data['amount']) {

                        DB::transaction(function () use ($data, $auction) {

                            $auction->current_price = $data['amount'];

                            $auction->bids()->where('status', 'pending')->update(['status' => 'canceled']);
                            $bid = $auction->bids()->create($data);

                            $auction->save();

                            $bid->load(['user', 'auction']);

                            UserMakeBid::dispatch($bid);

                        });
                    } else {
                        throw ValidationException::withMessages([
                            'error' => ['You do not have enough balance to place this bid.'],
                        ]);

                    }
                } else {
                    throw ValidationException::withMessages([
                        'error' => ['Your bid must be higher than the current price of the auction.'],
                    ]);
                }

            } else {
                throw ValidationException::withMessages([
                    'error' => ['The auction is not available now.'],
                ]);
            }

        });
    }
}
