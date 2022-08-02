<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class password_reset extends Model
{
    use HasFactory;
    protected $table = "password_resets";
    protected $fillable = [
        'email',
        'token',
        'created_at'

    ];
}
