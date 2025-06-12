<?php

namespace Modules\Finance\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Modules\Vendor\Models\Auction;
use Modules\Vendor\Models\Item;

// use Modules\Customer\Database\Factories\CartFactory;

class Bid extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = ['user_id', 'status','amount','auction_id'];

    // protected static function newFactory(): CartFactory
    // {
    //     // return CartFactory::new();
    // }

    public function user(){
        return $this->belongsTo(User::class);
    }
    public function auction(){
        return $this->belongsTo(Auction::class);
    }

}
