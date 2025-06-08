<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Cashier\Billable;
use Laravel\Scout\Searchable;
use Modules\Finance\Models\Order;
use Modules\Finance\Models\PurchaseTransaction;
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
}
