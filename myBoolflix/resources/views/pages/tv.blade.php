@extends('layouts.main-layout')
@section('content')
<main>
   
    <tv-component :id="{{$idFilm}}"></tv-component>
</main>
@endsection
