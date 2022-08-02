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
            'name' => 'required|max:50|string',
            'email' => 'required|max:150|min:10|email',
            'phone' => 'numeric|required|max:20',
            'description' => 'required|max:2000|min:10'

        ];
    }
}
