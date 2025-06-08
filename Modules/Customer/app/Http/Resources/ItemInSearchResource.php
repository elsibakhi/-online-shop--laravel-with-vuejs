<?php

namespace Modules\Customer\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ItemInSearchResource extends JsonResource
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
            'code' => $this->code,

            'image' => $this->when($this->extensions()->exists(), fn () => $this->extensions()->first()->path),
            $this->mergeWhen($this->priceable_type == 'normal', [
                'price' => $this->priceable->price,

            ]),
            $this->mergeWhen($this->priceable_type == 'auction', [
                'price' => $this->priceable->initial_price,

            ]),
        ];
    }
}
