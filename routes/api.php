<?php

use App\Http\Controllers\admins\AboutUsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admins\Authcontroller;
use App\Http\Controllers\users\Contact_usController;

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

//user interface
Route::apiResource('/about-us',AboutUsController::class);
//admin dashbord
Route::post('/login',[AuthController::class,'login']);
// contact us 
Route::apiResource('/contact-us',Contact_usController::class);
