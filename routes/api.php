<?php

use App\Http\Controllers\Admin\AdminsController;
use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\BannersController;
use App\Http\Controllers\Admin\RoleController;
use App\Http\Controllers\Admin\ServicesController;
use App\Http\Controllers\Admin\Team_membersController;
use App\Http\Controllers\User\AboutUsController;
use App\Http\Controllers\User\Contact_usController;
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
//Route::post('/admin/login', [AuthController::class, 'login']);

//Route::middleware(['AdminAuth'])->group(function () {
//Team members
Route::apiResource('/team-members', Team_membersController::class);
Route::get("/team-members/status/{id}", [Team_membersController::class, 'active']);
//Banner
Route::apiResource('/banner', BannersController::class);
// contact us 
Route::apiResource('/contact-us', Contact_usController::class);
//create admin
//Route::apiResource('/admin', AdminsController::class);
//Route::get('/admin-status/{id}', [AdminsController::class, 'active']);
//role
Route::apiResource('/role', RoleController::class);
//serveses
Route::apiResource('/services', ServicesController::class);
Route::get("/services/status/{id}", [ServicesController::class, 'active']);
//});

//------------------admin dashbord-------------------
