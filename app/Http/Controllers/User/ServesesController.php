<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\ServesesRequest;
use App\Models\User\Serveses;
use Illuminate\Http\Request;

class ServesesController extends Controller
{

    public function __construct()
    {
        //   $this->middleware(['userpermission:show_service'])->only('index','show');
        //   $this->middleware(['userpermission:create_service'])->only('store');
        //   $this->middleware(['userpermission:update_service'])->only('update');
        //   $this->middleware(['userpermission:delete_service'])->only('destroy');
        //   $this->middleware(['userpermission:active_service'])->only('active');

    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $serveses = Serveses::all();
        return ApiResponse('success', $serveses);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ServesesRequest $request)
    {
        Serveses::Create([
            'image' => $request->image,
            'title' => $request->title,
            'description' => $request->description,
        ]);
        return ApiResponse('Service created successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $serveses = Serveses::findOrFail($id);
        return ApiResponse('success', $serveses);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ServesesRequest $request, $id)
    {
        $serveses = Serveses::findOrFail($id);
        $image = $request->image;
        if ($image) {
            $serveses->update([
                'image' => $image,
                'title' => $request->title,
                'description' => $request->description,
            ]);
        } else {
            $serveses->update([
                'title' => $request->title,
                'description' => $request->description,
            ]);
        }
        return ApiResponse('Service updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $serveses = Serveses::findOrFail($id);
        $serveses->delete();
    }


    public function active($id)
    {

        $serveses = Serveses::findOrFail($id);
        if ($serveses->status == 1) {
            $serveses->update([
                'status' => 0
            ]);
            return ApiResponse('service unactivated successfully');
        } else {
            $serveses->update([
                'status' => 1
            ]);
            return ApiResponse('service activated successfully');
        }
    }
}
