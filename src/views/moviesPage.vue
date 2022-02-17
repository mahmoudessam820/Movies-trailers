<template>
  <div id="moviesPage">
    <popularMovies />
    <nowPlaying />
    <topRated />
  </div>
</template>

<script>
// @ is an alias to /src
import popularMovies from "@/components/moviesPageComponents/popularMovies/popularMovies.vue";
import nowPlaying from "@/components/moviesPageComponents/nowPlaying/nowPlaying.vue";
import topRated from "../components/moviesPageComponents/topRatedMovies/topRated.vue";

export default {
  name: "moviesPage",
  components: {
    popularMovies,
    nowPlaying,
    topRated,
  }
}
</script>