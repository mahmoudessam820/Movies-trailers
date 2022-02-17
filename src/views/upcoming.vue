<template>
  <div id="upcoming">
    <upcomingMovies />
  </div>
</template>

<script>
import upcomingMovies from "@/components/upcomingComponents/upcomingMovies.vue";

export default {
  name: "upcoming",
  components: {
    upcomingMovies,
  }
}
</script>

<style scoped>

</style>