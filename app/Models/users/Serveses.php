<?php

namespace App\Models\users;


use Illuminate\Database\Eloquent\Model;

class Serveses extends Model
{
    
    protected $table="contact_us";
    protected $fillable=[
    'phone',
    'email',
    'upwork_link',
    'map',
    'status',
    ];
}
