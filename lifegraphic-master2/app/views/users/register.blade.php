@extends('layouts.main')

@section('content')
    {{ Form::open(array('url'=>'users/create', 'class'=>'form-signup')) }}
        <h2 class="form-signup-heading">Please Register</h2>
     
        <ul>
            @foreach($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
     
        {{ Form::text('firstname', null, array('class'=>'form-control input-block-level regFormElement', 'placeholder'=>'First Name')) }}
        {{ Form::text('lastname', null, array('class'=>'form-control input-block-level regFormElement', 'placeholder'=>'Last Name')) }}
        {{ Form::text('email', null, array('class'=>'form-control input-block-level regFormElement', 'placeholder'=>'Email Address')) }}
        {{ Form::password('password', array('class'=>'form-control input-block-level regFormElement', 'placeholder'=>'Password')) }}
        {{ Form::password('password_confirmation', array('class'=>'form-control input-block-level regFormElement', 'placeholder'=>'Confirm Password')) }}
     
        {{ Form::submit('Register', array('class'=>'btn btn-large btn-success btn-block regFormElement'))}}
    {{ Form::close() }}
@stop