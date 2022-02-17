<template>
  <section id="topRated" class="m-3">
    <div class="container">
      <h3>Top Rated</h3>
      
      <div class="row">

        <div class="popular-box col-sm-12 col-md-6 col-lg-3 py-3">
          <div class="poster bg-light">
            <img src="./assets/images/Gladiator.jpg" alt="Gladiator">
            <h5>Gladiator</h5>
            <span class="text-dark">May 01, 2000</span>
          </div>
        </div>

        <div class="popular-box col-sm-12 col-md-6 col-lg-3 py-3">
          <div class="poster bg-light">
            <img src="./assets/images/The Dark Knight.jpg" alt="The Dark Knight">
            <h5>The Dark Knight</h5>
            <span class="text-dark">Jul 14, 2008</span>
          </div>
        </div>

        <div class="popular-box col-sm-12 col-md-6 col-lg-3 py-3">
          <div class="poster bg-light">
            <img src="./assets/images/Inception.jpg" alt="Inception">
            <h5>Inception</h5>
            <span class="text-dark">Jul 15, 2010</span>
          </div>
        </div>

        <div class="popular-box col-sm-12 col-md-6 col-lg-3 py-3">
          <div class="poster bg-light">
            <img src="./assets/images/The Lord of the Rings.jpg" alt="The Lord of the Rings">
            <h5>The Lord of the Rings</h5>
            <span class="text-dark">Dec 01, 2003</span>
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