<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Schedule;
use Modules\Finance\Jobs\HandleBidsAfterTheAuctionEnd;

Artisan::command('inspire', function (): void {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote')->hourly();

Schedule::command('auction:change-status')->everyMinute();
Schedule::job(new HandleBidsAfterTheAuctionEnd)->everyMinute();
