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
            'create_about_us',
            'active_about_us',
            'delete_about_us',
            'update_about_us',
            'show_about_us',
            'create_coutact_us',
            'update_coutact_us',
            'delete_coutact_us',
            'show_coutact_us',
            'active_coutact_us',
            'create_admin',
            'show_admin',
            'update_admin',
            'delete_admin',
            'active_admin',

        ];
        
      foreach ($permissions as $permission) {
        Permission::create(['name' => $permission]);
      }

    }
}
