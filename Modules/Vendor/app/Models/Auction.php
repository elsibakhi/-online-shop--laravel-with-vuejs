<?php

namespace Modules\Vendor\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Auction extends Model
{
    use HasFactory;

    protected $fillable = ['date', 'start_time', 'end_time', 'status', 'initial_price', 'current_price'];

    public function item()
    {
        return $this->morphOne(Item::class, 'priceable');
    }
}
