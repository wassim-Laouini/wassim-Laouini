<?php

namespace App\Http\Controllers\admins;

use App\Http\Controllers\Controller;
use App\Http\Requests\admins\AdminRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AdminsController extends Controller
{


    public function __construct()
    {

        //  $this->middleware(['userpermission:create_admin'])->only('create');
        //  $this->middleware(['userpermission:active_admin'])->only('active');
        // $this->middleware(['userpermission:show_admin'])->only('show', 'index');
        // $this->middleware(['userpermission:delete_admin'])->only('destroy');
        //$this->middleware(['userpermission:update_admin'])->only('update');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::all();
        return ApiResponse('success', $users);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AdminRequest $request)
    {

        $user = User::Create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            //'role' => $request->role,
            'status' => $request->status,
        ]);
        // $user->assignRole($request->role);
        return ApiResponse('User created successfully', '', 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::findOrFail($id);
        return ApiResponse('success', $user);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(AdminRequest $request, $id)
    {
        $user = User::findOrFail($id);
        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'age' => $request->age,
            'country' => $request->country,
            'status' => $request->status,
            'gender' => $request->gender,
            //  'role' => $request->role,

        ]);
        //$user->assignRole($request->role);
        return ApiResponse('Admin updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user =  User::findOrFail($id);
        $user->delete();
        return ApiResponse('Admin deleted successfully');
    }

    public function active($id)
    {
        $user =  User::findOrFail($id);
        if ($user->status == 1) {
            $user->update([
                'status' => 0
            ]);
            return ApiResponse($user->name . ' is now inactive');
        } else {
            $user->update([
                'status' => 1
            ]);
            return ApiResponse($user->name . ' is now active');
        }
    }
}
