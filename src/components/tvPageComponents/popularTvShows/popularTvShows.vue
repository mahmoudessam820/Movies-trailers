<template>
  <section id="popularTv" class="m-3">
    <div class="container">
      <h3>Popular Tv Show</h3>
      
      <div class="row">

        <div class="popular-box col-sm-12 col-md-6 col-lg-3 py-3">
          <div class="poster bg-light">
            <img src="./assets/images/Grey's Anatomy.jpg" alt="Grey's Anatomy">
            <h5>Grey's Anatomy</h5>
            <span class="text-dark">Mar 27, 2005</span>
          </div>
        </div>

        <div class="popular-box col-sm-12 col-md-6 col-lg-3 py-3">
          <div class="poster bg-light">
            <img src="./assets/images/Lucifer.jpg" alt="Lucifer">
            <h5>Lucifer</h5>
            <span class="text-dark">Jan 25, 2016</span>
          </div>
        </div>

        <div class="popular-box col-sm-12 col-md-6 col-lg-3 py-3">
          <div class="poster bg-light">
            <img src="./assets/images/Peaky Blinders.jpg" alt="Peaky Blinders">
            <h5>Peaky Blinders</h5>
            <span class="text-dark">Sep 12, 2013</span>
          </div>
        </div>

        <div class="popular-box col-sm-12 col-md-6 col-lg-3 py-3">
          <div class="poster bg-light">
            <img src="./assets/images/The Book of Boba Fett.jpg" alt="The Book of Boba Fett">
            <h5>The Book of Boba Fett</h5>
            <span class="text-dark">Dec 29, 2021</span>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "popularTv",
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