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
        $this->middleware(['userpermission:show_about_us'])->only('index','show');
        $this->middleware(['userpermission:create_coutact_us'])->only('store');
        $this->middleware(['userpermission:update_coutact_us'])->only('update');
        $this->middleware(['userpermission:delete_coutact_us'])->only('destroy');
        $this->middleware(['userpermission:active_about_us'])->only('active');

    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $contact = contact_us::all();

        return ApiResponse('contact us data',$contact,200);
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
            'map' => $request->map,
            'status' => $request->status
      
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
        return ApiResponse('success',$contact_us);
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
        $contact_us  = contact_us::findOrFail($id);
        $contact_us->update([
            'phone'=>$request->phone,
            'email'=>$request->email,
            'upwork_link'=>$request->upwork_link,
            'map' => $request->map,
            'status' => $request->status,
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
        $contact_us =contact_us::findOrFail($id);
        $contact_us->delete();
       return  ApiResponse('Contact us deleted successfully');
    }
    public function active($id)
    {   
        $countact_us = contact_us::findOrFail($id);
        if($countact_us->status == 1){
            $countact_us->update([
                'status' => 0
            ]);
            return ApiResponse('Countact us unactivated successfully');
        }else{
            $countact_us->update([
                'status' => 1
            ]);
            return ApiResponse('Countact us activated successfully');
        }
    
    }
    }
