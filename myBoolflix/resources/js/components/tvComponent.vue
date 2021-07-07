<template>
  <div class="myContainer">
      <section class="myJumbotron" :style="{ 'background-image': 'url(' + getImage(film.backdrop_path) + ')' }">
         <div class="text_jumbo">
          
          
          
          <div class="">
            <h2>{{film.original_name}}</h2>
            <p class="grey">
              {{getYearRelease(film.first_air_date)}} | 
              <span v-if ="film.adult" id="border">VM14</span> 
              <span v-else id="border">Per Tutti</span> 
              | {{film.number_of_seasons}} <span v-if="film.number_of_seasons == 1">stagione</span><span v-else>stagioni</span> | Serie TV 
              <span v-for="gen in film.genres">| {{gen.name}} </span>
              </p>
            <p id="description">
              {{film.overview}}
            </p>
            <p><span class="grey">Creato da: </span><span v-for="create in film.created_by">{{create.name}}</span></p>
            <div class="btns_jumbo">
              <button @click="trailerOn()"id="testBtn" type="button" name="button"><i class="fas fa-play"></i> Riproduci</button>
              <button type="button" name="button">+ Le Mie Liste</button>
            </div>
          </div>
        </div>
       
        
      </section>
    </div>
</template>

<script>

export default {
  props: {
      id: Number,
  },
  data () {
    return {
     film: [],
     img_path: "https://image.tmdb.org/t/p/original",
    };
  },
  mounted: function() {
    axios.get("https://api.themoviedb.org/3/tv/"+ this.id ,{
    params: {
        'api_key': '1550e050d06eb77cc575c30c39bfab7c',
    }
    
    })
    .then((data) => {
      this.film = data.data;
      console.log(this.film);
    },
    (error) => {
      console.log(error);
    });
  },
  methods: {
    // funzione per creare le immagini
    getImage: function(img) {

      return this.img_path + img;
    },
    getYearRelease: function(year) {
      let getYear = year.slice(0,4);
      return getYear;
    }
  }
}

</script>
      
        
    
    
