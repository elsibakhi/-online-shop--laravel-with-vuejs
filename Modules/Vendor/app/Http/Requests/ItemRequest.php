<?php

namespace Modules\Vendor\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class ItemRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(Request $request): array
    {

        return [
            'title' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string', 'max:255'],
            'quantity' => ['required', 'integer', 'min:'.config('vendor.items.min_quantity'), 'max:'.config('vendor.items.max_quantity')],
            'sub_category' => ['required', 'integer', 'exists:sub_categories,id'],
            'extensions' => ['nullable', 'array', 'max:'.config('vendor.items.extensions.MAX_FILES_NUMBER')],
            'extensions.*' => ['required_with:extensions', Rule::file()->extensions(config('vendor.items.extensions.ACCEPTED_IMAGE_EXTENSIONS')), 'image', 'max:'.config('vendor.items.extensions.MAX_FILE_SIZE')],
            'specifications' => ['nullable', 'array'],
            'specifications.*' => ['required_with:specifications', 'array', 'max:'.config('vendor.items.max_specifications')],
            'specifications.*.name' => ['required_with:specifications.*', 'string', 'min:2', 'max:255'],
            'specifications.*.subs' => ['required_with:specifications.*', 'array', 'max:'.config('vendor.items.max_sub_specifications')],
            'specifications.*.subs.*.key' => ['required_with:specifications.*.subs', 'string', 'min:2', 'max:255'],
            'specifications.*.subs.*.value' => ['required_with:specifications.*.subs', 'string', 'min:2', 'max:255'],
            'payment_type' => ['required', Rule::in(['normal', 'auction'])],
            'price' => ['nullable', 'required_if:payment_type,normal', 'numeric', 'min:'.config('vendor.items.min_price'), 'max:'.config('vendor.items.max_price')],
            'discount' => ['nullable', 'required_if:payment_type,normal', 'numeric', 'decimal:0,2', 'min:0', 'max:1'],
            'isBlackFridaySupported' => ['nullable', 'required_if:payment_type,normal', 'boolean'],
            'initial_price' => ['nullable', 'required_if:payment_type,auction', 'numeric', 'min:'.config('vendor.items.min_price'), 'max:'.config('vendor.items.max_price')],
            'date' => ['nullable', 'required_if:payment_type,auction', 'date', 'after_or_equal:today', 'before_or_equal:'.now()->addMonths(config('vendor.items.max_auction_session_date_from_today_months'))->toDateString()],
            'start_time' => ['nullable', 'required_if:payment_type,auction', 'date_format:H:i:s'],
            'end_time' => ['nullable', 'required_if:payment_type,auction', 'date_format:H:i:s', 'after:start_time'],
            'tags' => ['nullable', 'array', 'max:'.config('vendor.items.max_tags_on_item')],
            'tags.*' => ['required_with:tags', 'string', 'min:2', 'max:50'],

        ];
    }
}
