@extends('layouts.main-layout')
@section('content')
  <main>
    <section v-if="!searchInput == ''" class="generi">
      <div class="myContainer">
      <h2>Ricerca: </h2>
      <ul>
        <li v-for="(movie,index) in searchMovie" v-if="movie.poster_path && index < 6">
          <a :href="/films/ + movie.id">
            <img class="cards" :src="getImage(movie.poster_path)" alt="">
            <h3>@{{movie.name}}</h3>
          </a>
        </li>
      </ul>
    </div>
  </section>
    
    {{-- JUMBOTRON --}}
    <div class="myContainer">
      <section class="myJumbotron">
        <div class="text_jumbo">
          <img id="logoImg" src="{{asset('/storage/img/logo.png')}}" alt="">
          <span id="logoText">SERIE</span>
          <img id="textImg" src="{{asset('/storage/img/Daco.png')}}" alt="">
          <div class="">
            <h2 @click="enterKey">The Witcher</h2>
            <p class="grey">2019 | <span id="border">VM14</span> | 1 stagione | Serie TV fantasy</p>
            <p id="description">
              Geralt di Rivia, un cacciatore di mostri mutante, viaggia verso il suo destino in un mondo turbolento in cui le persone spesso si dimostrano più perverse delle bestie.
            </p>
            <p><span class="grey">Con: </span>Henry Cavill,Anya Chalotra,Freya Allan <br> <span class="grey">Creato da: </span>Lauren Schmidt Hissrich</p>
            <div class="btns_jumbo">
              <button @click="trailerOn()"id="testBtn" type="button" name="button"><i class="fas fa-play"></i> Riproduci Trailer</button>
              <button type="button" name="button">+ Le Mie Liste</button>
            </div>
          </div>
        </div>
        <transition name="fade">
        <i @click="trailerOff()" v-if="trailerShow" id="cross_trailer" class="fas fa-times"></i>
      </transition>
      <transition name="fade">
        <iframe v-if="trailerShow" id="videoTrailer" src="http://www.youtube.com/embed/QtVDX4G334g?autoplay=1&mute=1" width="500px" height="500px"></iframe>
      </transition>
      </section>
    </div>

    {{-- Attach Vue component --}}
     <home-component :user-on="userOn" :routemovie="/films/" :routetv="/tv/">

     </home-component>

  </main>
@endsection
    

      
      
