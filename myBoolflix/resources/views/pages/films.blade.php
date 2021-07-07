@extends('layouts.main-layout')
@section('content')
<main>
    <films-component :id="{{$idFilm}}"></films-component>
</main>
@endsection
 
