<template>
  <section id="tDet" class="m-3">
    <div class="container">
      <div class="row">

        <div class="col-sm-12 col-md-4 col-lg-3 py-3">
          <div class="poster">
            <img src="./assets/images/Game of Thrones.jpg" alt="Gams of thrones">

            <div class="logo text-center">
              <img src="./assets/images/logo/prime-video.jpg" class="m-2" alt="prime-video">
              <span class="text-light">Now Streaming</span>
            </div>

          </div>
        </div>

        <div class="col-sm-12 col-md-8 col-lg-9 py-3">
          <div class="details text-light">
            <h4>Game of Thrones (2011)</h4>
            <span>TV-MA Sci-Fi & Fantasy, Drama, Action & Adventure 1h</span>
            
            <div class="icon-box">
              <ul class="icon">
                <li><img src="./assets/images/icons/thumbnails-list.svg" alt="thumbnails-list"></li>
                <li><img src="./assets/images/icons/heart.svg" alt="heart"></li>
                <li><img src="./assets/images/icons/bookmark.svg" alt="bookmark"></li>
                <li><img src="./assets/images/icons/star.svg" alt="star"></li>
              </ul>
              <li class="play-trailer">
                <img src="./assets/images/icons/play.svg" alt="play">
                <a href="https://www.youtube.com/watch?v=uEmvjvhCv7Q" target="_blank">Play Trailer</a>
              </li>
            </div>

            <div class="tv-details">
              <h4>Overview</h4>
              <p>
                Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.
              </p>
              <h6>Creator</h6>
              <span>C.B.Weiss</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "tDet",
}
</script>

<style scoped>
#tDet {
  background-color: #032541;
}

.poster {
  width: 220px;
  background-color: rgb(5, 52, 90); 
  border-radius: 10px;
}

.poster img {
  width: 220px;
  border-radius: 10px;
}

.logo img {
  width: 36px;
  height: 36px;
  border-radius: 7px;
}

.icon li {
  display: inline-block;
  padding: 14px;
  margin: 5px;
  background-color: rgb(5, 52, 90);
  border-radius: 50%;
  list-style: none;
}

.icon li img {
  width: 20px;
  height: 20px;
}

.play-trailer {
  margin: 23px;
  list-style: none;
  display: inline;
}

.play-trailer img {
  width: 20px;
  height: 20px;
}

.play-trailer a {
  text-decoration: none;
  font-weight: bold;
  color: #fff;
}

.play-trailer a:hover {
  color: rgb(117, 132, 145);
} 

</style>