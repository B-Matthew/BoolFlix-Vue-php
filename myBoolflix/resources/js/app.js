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
      }
    },
    
    methods: {
      // Funzione per prendere il valore dalla searchBar
      enterKey: function () {
        console.log("ciao")
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
  },
});
});



