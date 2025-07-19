<?php

namespace Modules\Finance\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class WalletTransaction extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'amount',
        'currency',
        'method',
        'transaction_type',
        'status',
        'external_reference',
        'metadata',
    ];

    protected $casts = [
        'metadata' => 'array',
        'amount' => 'decimal:2',
    ];

    protected function createdAt(): Attribute
    {

        return Attribute::make(

            get: fn ($value) => Carbon::parse($value, 'UTC')
                ->setTimezone(auth()->user()->profile->timezone)
                ->toDateTimeString(),

        );
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
