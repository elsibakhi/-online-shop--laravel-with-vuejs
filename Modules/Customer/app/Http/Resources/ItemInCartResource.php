<?php

namespace Modules\Customer\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ItemInCartResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'status' => $this->status,
            'quantity' => $this->pivot->quantity,
            'remaining_quantity' => $this->remaining_quantity,
            'image_path' => $this->when($this->extensions()->exists(), fn () => $this->extensions()->first()->path),
            $this->mergeWhen($this->priceable_type == 'normal', [
                'price' => $this->priceable->price,
                'discount' => $this->priceable->discount,

            ]),

        ];
    }
}
