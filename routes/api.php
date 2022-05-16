<?php

use App\Http\Controllers\admins\AdminsController;
use App\Http\Controllers\admins\AuthController;
use App\Http\Controllers\users\AboutUsController;
use App\Http\Controllers\users\Contact_usController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//------------------admin dashbord-------------------
//--admin
Route::post('/login',[AuthController::class,'login']);

Route::middleware(['AdminAuth'])->group(function () {
   //about us
   Route::apiResource('/about-us',AboutUsController::class);
   // contact us 
   Route::apiResource('/contact-us',Contact_usController::class);
   //create admin
   Route::post('/create-admin',[AdminsController::class,'create']);
   Route::get('/firas',function(){
    return 'yes you are login';
   });
});
//------------------admin dashbord-------------------
