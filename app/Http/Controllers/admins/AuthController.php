<?php

namespace App\Http\Controllers\admins;

use App\Http\Controllers\Controller;
use App\Http\Requests\admins\LoginRequest;
use Carbon\Carbon;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(LoginRequest $request){
     $credentials = [
         'email' => $request->email,
         'password' => $request->password,   
     ];
     if($request->remember_token == 1){
        if(!$token = JWTAuth::attempt($credentials, ['exp' => Carbon::now()->addDays(7)->timestamp])){
        

     }else{
        $token = JWTAuth::attempt($credentials);
     }
     



    
     }
    }
}
