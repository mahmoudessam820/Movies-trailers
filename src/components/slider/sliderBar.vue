<template>
  <section class="sliderBar">

    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">

      <div class="carousel-inner">

        <div class="carousel-item active">
          <img src="./assets/images/slider-1.jpg" class="d-block w-100" alt="slider-1">
        </div>
        <div class="carousel-item">
          <img src="./assets/images/slider-2.jpg" class="d-block w-100" alt="slider-2">
        </div>
        <div class="carousel-item">
          <img src="./assets/images/slider-3.jpg" class="d-block w-100" alt="slider-3">
        </div>
        <div class="carousel-item">
          <img src="./assets/images/slider-4.jpg" class="d-block w-100" alt="slider-4">
        </div>
        <div class="carousel-item">
          <img src="./assets/images/slider-5.jpg" class="d-block w-100" alt="slider-5">
        </div>
        <div class="carousel-item">
          <img src="./assets/images/slider-6.jpg" class="d-block w-100" alt="slider-6">
        </div>
        <div class="carousel-item">
          <img src="./assets/images/slider-7.jpg" class="d-block w-100" alt="slider-7">
        </div>
        <div class="carousel-item">
          <img src="./assets/images/slider-8.jpg" class="d-block w-100" alt="slider-8">
        </div>
        <div class="carousel-item">
          <img src="./assets/images/slider-9.jpg" class="d-block w-100" alt="slider-9">
        </div>

      </div>

      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>

      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

  </section>
</template>

<script>
export default {
  name: "sliderBar",
}
</script>

<style>

</style>