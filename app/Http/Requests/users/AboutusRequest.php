<?php

namespace App\Http\Requests\users;

use Illuminate\Foundation\Http\FormRequest;

class AboutusRequest extends FormRequest
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
            'title' => 'required|max:200|min:10|string',
            'body' => 'required|max:10000|min:10|string',
            'status' => 'numeric|required|between:0,1'
        ];
    }
}
