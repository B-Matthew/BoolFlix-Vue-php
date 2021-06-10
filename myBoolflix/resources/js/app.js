/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// require('./bootstrap');
//
window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */
const files = require.context('./', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))



/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: '#app',

    data: function() {
      return{
        userSelected: "1",
        trailerShow: false,
        userOn: "Matthew"
      }
    },
    mounted : function(){
    },
    methods: {
      // Funzione per prendere il valore dalla searchBar
      enterKey: function () {

        // $('#search_bar').keypress(function(){
          //   var text = $('#search_bar').val();
          //   if(event.which === 13){
            //   }
            // });
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
        console.log(this.userSelected);
        if (this.userSelected == 1) {
          this.userOn = "Matthew";
        } else {
          this.userOn = "Sara";
        }
      },
    },
  });
});
