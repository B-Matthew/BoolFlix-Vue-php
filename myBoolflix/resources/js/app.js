window.Vue = require('vue');

const files = require.context('./', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: '#app',

    data: function() {
      return{
        userSelected: "1",
        trailerShow: false,
        userOn: "Matthew",
        searchInput: "",
        searchMovie: [],
        img_path: "https://image.tmdb.org/t/p/w185",
      }
    },
    
    methods: {
      // Funzione per prendere il valore dalla searchBar
      enterKey: function () {
        axios.get("https://api.themoviedb.org/3/search/movie", {
          params: {
            'api_key': '1550e050d06eb77cc575c30c39bfab7c',
            'query': this.searchInput,
          }
        })
          .then((data) => {
            this.searchMovie = data.data.results;
            console.log(this.searchMovie);
          },
            (error) => {
              console.log(error);
            });
        console.log(this.searchInput);
        return this.searchInput;
      },
      // Funzione per far partire il trailer
    trailerOn: function() {
      this.trailerShow = true;
    },
    trailerOff: function() {
      this.trailerShow = false;
    },

    // Funzione per prendere l'user in corso
    getUser: function () {

      if (this.userSelected == 1) {
        this.userOn = "Matthew";
      } else {
        this.userOn = "Sara";
      }
    },
    getImage: function (img) {

      return this.img_path + img;
    },
  },
});
});



