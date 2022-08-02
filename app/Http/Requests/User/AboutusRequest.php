<?php

namespace App\Http\Requests\User;

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
        if (request()->isMethod('post')) {
            return [
                'title' => 'required|max:200|string',
                'description' => 'required|max:10000|string',
                'image' => 'required|mimes:' . Photo_Extension(),
            ];
        } else {
            return [
                'title' => 'required|max:200|string',
                'description' => 'required|max:10000|string',
                'image' => 'mimes:' . Photo_Extension(),
            ];
        }
    }
}
