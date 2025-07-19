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

    protected $appends = ['user_start', 'user_end'];

    protected function userStart(): Attribute
    {
        $user = auth()->user();

        return Attribute::make(

            get: fn () => Carbon::parse($this->start, 'UTC')
                ->setTimezone($user ? $user->profile->timezone : 'UTC')
                ->toDateTimeString(),

        );
    }

    protected function userEnd(): Attribute
    {

        $user = auth()->user();

        return Attribute::make(

            get: fn () => Carbon::parse($this->end, 'UTC')
                ->setTimezone($user ? $user->profile->timezone : 'UTC')
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
