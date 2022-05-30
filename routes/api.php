<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/v1/posts', 'Api\PostController@index');
Route::get('/v1/posts/{post}', 'Api\PostController@show');

Route::post('/v1/contact', 'Api\LeadController@store');
