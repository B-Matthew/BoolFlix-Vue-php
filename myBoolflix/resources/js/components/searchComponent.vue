<template>
  <section class="generi">
    <div class="myContainer">
      Ciao Ragazzi
    </div>
  </section>
</template>

<script>

export default {
  props: {
    searchInput: String
  },
  data: function() {
    return{
      ciao:"ciao",
    }
  },
  created: function() {
    console.log(this.searchInput);
    console.log(this.ciao);
  }
}

</script>
