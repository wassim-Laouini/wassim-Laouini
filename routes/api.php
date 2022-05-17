<?php

use App\Http\Controllers\admins\AdminsController;
use App\Http\Controllers\admins\AuthController;
use App\Http\Controllers\admins\RoleController;
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
   Route::get("/about-us/status",[AboutUsController::class,'active']);
   // contact us 
   Route::apiResource('/contact-us',Contact_usController::class);
   Route::get("/contact-us/status",[Contact_usController::class,'active']);
   //create admin
   Route::apiResource('/admin',AdminsController::class);
   Route::get('/admin-status/{id}',[AdminsController::class,'active']);
   //create role
   Route::apiResource('/role',RoleController::class);
});
//------------------admin dashbord-------------------
