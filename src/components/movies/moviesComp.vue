<template>
  <section id="moviesComp" class="m-3">
    <div class="container">
      <h1 class="text-center">Movies</h1>
      <div class="row">

        <div class="col-sm-12 col-md-6 col-lg-3 py-3">
          <router-link to="/movie-details" class="nav-link">
            <div class="movie-box">
              <div class="card bg-light">
                <img src="./assets/images/Return to Hogwarts.jpg" alt="Return to Hogwarts">
                <h5 class="card-title text-center">Return to Hogwarts</h5>
                <span class="text-dark text-center">Jan 05, 2022</span>
              </div>
            </div>
          </router-link>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-3 py-3">
          <router-link to="/movie-details" class="nav-link">
            <div class="movie-box">
              <div class="card bg-light">
                <img src="./assets/images/The Matrix.jpg" alt="The Matrix">
                <h5 class="card-title text-center">The Matrix Resurrections</h5>
                <span class="text-dark text-center">Dec 16, 2021</span>
              </div>
            </div>
          </router-link>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-3 py-3">
          <router-link to="/movie-details" class="nav-link">
            <div class="movie-box">
              <div class="card bg-light">
                <img src="./assets/images/Killer Elite.jpg" alt="Killer Elite">
                <h5 class="card-title text-center">Killer Elite</h5>
                <span class="text-dark text-center">Oct 31, 2010</span>
              </div>
            </div>
          </router-link>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-3 py-3">
          <router-link to="/movie-details" class="nav-link">
            <div class="movie-box">
              <div class="card bg-light">
                <img src="./assets/images/Halo 4.jpg" alt="Halo 4">
                <h5 class="card-title text-center">Halo 4</h5>
                <span class="text-dark text-center">Sep 12, 2013</span>
              </div>
            </div>
          </router-link>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-3 py-3">
          <router-link to="/movie-details" class="nav-link">
            <div class="movie-box">
              <div class="card bg-light">
                <img src="./assets/images/Snowpiercer.jpg" alt="Snowpiercer">
                <h5 class="card-title text-center">Snowpiercer</h5>
                <span class="text-dark text-center">Sep 12, 2013</span>
              </div>
            </div>
          </router-link>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-3 py-3">
          <router-link to="/movie-details" class="nav-link">
            <div class="movie-box">
              <div class="card bg-light">
                <img src="./assets/images/Spider-Man.jpg" alt="Spider-Man">
                <h5 class="card-title text-center">Spider-Man</h5>
                <span class="text-dark text-center">Sep 12, 2013</span>
              </div>
            </div>
          </router-link>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-3 py-3">
          <router-link to="/movie-details" class="nav-link">
            <div class="movie-box">
              <div class="card bg-light">
                <img src="./assets/images/The Mechanic.jpg" alt="The Mechanic">
                <h5 class="card-title text-center">The Mechanic</h5>
                <span class="text-dark text-center">Sep 12, 2013</span>
              </div>
            </div>
          </router-link>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-3 py-3">
          <router-link to="/movie-details" class="nav-link">
            <div class="movie-box">
              <div class="card bg-light">
                <img src="./assets/images/Peaky Blinders.jpg" alt="Peaky Blinders">
                <h5 class="card-title text-center">Peaky Blinders</h5>
                <span class="text-dark text-center">Sep 12, 2013</span>
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
  name: "moviesComp",
};
</script>

<style scoped>
.movie-box .card {
  border: none;
}

.movie-box .card img {
  border-radius: 10px;
}

</style>