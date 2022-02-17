<template>
  <section id="tvShow" class="m-3">
    <div class="container">
      <h1 class="text-center">TV Show</h1>
      <div class="row">

        <div class="col-sm-12 col-md-6 col-lg-3 py-3">
          <router-link to="tv-details" class="nav-link">
            <div class="tv-box">
              <div class="card bg-light">
                <img src="./assets/images/Game of Thrones.jpg" alt="Game of Thrones">
                <h5 class="card-title text-center">Game of Thrones</h5>
                <span class="text-dark text-center">Jan 05, 2011</span>
              </div>
            </div>
          </router-link>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-3 py-3">
          <router-link to="tv-details" class="nav-link">
            <div class="tv-box">
              <div class="card bg-light">
                <img src="./assets/images/Blade Runner.jpg" alt="Blade Runner">
                <h5 class="card-title text-center">Blade Runner</h5>
                <span class="text-dark text-center">Jan 05, 2022</span>
              </div>
            </div>
          </router-link>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-3 py-3">
          <router-link to="tv-details" class="nav-link">
            <div class="tv-box">
              <div class="card bg-light">
                <img src="./assets/images/Dragon Maid.jpg" alt="Dragon Maid">
                <h5 class="card-title text-center">Dragon Maid</h5>
                <span class="text-dark text-center">Jan 05, 2022</span>
              </div>
            </div>
          </router-link>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-3 py-3">
          <router-link to="tv-details" class="nav-link">
            <div class="tv-box">
              <div class="card bg-light">
                <img src="./assets/images/Mayans.jpg" alt="Mayans">
                <h5 class="card-title text-center">Mayans</h5>
                <span class="text-dark text-center">Jan 05, 2022</span>
              </div>
            </div>
          </router-link>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-3 py-3">
          <router-link to="tv-details" class="nav-link">
            <div class="tv-box">
              <div class="card bg-light">
                <img src="./assets/images/True Beauty.jpg" alt="True Beauty">
                <h5 class="card-title text-center">True Beauty</h5>
                <span class="text-dark text-center">Jan 05, 2022</span>
              </div>
            </div>
          </router-link>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-3 py-3">
          <router-link to="tv-details" class="nav-link">
            <div class="tv-box">
              <div class="card bg-light">
                <img src="./assets/images/Naruto.jpg" alt="Naruto">
                <h5 class="card-title text-center">Naruto</h5>
                <span class="text-dark text-center">Jan 05, 2022</span>
              </div>
            </div>
          </router-link>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-3 py-3">
          <router-link to="tv-details" class="nav-link">
            <div class="tv-box">
              <div class="card bg-light">
                <img src="./assets/images/Platinum End.jpg" alt="Platinum End.">
                <h5 class="card-title text-center">Platinum End</h5>
                <span class="text-dark text-center">Jan 05, 2022</span>
              </div>
            </div>
          </router-link>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-3 py-3">
          <router-link to="tv-details" class="nav-link">
            <div class="tv-box">
              <div class="card bg-light">
                <img src="./assets/images/TONIKAWA.jpg" alt="TONIKAWA">
                <h5 class="card-title text-center">TONIKAWA</h5>
                <span class="text-dark text-center">Jan 05, 2022</span>
              </div>
            </div>
          </router-link>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "tvShow",
}
</script>

<style scoped>
.tv-box .card {
  border: none;
}

.tv-box .card img {
  border-radius: 10px;
}

</style>