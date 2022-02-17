<template>
  <div id="homeMovies">
    <sliderBar />
    <moviesComp />
    <tvShow />
    <latestTrailers />
    <Trending />
    <joinToday />
    <servicesProvider />
  </div>
</template>

<script>
// @ is an alias to /src
import sliderBar from "@/components/slider/sliderBar.vue";
import moviesComp from "@/components/movies/moviesComp.vue";
import tvShow from "@/components/tvShows/tvShow.vue";
import latestTrailers from "@/components/trailers/latestTrailers.vue";
import Trending from "@/components/trending/Trending.vue";
import joinToday from "@/components/joinToday/joinToday.vue";
import servicesProvider from "@/components/servicesProvider/servicesProvider.vue";

export default {
  name: "homeMovies",
  components: {
    moviesComp,
    tvShow,
    sliderBar,
    latestTrailers,
    Trending,
    joinToday,
    servicesProvider,
  }
};
</script>
