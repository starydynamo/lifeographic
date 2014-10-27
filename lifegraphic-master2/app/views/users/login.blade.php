@extends('layouts.main')

@section('content')
	{{ Form::open(array('url'=>'users/login', 'method' => 'POST', 'class'=>'form-signin')) }}
	    <h2 class="form-signin-heading">Please Login</h2>
	 
	    {{ Form::text('email', null, array('class'=>'input-block-level form-control loginFormElement', 'placeholder'=>'Email Address')) }}
	    {{ Form::password('password', array('class'=>'input-block-level form-control loginFormElement', 'placeholder'=>'Password')) }}
	 
	    {{ Form::submit('Login', array('class'=>'btn btn-large btn-success btn-block loginFormElement'))}}
	{{ Form::close() }}
@stop