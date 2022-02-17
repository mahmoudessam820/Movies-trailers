<template>
  <section id="nowPlaying" class="m-3">
    <div class="container">
      <h3>Now Playing Movies</h3>
      
      <div class="row">

        <div class="popular-box col-sm-12 col-md-6 col-lg-3 py-3">
          <div class="poster bg-light">
            <img src="./assets/images/Project Gemini.jpg" alt="Project Gemini">
            <h5>Project Gemini</h5>
            <span class="text-dark">Nov 24, 2021</span>
          </div>
        </div>

        <div class="popular-box col-sm-12 col-md-6 col-lg-3 py-3">
          <div class="poster bg-light">
            <img src="./assets/images/Scream.jpg" alt="Scream">
            <h5>Scream</h5>
            <span class="text-dark">Sep 30, 2021</span>
          </div>
        </div>

        <div class="popular-box col-sm-12 col-md-6 col-lg-3 py-3">
          <div class="poster bg-light">
            <img src="./assets/images/The Matrix Resurrections.jpg" alt="The Matrix Resurrections">
            <h5>The Matrix Resurrections</h5>
            <span class="text-dark">Dec 17, 2021</span>
          </div>
        </div>

        <div class="popular-box col-sm-12 col-md-6 col-lg-3 py-3">
          <div class="poster bg-light">
            <img src="./assets/images/When you are gone.jpg" alt="When you are gone">
            <h5>When you are gone</h5>
            <span class="text-dark">Oct 19, 2021</span>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "nowPlaying",
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