<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Cashier\Billable;
use Laravel\Scout\Searchable;
use Modules\Customer\Models\Rating;
use Modules\Finance\Models\Bid;
use Modules\Finance\Models\Order;
use Modules\Finance\Models\PurchaseTransaction;
use Modules\Vendor\Models\Auction;
use Modules\Vendor\Models\Item;

class User extends Authenticatable
{
    use Billable, HasFactory,Notifiable,Searchable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'username',
        'email',
        'password',
        'type',
    ];

    public function toSearchableArray(): array
    {

        return [

            'username' => $this->username,
            'name' => $this->name,
        ];

    }

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $appends = ['balance_with_overhead'];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function canJoinAuction($auction)
    {
        $auction = Auction::findOrFail($auction);

        return $auction->item->user_id === $this->id || $auction->initial_price < $this->balance;
    }

    /**
     * Get the user's balance with overhead.
     */
    protected function balanceWithOverhead(): Attribute
    {

        $overhead = $this->bids()
            ->where('status', 'pending')
            ->sum('amount'); // total amount of pending bids

        return Attribute::make(

            get: fn ($value) => $this->balance - $overhead,

        );
    }

    /**
     * Get the user's available balance without the overhead of an auction.
     */
    // This method calculates the available balance without considering the overhead of a specific auction.
    // It sums up the amounts of all pending bids that are not associated with the given auction ID.
    // It returns the total amount available for the user to use in other transactions or auctions.
    // Note: The method does not return a value, it should return the sum.
    // This method is useful for determining how much balance a user has available for new bids or purchases,
    // excluding any amounts that are currently tied up in pending bids for a specific auction.
    // It is important to ensure that the auctionId passed to this method is valid and corresponds to an existing auction.
    public function availableBalanceWithoutTheOverheadOfAnAuction($auctionId)
    {
        return $this->balance - $this->bids()
            ->whereNot('auction_id', $auctionId)
            ->where('status', 'pending')
            ->sum('amount');
    }

    public function items()
    {
        return $this->hasMany(Item::class);
    }

    public function orders()
    {
        return $this->hasMany(Order::class);
    }

    public function purchaseTransactions()
    {
        return $this->hasMany(PurchaseTransaction::class, 'buyer_id');
    }

    public function bids()
    {
        return $this->hasMany(Bid::class);
    }

    public function ratings()
    {
        return $this->hasMany(Rating::class);
    }

    public function profile()
    {
        return $this->hasOne(Profile::class);
    }
}
