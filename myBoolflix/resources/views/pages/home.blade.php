@extends('layouts.main-layout')
@section('content')
  <main>
    {{-- JUMBOTRON --}}
    <div class="myContainer">
      <section class="myJumbotron">
        <div class="text_jumbo">
          <img id="logoImg" src="{{asset('/storage/img/logo.png')}}" alt="">
          <span id="logoText">SERIE</span>
          <img id="textImg" src="{{asset('/storage/img/Daco.png')}}" alt="">
          <div class="">
            <h2>The Witcher</h2>
            <p class="grey">2019 | <span id="border">VM14</span> | 1 stagione | Serie TV fantasy</p>
            <p id="description">
              Geralt di Rivia, un cacciatore di mostri mutante, viaggia verso il suo destino in un mondo turbolento in cui le persone spesso si dimostrano più perverse delle bestie.
            </p>
            <p><span class="grey">Con: </span>Henry Cavill,Anya Chalotra,Freya Allan <br> <span class="grey">Creato da: </span>Lauren Schmidt Hissrich</p>
            <div class="btns_jumbo">
              <button id="testBtn" type="button" name="button"><i class="fas fa-play"></i> Riproduci Trailer</button>
              <button type="button" name="button">+ Le Mie Liste</button>
            </div>
          </div>
        </div>
        <i id="cross_trailer" class="fas fa-times"></i>
        <iframe id="videoTrailer" src="http://www.youtube.com/embed/QtVDX4G334g?autoplay=1&mute=1" width="500px" height="500px"></iframe>
      </section>
    </div>
    CIAOOOOOOOOOOOOOOOOOOOO
  </main>

@endsection
