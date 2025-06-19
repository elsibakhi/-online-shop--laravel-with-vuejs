<?php

namespace Modules\Vendor\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Attributes\Scope;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Laravel\Scout\Searchable;
use Modules\Admin\Models\SubCategory;
use Modules\Admin\Models\Tag;
use Modules\Customer\Models\Order;
use Modules\Customer\Models\Rating;

class Item extends Model
{
    use HasFactory,Searchable;

    protected $fillable = ['title', 'description', 'code', 'status', 'priceable_type', 'priceable_id', 'quantity', 'remaining_quantity', 'sub_category_id', 'user_id'];

    public function toSearchableArray(): array
    {

        return [
            'title' => $this->title,
            'code' => $this->code,
        ];

    }

    #[Scope]
    public function normal(Builder $query)
    {
        $query->where('priceable_type', 'normal');
    }

    #[Scope]
    public function auction(Builder $query)
    {
        $query->where('priceable_type', 'auction');
    }

    public function seller()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function extensions()
    {
        return $this->hasMany(ItemExtension::class);
    }

    public function ratings()
    {
        return $this->hasMany(Rating::class);
    }

    public function subSpecifications()
    {

        return $this->belongsToMany(SubSpecification::class, 'item_sub_specification')->withPivot('value');
    }

    public function tags()
    {

        return $this->belongsToMany(Tag::class, 'item_tag');
    }

    public function subCategory()
    {
        return $this->belongsTo(SubCategory::class, 'sub_category_id');
    }

    public function priceable(): MorphTo
    {
        return $this->morphTo();
    }

    public function orders(): BelongsToMany
    {
        return $this->belongsToMany(Order::class, 'item_order')->withPivot(['quantity']);
    }
}
