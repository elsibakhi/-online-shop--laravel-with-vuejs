<?php

namespace Modules\Vendor\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Specification extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = ['name'];

    public function subSpecifications()
    {
        return $this->hasMany(SubSpecification::class);
    }
}
