<?php

namespace Modules\Admin\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DestroyTagsRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'ids' => ['required', 'array', 'min:1', 'max:'.config('admin.tags.max_actions')],
            'ids.*' => ['required', 'integer', 'exists:tags,id'],
        ];
    }
}
