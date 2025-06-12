<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Cashier\Billable;
use Laravel\Scout\Searchable;
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

    public function canJoinAuction( $auction){
       $auction= Auction::findOrFail($auction);
     return   $auction->item->user_id === $this->id || $auction->initial_price < $this->balance;
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

get: fn ( $value) => $this->balance-$overhead,

);
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

    public function bids(){
        return $this->hasMany(Bid::class);
    }
    public function profile(){
        return $this->hasOne(Profile::class);
    }
}
