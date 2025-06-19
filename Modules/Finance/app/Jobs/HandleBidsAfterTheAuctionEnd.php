<?php

namespace Modules\Finance\Jobs;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\DB;

class HandleBidsAfterTheAuctionEnd implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct() {}

    /**
     * Execute the job.
     */
    public function handle(): void
    {

        $unPaidUsers = User::withSum(['bids' => function (Builder $query) {
            $query->whereHas('auction', function (Builder $query) {
                $query->where('status', 'done');
            })->where('status', 'pending');
        }], 'amount')->having('bids_sum_amount', '>', 0)->get();

        foreach ($unPaidUsers as $user) {
            DB::transaction(function () use ($user) {

                $bids = $user->bids()
                    ->whereHas('auction', function (Builder $query) {
                        $query->where('status', 'done');
                    })
                    ->where('status', 'pending')
                    ->get();

                foreach ($bids as $bid) {
                    $order = $user->orders()->create([
                        'status' => 'in_warehouse',
                    ]);

                    $item = $bid->auction->item;
                    $user->decrement('balance', $bid->amount);
                    $item->seller->increment('balance', $bid->amount);
                    $item->update(['remaining_quantity' => 0, 'status' => 'sold']);
                    $order->items()->attach([$item->id => ['quantity' => $item->remaining_quantity]]);
                    $user->purchaseTransactions()->create([

                        'order_id' => $order->id,

                        'amount' => $bid->amount,

                    ]);

                    $bid->update(['status' => 'win']);
                }

            });
        }

    }
}
