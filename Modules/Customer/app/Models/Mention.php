<?php

namespace Modules\Customer\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Modules\Vendor\Models\Item;

// use Modules\Customer\Database\Factories\CartFactory;

class Mention extends Model
{
    use HasFactory;

    /**
     * Define mentionable relationship
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany<Item, Cart>
     */
    public function mentionable(): MorphTo
    {
        return $this->MorphTo('mentionable');
    }
}
