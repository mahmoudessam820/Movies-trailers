<template>
  <section id="topRated" class="m-3">
    <div class="container">
      <h3>Top Rated TV Shows</h3>
      
      <div class="row">

        <div class="popular-box col-sm-12 col-md-6 col-lg-3 py-3">
          <div class="poster bg-light">
            <img src="./assets/images/The D'Amelio Show.jpg" alt="The D'Amelio Show">
            <h5>The D'Amelio Show</h5>
            <span class="text-dark">Sep 03, 2021</span>
          </div>
        </div>

        <div class="popular-box col-sm-12 col-md-6 col-lg-3 py-3">
          <div class="poster bg-light">
            <img src="./assets/images/Crash Landing on You.jpg" alt="Crash Landing on You">
            <h5>Crash Landing on You</h5>
            <span class="text-dark">Dec 14, 2019</span>
          </div>
        </div>

        <div class="popular-box col-sm-12 col-md-6 col-lg-3 py-3">
          <div class="poster bg-light">
            <img src="./assets/images/Breaking Bad.jpg" alt="Breaking Bad">
            <h5>Breaking Bad</h5>
            <span class="text-dark">Jan 20, 2008</span>
          </div>
        </div>

        <div class="popular-box col-sm-12 col-md-6 col-lg-3 py-3">
          <div class="poster bg-light">
            <img src="./assets/images/Vincenzo.jpg" alt="Vincenzo">
            <h5>Vincenzo</h5>
            <span class="text-dark">Feb 20, 2021</span>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "topRated",
}
</script>

<style scoped>
.poster {
  width: 220px;
  text-align: center;
}

.poster img {
  border-radius: 10px;
}
</style>