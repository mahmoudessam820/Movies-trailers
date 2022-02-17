<template>
  <section id="hitingToday" class="m-3">
    <div class="container">
      <h3>TV Shows Airing Today</h3>
      
      <div class="row">

        <div class="popular-box col-sm-12 col-md-6 col-lg-3 py-3">
          <div class="poster bg-light">
            <img src="./assets/images/Demon Slayer.jpg" alt="Demon Slayer">
            <h5>Demon Slayer</h5>
            <span class="text-dark">Apr 06, 2019</span>
          </div>
        </div>

        <div class="popular-box col-sm-12 col-md-6 col-lg-3 py-3">
          <div class="poster bg-light">
            <img src="./assets/images/Billions.jpg" alt="Billions">
            <h5>Billions</h5>
            <span class="text-dark">Jan 17, 2016</span>
          </div>
        </div>

        <div class="popular-box col-sm-12 col-md-6 col-lg-3 py-3">
          <div class="poster bg-light">
            <img src="./assets/images/1883.jpg" alt="1883">
            <h5>1883</h5>
            <span class="text-dark">Dec 19, 2021</span>
          </div>
        </div>

        <div class="popular-box col-sm-12 col-md-6 col-lg-3 py-3">
          <div class="poster bg-light">
            <img src="./assets/images/Blade Runner.jpg" alt="Blade Runner">
            <h5>Blade Runner</h5>
            <span class="text-dark">Nov 14, 2021</span>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "hitingToday",
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