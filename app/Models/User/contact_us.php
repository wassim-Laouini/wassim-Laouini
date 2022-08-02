<?php

namespace App\Models\User;

use Illuminate\Database\Eloquent\Model;

class Contact_us extends Model
{

    protected $table = "contact_us";
    protected $fillable = [
        'name',
        'email',
        'phone',
        'description',
    ];
    public function ScopeActive($q)
    {
        return $q->where('status', 1);
    }
}
