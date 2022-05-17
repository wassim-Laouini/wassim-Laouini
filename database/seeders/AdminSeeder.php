<?php

namespace Database\Seeders;


use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = User::Create([
            'name' => 'firas baccouch',
            'email'=> 'firasbaccouch5@gmail.com',
            'password'=> Hash::make('123456789'),
            'status'=> 1,
            'role' => ["owner"],
        ]); 
        $role =Role::create([
            'name' => 'owner',
          ]);

          $permissions = Permission::pluck('id','id')->all();
          $role->syncPermissions($permissions);
        $admin->assignRole([$role->id]);


    }
}
