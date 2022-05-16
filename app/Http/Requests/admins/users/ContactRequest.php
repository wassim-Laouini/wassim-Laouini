<?php

namespace App\Http\Requests\users;

use Illuminate\Foundation\Http\FormRequest;

class ContactRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'phone' => 'required|max:200|min:10|string',
            'email' => 'required|max:10000|min:10|string',
            'upwork_link' => 'numeric|required|between:0,1'
        ];
    }
}
