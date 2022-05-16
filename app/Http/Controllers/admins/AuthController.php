<?php

namespace App\Http\Controllers\admins;


use App\Http\Controllers\Controller;
use App\Http\Requests\admins\LoginRequest;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(LoginRequest $request){
     $credentials = [
         'email' => $request->email,
         'password' => $request->password,   
     ];
     if($request->remember_token == 1){
        if(!$token = Auth::setTTL(10080)->attempt($credentials)){
        return ApiResponse('Email or password is incorrect','',401);
        }
        return $this->respondWithToken($token);
    }else{
        if (!$token = Auth::attempt($credentials)) {
            return ApiResponse('Email or password is incorrect','',401);
        }
        return $this->respondWithToken($token);
     }
     }


     protected function respondWithToken($token)
     {
         return response()->json([
             'access_token' => $token,
             'token_type' => 'bearer',
             'expires_in' => auth()->factory()->getTTL()
         ]);
     }

    
    
}
