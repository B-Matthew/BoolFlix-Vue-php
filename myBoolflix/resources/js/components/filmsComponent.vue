<template>
  <div class="myContainer">
      <section class="myJumbotron" :style="{ 'background-image': 'url(' + getImage(film.backdrop_path) + ')' }">
          
        <div class="text_jumbo">
          
          
          
          <div class="">
            <h2>{{film.original_title}}</h2>
            <p class="grey">2019 | <span id="border">VM14</span> | 1 stagione | Serie TV fantasy</p>
            <p id="description">
              {{film.overview}}
            </p>
            <p><span class="grey">Con: </span>Henry Cavill,Anya Chalotra,Freya Allan <br> <span class="grey">Creato da: </span>Lauren Schmidt Hissrich</p>
            <div class="btns_jumbo">
              <button @click="trailerOn()"id="testBtn" type="button" name="button"><i class="fas fa-play"></i> Riproduci Trailer</button>
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
    axios.get("https://api.themoviedb.org/3/movie/"+ this.id ,{
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
    
  }
}

</script>
      
        
    
    
