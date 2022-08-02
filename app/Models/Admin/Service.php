<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    protected $table = "services";
    protected $fillable = [
        'image',
        'title',
        'description',
        'status',


    ];
    public function ScopeActive($q)
    {
        return $q->where('status', 1);
    }
}
