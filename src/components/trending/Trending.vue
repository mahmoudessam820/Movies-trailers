<template>
  <section id="Trending" class="m-3">
    <div class="bg">
      <div class="container">
        <h1>Trending</h1>
        
        <div class="row">

          <div class="col-sm-12 col-md-6 col-lg-3 py-3">
            <div class="trending-box">
              <div class="poster bg-light">
                <img src="./assets/images/Mortal Kombat.jpg" alt="Mortal Kombat">
                <h5>Mortal Kombat</h5>
                <span class="text-dark">Jan 13, 2022</span>
              </div>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-3 py-3">
            <div class="trending-box">
              <div class="poster bg-light">
                <img src="./assets/images/The Batman.jpg" alt="Batman">
                <h5>Batman</h5>
                <span class="text-dark">Mar 01, 2022</span>
              </div>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-3 py-3">
            <div class="trending-box">
              <div class="poster bg-light">
                <img src="./assets/images/The Book of Boba.jpg" alt="The Book of Boba">
                <h5>The Book of Boba</h5>
                <span class="text-dark">Dec 29, 2021</span>
              </div>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-3 py-3">
            <div class="trending-box">
              <div class="poster bg-light">
                <img src="./assets/images/The 355.jpg" alt="The 355">
                <h5>The 355</h5>
                <span class="text-dark">Jan 05, 2022</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Trending",
}
</script>

<style scoped>
.bg {
  width: 100%;
  display: inline-block;
	background-image: url("./assets/images/trending-bg.svg");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
}

.poster {
  width: 220px;
  text-align: center;
}

.poster img {
  border-radius: 10px;
}

</style>