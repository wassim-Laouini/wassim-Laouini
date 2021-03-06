<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class AdminRequest extends FormRequest
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
                'name' => 'required|string|max:24|min:4',
                'email' => 'required|email|max:100|min:10|unique:users,email',
                'password' => 'required|string|max:50|min:6|confirmed',
                'age' => 'numeric|max:100|min:1|',
                'status' => 'required|numeric|between:0,1',
                'gender' => 'string|max:20|min:3',
                //'role' => 'required|exists:roles,name|max:255|array'
            ];
        } else {
            return [
                'name' => 'required|string|max:24|min:4',
                'email' => 'required|email|max:100|min:10|unique:users,email,' . $this->id,
                'age' => 'numeric|max:100|min:1|',
                'status' => 'required|numeric|between:0,1',
                'gender' => 'string|max:20|min:3',
                //'role' => 'required|exists:roles,name|max:255|array'
            ];
        }
    }
}
