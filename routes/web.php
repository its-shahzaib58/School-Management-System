<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TestController;
use App\Http\Controllers\StudentsController;

Route::get('/', function () {
    return view('index');
});

Route::get('/system', function () {
    return view('system');
});

//With Controller
Route::get('/users/list',[StudentsController::class,'index']);
Route::post('/user/store',[StudentsController::class,'store']);
Route::get('/test', [TestController::class, 'test']);

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
