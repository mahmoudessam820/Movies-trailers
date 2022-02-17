import Vue from "vue";
import VueRouter from "vue-router";
import homeMovies from "../views/homeMovies.vue";
import moviesPage from "../views/moviesPage.vue";
import tvPage from "../views/tvPage.vue";
import upcoming from "../views/upcoming.vue";
import movieDetails from "../views/movieDetails.vue";
import tvDetails from "../views/tvDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "homeMovies",
    component: homeMovies,
  },

  {
    path: "/movies",
    name: "moviesPage",
    component: moviesPage,
  },

  {
    path: "/tv",
    name: "tvPage",
    component: tvPage,
  },

  {
    path: "/upcoming",
    name: "upcoming",
    component: upcoming,
  },

  {
    path: "/movie-details",
    name: "movieDetails",
    component: movieDetails,
  },

  {
    path: "/tv-details",
    name: "tvDetails",
    component: tvDetails,
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
