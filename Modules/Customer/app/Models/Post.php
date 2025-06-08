<?php

namespace Modules\Customer\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Modules\Customer\Models\Scopes\ActivePostScope;
use Modules\Vendor\Models\Item;

class Post extends Model
{
    use HasFactory;

    protected $fillable = ['content', 'likes', 'user_id', 'status', 'post_id'];

    // Always eager-load user name
    protected $with = ['user'];

    // ✅ Clean relationship: user
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // ✅ Comments on this post (1st level)
    public function comments()
    {
        return $this->hasMany(Post::class, 'post_id');
    }

    public function parentPost()
    {
        return $this->belongsTo(Post::class, 'post_id');
    }

    // ✅ Likes
    public function likes()
    {
        return $this->belongsToMany(User::class, 'likes', 'post_id', 'user_id');
    }

    public function users()
    {
        return $this->morphedByMany(User::class, 'mentionable', 'mentions');
    }

    public function items()
    {
        return $this->morphedByMany(Item::class, 'mentionable', 'mentions');
    }

    // ✅ Scopes
    public function scopePost(Builder $query)
    {
        $query->whereNull('post_id');
    }

    public function scopeComment(Builder $query)
    {
        $query->whereNotNull('post_id');
    }

    // ✅ Global Scope
    protected static function booted()
    {
        static::addGlobalScope(new ActivePostScope);
    }
}
