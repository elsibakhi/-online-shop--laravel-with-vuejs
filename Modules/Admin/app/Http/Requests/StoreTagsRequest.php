<?php

namespace Modules\Admin\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreTagsRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'tags' => ['required', 'array', 'min:1', 'max:'.config('admin.tags.max_adds')],
            'tags.*' => ['required', 'string', 'min:1', 'max:80', 'unique:tags,tag'],
        ];
    }
}
