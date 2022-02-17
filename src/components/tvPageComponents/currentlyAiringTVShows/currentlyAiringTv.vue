<template>
  <section id="currentlyAiring" class="m-3">
    <div class="container">
      <h3>Currently Airing TV Shows</h3>
      
      <div class="row">

        <div class="popular-box col-sm-12 col-md-6 col-lg-3 py-3">
          <div class="poster bg-light">
            <img src="./assets/images/People Puzzler.jpg" alt="People Puzzler">
            <h5>People Puzzler</h5>
            <span class="text-dark">Jan 18, 2021</span>
          </div>
        </div>

        <div class="popular-box col-sm-12 col-md-6 col-lg-3 py-3">
          <div class="poster bg-light">
            <img src="./assets/images/Superman & Lois.jpg" alt="Superman Lois">
            <h5>Superman Lois</h5>
            <span class="text-dark">Feb 23, 2021</span>
          </div>
        </div>

        <div class="popular-box col-sm-12 col-md-6 col-lg-3 py-3">
          <div class="poster bg-light">
            <img src="./assets/images/Hollyoaks.jpg" alt="Hollyoaks">
            <h5>Hollyoaks</h5>
            <span class="text-dark">Oct 23, 1995</span>
          </div>
        </div>

        <div class="popular-box col-sm-12 col-md-6 col-lg-3 py-3">
          <div class="poster bg-light">
            <img src="./assets/images/Shark Tank India.jpg" alt="Shark Tank India">
            <h5>Shark Tank India</h5>
            <span class="text-dark">Dec 20, 2021</span>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "currentlyAiring",
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