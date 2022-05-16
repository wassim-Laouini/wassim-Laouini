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
            'phone' => 'required|max:9999999999999999|min:999999|numeric|unique:contact_us,phone,'.$this->id,
            'email' => 'required|max:150|min:6|email|unique:contact_us,email,'.$this->id,
            'upwork_link' => 'string|required|max:10000|min:30',
            'map' => 'nullable'
        ];
    }
}