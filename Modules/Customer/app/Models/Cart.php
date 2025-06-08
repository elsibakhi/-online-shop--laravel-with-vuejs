<?php

namespace Modules\Customer\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Modules\Vendor\Models\Item;

// use Modules\Customer\Database\Factories\CartFactory;

class Cart extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = ['user_id', 'session_id'];

    // protected static function newFactory(): CartFactory
    // {
    //     // return CartFactory::new();
    // }

    /**
     * Summary of items
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany<Item, Cart>
     */
    public function items(): BelongsToMany
    {
        return $this->belongsToMany(Item::class, 'cart_items')->withPivot(['quantity']);
    }
}
