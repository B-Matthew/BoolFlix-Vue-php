<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'myController@home')
      ->name('home');

Route::get('/films/{id}' , 'myController@films')
      ->name('films');

Route::get('/tv/{id}' , 'myController@tv')
->name('tv');


