<?php

namespace Modules\Vendor\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ItemResource extends JsonResource
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
            'rating' => $this->ratings()->avg('rating'),
            'user_id' => $this->user_id,
            'sub_title' => $this->subCategory->name,
            'priceable_type' => $this->priceable_type,
            'image_path' => $this->when($this->extensions()->count() > 0, fn () => $this->extensions()->first()->path),
            $this->mergeWhen($this->priceable_type == 'normal', [
                'price' => $this->priceable->price,
                'discount' => $this->priceable->discount,
            ]),
            $this->mergeWhen($this->priceable_type == 'auction', [
                'price' => $this->priceable->initial_price,

            ]),
        ];
    }
}
