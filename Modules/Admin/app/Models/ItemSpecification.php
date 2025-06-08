<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ItemSpecification extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = ['name'];

    public function subSpecifications()
    {
        return $this->hasMany(ItemSubSpecification::class);
    }
}
