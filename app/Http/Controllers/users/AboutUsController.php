<?php

namespace App\Http\Controllers\users;

use App\Http\Controllers\Controller;
use App\Http\Requests\users\AboutusRequest;
use App\Models\users\AboutUs;
use Illuminate\Http\Request;

class AboutUsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      $aboutus =   AboutUs::active()->get();
     return ApiResponse('about us data',$aboutus,200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AboutusRequest $request)
    {
        AboutUs::create([
            'title' => $request->title,
            'body' => $request->body,
            'status' => $request->status
        ]);
        return ApiResponse('About us created successfully');
    }

    /*
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
    public function update(AboutusRequest $request, $id)
    {
       $aboutus = AboutUs::find($id);
       if(!$aboutus){
        return ApiResponse('About us in not found',null,404);
       }
        $aboutus->update([
            'title' => $request->title,
            'body' => $request->body,
            'status' => $request->status
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
        $aboutus = AboutUs::find($id);
        if(!$aboutus){
            return ApiResponse('About us in not found',null,404);
           }
        $aboutus->delete();
        return ApiResponse('About us deleted successfully');
    }
}
