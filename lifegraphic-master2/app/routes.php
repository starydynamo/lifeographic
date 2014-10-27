<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

// Main route

Route::get('/', function()
{
	if(Auth::check()) {
		return Redirect::to('health');
	} else {
		return View::make('users.login');
	}
});

// About Us

Route::get('aboutus', function() {
	return View::make('about');
});

// Controller

Route::controller('users', 'UsersController');

// Get

Route::get('login', 'UsersController@getLogin');

Route::get('register', 'UsersController@getRegister');

Route::get('logout', 'UsersController@getLogout');

Route::get('viewSubmissions', 'UsersController@viewSubmissions');

Route::get('pullSubmissions', 'UsersController@pullSubmissions');

Route::get('{category}', 'UsersController@getCategory');

// Post

Route::post('{category}', 'UsersController@postCategory');

Route::post('reason/new', 'UsersController@postReason');

