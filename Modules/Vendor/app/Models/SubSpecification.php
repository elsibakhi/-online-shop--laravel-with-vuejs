<?php

namespace Modules\Vendor\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubSpecification extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = ['name'];

    public function specification()
    {
        return $this->belongsTo(Specification::class, 'specification_id');
    }

    public function item()
    {
        return $this->belongsTo(Item::class);
    }
}
