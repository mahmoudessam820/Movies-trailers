<template>
  <div id="tvPage">
    <popularTv />
    <hitingToday />
    <currentlyAiring />
    <topRated />
  </div>
</template>

<script>
// @ is an alias to /src
import popularTv from "@/components/tvPageComponents/popularTvShows/popularTvShows.vue";
import hitingToday from "@/components/tvPageComponents/tvShowsAiringToday/toShowsAiringTodayTv.vue";
import currentlyAiring from "@/components/tvPageComponents/currentlyAiringTVShows/currentlyAiringTv";
import topRated from "../components/tvPageComponents/topRatedTvShows/toRatedTvShows.vue";

export default {
  name: "tvPage",
  components: {
    popularTv,
    hitingToday,
    currentlyAiring,
    topRated,
  }
}
</script>

<style scoped>

</style>