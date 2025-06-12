<?php

namespace Modules\Finance\Actions\Bid;


use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

use Modules\Finance\Events\UserMakeBid;


class MakeBidOnAuctionAction
{


  
    public function execute(array $data,$auction)
    {

        $data['user_id'] = auth()->id();

        
      
        
        // Update the auction's current price if the bid is higher
        
    if($auction->is_active_now){
        if ($data['amount'] > $auction->current_price ) {
            if(auth()->user()->balance >= $data['amount']) {

                DB::transaction(function () use ($data,$auction) {
                    // Deduct the bid amount from the user's balance
                    // $user = auth()->user();
                    // $user->balance -= $validatedData['amount'];
                    // $user->save();
                    $auction->current_price = $data['amount'];
                    
                 $auction->bids()->where('status', 'pending')->update(['status' => 'canceled']);
                    $bid = $auction->bids()->create($data);


                    $auction->save();
                   
                    $bid->load(['user','auction']);    

                    UserMakeBid::dispatch($bid);
                   
                   
                });
            }else{
                throw ValidationException::withMessages([
                    'error' => ['You do not have enough balance to place this bid.'],
                ]);
    
            }
        }else{
            throw ValidationException::withMessages([
                'error' => ['Your bid must be higher than the current price of the auction.'],
            ]);
        }

        

    }else{
        throw ValidationException::withMessages([
            'error' => ['The auction is not available now.'],
        ]); 
    }

    }
}
