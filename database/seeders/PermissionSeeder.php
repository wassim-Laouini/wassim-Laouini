<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $permissions =[
            'create aboutus',
            'edit aboutus',
            'delete aboutus',
            'show aboutus',
            'update aboutus',
            'create coutactus',
            'edit coutactus',
            'delete coutactus',
            'show coutactus',

        ];
        
      foreach ($permissions as $permission) {
        Permission::create(['name' => 'create']);
      }
        $role->givePermissionTo($permission);
    }
}
