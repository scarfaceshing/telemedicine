<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;

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

  Route::group([
      'middlware' => 'auth:sanctum',
      'prefix' => 'auth'
     ], function($router) {
       Route::post('login', [AuthController::class, 'login']);
       Route::post('refresh', [AuthController::class, 'refresh']);
       Route::get('me', [AuthController::class, 'me']);
       Route::post('logout', [AuthController::class, 'logout']);
       Route::post('check-auth', [AuthController::class, 'checkAuth']);

       Route::group([
        'prefix' => 'data'
       ], function($router) {
        Route::get('user/{offset}/{limit}', [UserController::class, 'index']);
       });
});
