<?php

namespace Modules\Finance\Console;

use Illuminate\Console\Command;
use Modules\Vendor\Models\Auction;

class ChangeAuctionStatus extends Command
{
    /**
     * The name and signature of the console command.
     */
    protected $signature = 'auction:change-status';

    /**
     * The console command description.
     */
    protected $description = 'This command for changing auction status from pending to started or finished based on currently time.';

    /**
     * Create a new command instance.
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     */
    public function handle()
    {

        // done
        Auction::whereNowOrPast('start')->whereNowOrFuture('end')->update(['status' => 'started']);
        Auction::wherePast('end')->whereIn('status', ['started', 'pending'])->update(['status' => 'done']);
        $this->info('The auctions status changed successfully!');
    }

    /**
     * Get the console command arguments.
     */
    protected function getArguments(): array
    {
        return [

        ];
    }

    /**
     * Get the console command options.
     */
    protected function getOptions(): array
    {
        return [

        ];
    }
}
