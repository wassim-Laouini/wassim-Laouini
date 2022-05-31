<?php

namespace App\Http\Controllers\users;

use App\Http\Controllers\Controller;
use App\Http\Requests\users\AboutusRequest;
use App\Models\users\AboutUs;
use Illuminate\Http\Request;

class AboutUsController extends Controller
{
    public function __construct()
    {
        $this->middleware(['userpermission:show_about_us'])->only('index','show');
        $this->middleware(['userpermission:create_about_us'])->only('store');
        $this->middleware(['userpermission:update_about_us'])->only('update');
        $this->middleware(['userpermission:delete_about_us'])->only('destroy');
        $this->middleware(['userpermission:active_about_us'])->only('active');

    }
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      $aboutus =   AboutUs::all();
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
            'description' => $request->description,
            'image' => $request->image,
        ]);
        return ApiResponse('About us created successfully');
    }

    
    public function show($id)
    {
        $aboutus =AboutUs::findOrFail($id);
       
        return ApiResponse($aboutus);
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
       $aboutus = AboutUs::findOrFail($id);

       $image = $request->image;
        if($image){
            $aboutus->update([
                'title' => $request->title,
                'description' => $request->description,
                'image' => $iamge,
            ]);
        }else{
            $aboutus->update([
                'title' => $request->title,
                'description' => $request->description,
            ]);
        }
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
        $aboutus = AboutUs::findOrFail($id);
        $aboutus->delete();
        return ApiResponse('About us deleted successfully');
    }
    public function active($id)
    {   
        $aboutus = AboutUs::findOrFail($id);
        if($aboutus->status == 1){
            $aboutus->update([
                'status' => 0
            ]);
            return ApiResponse('About us unactivated successfully');
        }else{
            $aboutus->update([
                'status' => 1
            ]);
            return ApiResponse('About us activated successfully');
        }
    
    }
}
