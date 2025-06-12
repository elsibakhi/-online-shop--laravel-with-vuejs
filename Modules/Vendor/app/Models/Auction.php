<?php

namespace Modules\Vendor\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;
use Modules\Finance\Models\Bid;

class Auction extends Model
{
    use HasFactory;

    protected $fillable = ['start', 'end', 'status', 'initial_price', 'current_price'];

    protected $appends = ['is_active_now', 'user_start', 'user_end'];

    protected function isActiveNow(): Attribute
    {

        return Attribute::make(

            get: function () {
                $startDateTime = Carbon::parse($this->start, 'UTC');
                $endDateTime = Carbon::parse($this->end, 'UTC');

                $now = Carbon::now('UTC');

                // Check if now is between start and end
                return $now->between($startDateTime, $endDateTime);
            }

        );
    }

    protected function userStart(): Attribute
    {

        return Attribute::make(

            get: fn () => Carbon::parse($this->start, 'UTC')
                ->setTimezone(auth()->user()->profile->timezone)
                ->toDateTimeString(),

        );
    }

    protected function userEnd(): Attribute
    {

        return Attribute::make(

            get: fn () => Carbon::parse($this->end, 'UTC')
                ->setTimezone(auth()->user()->profile->timezone)
                ->toDateTimeString(),

        );
    }

    public function item()
    {
        return $this->morphOne(Item::class, 'priceable');
    }

    public function bids()
    {
        return $this->hasMany(Bid::class);
    }
}
