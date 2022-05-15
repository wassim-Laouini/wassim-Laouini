<?php

namespace App\Http\Controllers\admins;

use App\Http\Controllers\Controller;
use App\Http\Requests\admins\AboutusRequest;
use App\Models\admins\AboutUs;
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
      $aboutus =   AboutUs::active()->first();
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
        AboutUs::findOr($id, function () {
            return ApiResponse('about us not found','',404);
        })->update([
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
        AboutUs::findOr($id, function () {
            return ApiResponse('about us not found','',404);
        })->delete();
        return ApiResponse('About us updated successfully');
    }
}
