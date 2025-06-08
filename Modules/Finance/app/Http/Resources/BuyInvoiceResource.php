<?php

namespace Modules\Finance\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BuyInvoiceResource extends JsonResource
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

            'buyer' => $this->buyer->name,
            'status' => $this->status,
            'created_at' => $this->created_at,
            'items' => ItemForBuyInvoiceResource::collection($this->order->items),

        ];
    }
}
