<?php

namespace Modules\Vendor\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ItemExtension extends Model
{
    use HasFactory;

    protected $fillable = ['path', 'name', 'mime_type', 'size'];
}
