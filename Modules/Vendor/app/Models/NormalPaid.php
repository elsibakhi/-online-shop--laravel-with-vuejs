<?php

namespace Modules\Vendor\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NormalPaid extends Model
{
    use HasFactory;

    protected $table = 'normal_paids';

    protected $fillable = ['discount', 'price', 'isBlackFridaySupported'];

    public function item()
    {
        return $this->morphOne(Item::class, 'priceable');
    }
}
