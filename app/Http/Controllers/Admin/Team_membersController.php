<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Team_membersRequest;
use App\Http\Requests\Admin\TeamRequest;
use App\Models\Admin\Team_members;
use Illuminate\Http\Request;

class Team_membersController extends Controller
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
        $Team_members = Team_members::all();
        return ApiResponse('Success', $Team_members);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Team_membersRequest $request)
    {
        Team_members::Create([
            'name' => $request->name,
            'image' => $request->image,
            'email' => $request->email,
            'description' => $request->description,
            'profession' => $request->profession,
            'upwork_link' => $request->upwork_link,
            'profile_link' => $request->profile_link,

        ]);
        return ApiResponse('Team created successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $Team_members = Team_members::findOrFail($id);
        return ApiResponse('Success', $Team_members);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Team_membersRequest $request, $id)
    {
        $Team_members = Team_members::findOrFail($id);
        $image = $request->image;
        if ($image) {
            $Team_members->update([
                'name' => $request->name,
                'image' => $request->image,
                'email' => $request->email,
                'description' => $request->description,
                'profession' => $request->profession,
                'upwork_link' => $request->upwork_link,
                'profile_link' => $request->profile_link,
            ]);
        } else {
            $Team_members->update([
                'name' => $request->name,
                'email' => $request->email,
                'description' => $request->description,
                'profession' => $request->profession,
                'upwork_link' => $request->upwork_link,
                'profile_link' => $request->profile_link,
            ]);
        }
        return ApiResponse('Team members updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $Team_members = Team_members::findOrFail($id);
        $Team_members->delete();
        return ApiResponse('Team members Deleted successfully');
    }


    public function active($id)
    {

        $Team_members = Team_members::findOrFail($id);
        if ($Team_members->status == 1) {
            $Team_members->update([
                'status' => 0
            ]);
            return ApiResponse('Team member unactivated successfully');
        } else {
            $Team_members->update([
                'status' => 1
            ]);
            return ApiResponse('Team member activated successfully');
        }
    }
}
