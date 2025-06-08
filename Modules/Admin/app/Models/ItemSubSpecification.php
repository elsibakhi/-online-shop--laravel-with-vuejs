<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ItemSubSpecification extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = ['item_specification_id', 'value'];

    public function specification()
    {
        return $this->belongsTo(ItemSpecification::class, 'item_specification_id');
    }

    public function item()
    {
        return $this->belongsTo(Item::class);
    }
}
