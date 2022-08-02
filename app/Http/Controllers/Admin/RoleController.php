<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\RoleRequest;
use App\Http\Resources\Admin\RoleResource;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{


    public function __construct()
    {

        //$this->middleware(['userpermission:create_role'])->only('create');
        // $this->middleware(['userpermission:show_role'])->only('show','index');
        //  $this->middleware(['userpermission:delete_role'])->only('destroy');
        //$this->middleware(['userpermission:update_role'])->only('update');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $role = Role::get();
        return ApiResponse('success', RoleResource::collection($role));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(RoleRequest $request)
    {

        $role = Role::create([
            'name' => $request->name,
        ]);
        $role->syncPermissions($request->permissions);
        return ApiResponse('Role created successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $role = Role::findOrFail($id);
        return ApiResponse('success', $role);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(RoleRequest $request, $id)
    {
        $role = Role::FindOrFail($id)->update([
            'name' => $request->name,
        ]);
        $role->syncPermissions($request->permissions);
        return ApiResponse('Role updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Role::findOrFail($id)->delete();
        return ApiResponse('Role Deleted Sucessfully');
    }
}
