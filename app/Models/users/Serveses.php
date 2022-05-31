<?php

namespace App\Models\users;


use Illuminate\Database\Eloquent\Model;

class Serveses extends Model
{
    
    protected $table="serveses";
    protected $fillable=[
    'image',
    'title',
    'description',
    'status',
    ];
    public function ScopeActive($q){
        return $q->where('status',1);
    }

}
