<?php

namespace App\Http\Requests\users;

use Illuminate\Foundation\Http\FormRequest;

class ServesesRequest extends FormRequest
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
        if (request()->isMethod('post')) {
            return [
                'image' => 'required|mimes:' . Photo_Extension(),
                'title' => 'required|string|max:40|min:5',
                'description' => 'required|string|max:2000',
            ];
        } else {
            return [
                'image' => 'mimes:' . Photo_Extension(),
                'title' => 'required|string|max:40|min:5',
                'description' => 'required|string|max:2000',
            ];
        }
    }
}
