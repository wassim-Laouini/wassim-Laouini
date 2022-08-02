<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\BannerRequest;
use App\Models\Admin\Banner;
use Illuminate\Http\Request;

class BannersController extends Controller
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
        $Banners = Banner::all();
        return ApiResponse('Success', $Banners);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(BannerRequest $request)
    {
        Banner::Create([
            'image' => $request->image,
            'text' => $request->text,

        ]);
        return ApiResponse('Banner created successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $Banner = Banner::findOrFail($id);
        return ApiResponse('Success', $Banner);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(BannerRequest $request, $id)
    {
        $Banner = Banner::findOrFail($id);
        $image = $request->image;
        if ($image) {
            $Banner->update([
                'image' => $image,
                'text' => $request->text,

            ]);
        } else {
            $Banner->update([
                'text' => $request->text,
            ]);
        }
        return ApiResponse('Banner updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $Banner = Banner::findOrFail($id);
        $Banner->delete();
        return ApiResponse('Banner Deleted successfully');
    }
}
