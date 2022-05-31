<?php

namespace App\Models\users;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AboutUs extends Model
{
    use HasFactory;
    protected $table= "about_us" ;
    protected $fillable = [
        'title',
        'description',
        'image',
        'status',
        
    ];
    public function ScopeActive($q){
        return $q->where('status',1);
    }
}
