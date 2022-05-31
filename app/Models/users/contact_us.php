<?php

namespace App\Models\users;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class contact_us extends Model
{
    use HasFactory;
    protected $table="contact_us";
    protected $fillable=[
    'name',
    'email',
    'phone',
    'description',
    ];
    public function ScopeActive($q){
        return $q->where('status',1);
    }
}
