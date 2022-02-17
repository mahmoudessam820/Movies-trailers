<template>
  <section id="navbar">
    <div class="container">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">

          <router-link to="/" class="nav-link"><img class="logo" src="./assets/logo/logo.png" ></router-link>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">

              <li class="nav-item">
                <router-link to="/movies" class="nav-link">Movies</router-link>
              </li>

              <li class="nav-item">
                <router-link to="/tv" class="nav-link">Tv Show</router-link>
              </li>
              
              <li class="nav-item">
                <router-link to="/upcoming" class="nav-link">Upcoming</router-link>
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  name: "navBar"
}
</script>

<style scoped>
#navbar {
  background-color: #032541;
}

ul li a {
  color: #fff;
  font-weight: bold;
}

</style>