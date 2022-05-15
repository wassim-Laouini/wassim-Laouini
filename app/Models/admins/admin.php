<?php

namespace App\Models\admins;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class admin extends Model
{
    use HasFactory;
    protected $table= "admins" ;
    protected $fillable = [
        'name',
        'email',
        'password',
        'status', 
    ];
    protected $hidden = [
        'password',
        'remember_token',
        'created_at',
        'updated_at',
    ];
}
