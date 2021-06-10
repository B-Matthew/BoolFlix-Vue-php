<template>
  <section class="generi">
    <div class="myContainer">
      <h2>{{userOn}}, Continua a guardare:</h2>
      <ul>
        <li v-for="watching in toWatch">
          <a href="#">
            <img class="cards" :src="getImage(watching.poster_path)" alt="">
            <h3>
              {{watching.name}}
            </h3>
          </a>
        </li>
      </ul>
      <h2>I più popolari su Netflix:</h2>
      <ul>
        <li v-for="movie in movies">
          <a href="#">
            <img class="cards" :src="getImage(movie.poster_path)" alt="">
            <h3>
              {{movie.title}}
            </h3>
          </a>
        </li>
      </ul>
      <h2>Serie TV:</h2>
      <ul>
        <li v-for="serie in seriesTv">
          <a href="#">
            <img class="cards" :src="getImage(serie.poster_path)" alt="">
            <h3>
              {{serie.name}}
            </h3>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>

export default {
  props: {
    userOn:String
  },
  data () {
    return {
      movies: [],
      seriesTv:[],
      img_path: "https://image.tmdb.org/t/p/w185",
      toWatch: [],
    };
  },

  mounted: function() {
    // Filtro i data per la prima sezione films popoplari
    axios.get("https://api.themoviedb.org/3/movie/popular",{
      params: {
        'api_key': '1550e050d06eb77cc575c30c39bfab7c',
        'page' :1,
      }
    })
    .then((data) => {
      this.movies = data.data.results;
      console.log(data);
      console.log(this.movies);
    },
    (error) => {
      console.log(error);
    });
    // Filtro i data per la prima sezione Serie tv popoplari
    axios.get("https://api.themoviedb.org/3/tv/popular",{
      params: {
        'api_key': '1550e050d06eb77cc575c30c39bfab7c',
        'page' : 2,
      }
    })
    .then((data) => {
      this.seriesTv = data.data.results;
      console.log(data);
      console.log(this.seriesTv);
    },
    (error) => {
      console.log(error);
    });
    // Filtro i data per la prima sezione "continua a guardare"
    axios.get("https://api.themoviedb.org/3/tv/popular",{
      params: {
        'api_key': '1550e050d06eb77cc575c30c39bfab7c',
        'page' : 1,
      }
    })
    .then((data) => {
      this.toWatch = data.data.results;
      console.log(data);
      console.log(this.toWatch);
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
