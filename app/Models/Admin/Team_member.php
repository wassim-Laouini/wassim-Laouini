<?php

namespace App\Models\Admin;


use Illuminate\Database\Eloquent\Model;

class Team_members extends Model
{
    protected $table = "team_members";
    protected $fillable = [
        'name',
        'image',
        'email',
        'profession',
        'description',
        'upwork_link',
        'profile_link',
        'status',

    ];
    public function ScopeActive($q)
    {
        return $q->where('status', 1);
    }
}
