<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;

class Banner extends Model
{
    protected $table = "Banners";
    protected $fillable = [
        'image',
        'text',
    ];
}
