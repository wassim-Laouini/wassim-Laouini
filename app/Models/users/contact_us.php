<?php

namespace App\Models\users;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class contact_us extends Model
{
    use HasFactory;
    protected $table="contact_us";
    protected $fillable=[
    'phone',
    'email',
    'upwork_link',
    'map',
    ];
    public $timestemp=true;
}
