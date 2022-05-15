<?php

namespace App\Models\admins;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AboutUs extends Model
{
    use HasFactory;
    protected $table= "about_us" ;
    protected $fillable = [
        'title',
        'body',
        'status',
        
    ];
    protected $hidden = [
        'created_at',
        'updated_at',
    ];
}
