<?php

namespace Modules\Finance\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Modules\Vendor\Models\Item;

// use Modules\Customer\Database\Factories\CartFactory;

class Order extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = ['user_id', 'status'];

    // protected static function newFactory(): CartFactory
    // {
    //     // return CartFactory::new();
    // }

    /**
     * Summary of items
     *
     * @return BelongsToMany<Item, Order, \Illuminate\Database\Eloquent\Relations\Pivot>
     */
    public function items(): BelongsToMany
    {
        return $this->belongsToMany(Item::class, 'item_order')->withPivot(['quantity']);
    }
}
