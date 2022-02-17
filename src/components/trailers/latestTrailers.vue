<template>
  <section id="latestTrailers" class="m-3">
    <div class="bg">
      <div class="container">
        <h1 class="text-center text-light">Trailers</h1>

        <div class="row">

          <div class="col-sm-12 col-md-6 col-lg-3 py-3">
            <div class="trailer-box">
              <iframe class="ifr" src="https://www.youtube.com/embed/5PSNL1qE6VY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-3 py-3 ">
            <div class="trailer-box">
              <iframe class="ifr" src="https://www.youtube.com/embed/YoHD9XEInc0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-3 py-3 ">
            <div class="trailer-box">
              <iframe class="ifr" src="https://www.youtube.com/embed/IBVkUb_TWp8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-3 py-3 ">
            <div class="trailer-box">
              <iframe class="ifr" src="https://www.youtube.com/embed/4EC7P5WdUko" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "latestTrailers",
}
</script>

<style scoped>
.bg {
  width: 100%;
  display: inline-block;
	background-image: url("./assets/images/sub.png");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	text-align: center;
}

.ifr {
  width: 100%;
}

</style>