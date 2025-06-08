<?php

namespace Modules\Customer\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Modules\Customer\Rules\ItemQuantityInCart;

class AddOrUpdateToCartRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {

        return [
            'item' => ['required', 'integer', 'exists:items,id'],
            'quantity' => ['nullable', 'integer', new ItemQuantityInCart],
        ];
    }

    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }
}
