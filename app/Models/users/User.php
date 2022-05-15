<?php

namespace App\Models\users;


use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;


class User extends Authenticatable implements JWTSubject
{
    

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $table= "users" ;
    protected $fillable = [
        'name',
        'email',
        'password',
        'age',
        'country',
        'status',
        'gender',
        
    ];
   

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
        'created_at',
        'updated_at',
    ];
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }


   
  
}
