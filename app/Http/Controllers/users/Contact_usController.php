<?php

namespace App\Http\Controllers\users;

use App\Http\Controllers\Controller;
use App\Http\Requests\users\ContactRequest;
use App\Models\users\contact_us;
use Illuminate\Http\Request;


class Contact_usController extends Controller
{
    public function __construct()
    {
        //  $this->middleware(['userpermission:show_coutact_us'])->only('index','show');
        //  $this->middleware(['userpermission:delete_coutact_us'])->only('destroy');

    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $contact = contact_us::all();

        return ApiResponse('contact us data', $contact, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ContactRequest $request)
    {

        contact_us::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'description' => $request->description

        ]);
        return ApiResponse('About us created successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $contact_us  = contact_us::findOrFail($id);
        return ApiResponse('success', $contact_us);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update()
    {
        return ApiResponse('you can\'t update ', null, 404);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $contact_us = contact_us::findOrFail($id);
        $contact_us->delete();
        return  ApiResponse('Contact us deleted successfully');
    }
}
