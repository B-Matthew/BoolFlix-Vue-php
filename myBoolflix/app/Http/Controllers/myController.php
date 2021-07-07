<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class myController extends Controller
{
  public function home() {

      return view('pages.home');
    }

  public function searchPage() {

    return view("pages.searchMovies");
  }
  public function mySearch() {
    
    return redirect()->route('searchPage');
  }

  public function films($id) {

    $idFilm = $id;
    return view('pages.films', compact('idFilm'));
  }

  public function tv($id) {

    $idFilm = $id;
    return view('pages.tv', compact('idFilm'));
  }
}
