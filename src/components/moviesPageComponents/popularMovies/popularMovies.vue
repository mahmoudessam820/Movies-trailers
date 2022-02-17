<template>
  <section id="popularMovies" class="m-3">
    <div class="container">
      <h3>Popular Movies</h3>
      
      <div class="row">

        <div class="popular-box col-sm-12 col-md-6 col-lg-3 py-3">
          <div class="poster bg-light">
            <img src="./assets/images/Mortal Kombat.jpg" alt="Mortal Kombat">
            <h5>Mortal Kombat</h5>
            <span class="text-dark">Nov 24, 2021</span>
          </div>
        </div>

        <div class="popular-box col-sm-12 col-md-6 col-lg-3 py-3">
          <div class="poster bg-light">
            <img src="./assets/images/Venom.jpg" alt="Venom">
            <h5>Venom</h5>
            <span class="text-dark">Sep 30, 2021</span>
          </div>
        </div>

        <div class="popular-box col-sm-12 col-md-6 col-lg-3 py-3">
          <div class="poster bg-light">
            <img src="./assets/images/One Shot.jpg" alt="One Shot">
            <h5>One Shot</h5>
            <span class="text-dark">Dec 17, 2021</span>
          </div>
        </div>

        <div class="popular-box col-sm-12 col-md-6 col-lg-3 py-3">
          <div class="poster bg-light">
            <img src="./assets/images/Last Man Down.jpg" alt="Last Man Down">
            <h5>Last Man Down</h5>
            <span class="text-dark">Oct 19, 2021</span>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "popularMovies",
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