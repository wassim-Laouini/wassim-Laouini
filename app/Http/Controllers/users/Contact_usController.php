<?php

namespace App\Http\Controllers\users;

use App\Http\Controllers\Controller;
use App\Http\Requests\users\ContactRequest;
use App\Models\admins\contact_us;
use Illuminate\Http\Request;

class Contact_usController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $contact=contact_us::get();
        if ($contact) {
            return ApiResponse('about us data',$contact,200);
        }
        return ApiResponse('about us data',200);
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
            'phone'=>$request->phone,
            'email'=>$request->email,
            'upwork_link'=>$request->upwork_link,
      
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
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ContactRequest $request, $id)
    {
        contact_us::findOr($id, function () {
            return ApiResponse('about us not found','',404);
        })->update([
            'phone'=>$request->phone,
            'email'=>$request->email,
            'upwork_link'=>$request->upwork_link,
         ]);
         return ApiResponse('About us updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        contact_us::findOr($id, function () {
            return ApiResponse('about us not found','',404);
        })->delete();
        return ApiResponse('About us updated successfully');
     }
    }

