/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// const app = new Vue({
//     el: '#app',
// });

// Funzione per prendere il valore dalla searchBar
function enterKey() {
  $('#search_bar').keypress(function(){
    var text = $('#search_bar').val();
    if(event.which === 13){
    }
  });
}

// Funzione per cambiare immagine del profilo
function enterSelected() {
  var select = $('.users');
  var option = select.val();
  select.on('change' , function() {
    if (this.value == 2) {
      $('.icon1').addClass('display');
      $('.icon2').removeClass('display');
    }else {
      $('.icon2').addClass('display');
      $('.icon1').removeClass('display');
    }
  });
}
// var movies= [];
//
// function getJumbo() {
  //   axios.get("https://api.themoviedb.org/3/search/movie",{
    //     params: {
      //       'api_key': '1550e050d06eb77cc575c30c39bfab7c',
      //       'query' : 'inception'
      //     }
      //   })
      //   .then(data => {
        //     console.log(data);
        //   movies = data.data.results[0];
        //     console.log(movies);
        //   });
        // }

function trailer() {
  $('#testBtn').click(function() {
    var trailer = $('#videoTrailer');
    var cross = $('#cross_trailer');
    cross.show('cross_trailer');
    trailer.show('videoTrailer');
    cross.click(function() {
      cross.hide('cross_trailer');
      trailer.hide('videoTrailer');
    });
  });
}

function init() {
  enterKey();
  enterSelected();
  // getJumbo();
  trailer();
}

$(init);
