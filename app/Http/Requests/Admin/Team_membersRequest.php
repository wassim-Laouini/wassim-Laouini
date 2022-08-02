<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class Team_membersRequest extends FormRequest
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
                'image' => 'required',
                'name' => 'required|max:100|string',
                'email' => 'required|max:150|email',
                'profession' => 'required',
                'description' => 'required|max:2000',
                'upwork_link' => 'required',

            ];
        } else {
            return [
                'name' => 'required|max:100|string',
                'email' => 'required|max:150|email',
                'profession' => 'required',
                'description' => 'required|max:2000',
                'upwork_link' => 'required',
            ];
        }
    }
}
