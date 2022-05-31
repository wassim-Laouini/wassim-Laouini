<?php

namespace App\Models\users;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact_page extends Model
{
    use HasFactory;
    protected $table="contact_pages";
    protected $fillable = [
        'image',
        'body',
        'status'
        
    ];
    protected $casts = [
        'body' => 'array',
    ];
}
