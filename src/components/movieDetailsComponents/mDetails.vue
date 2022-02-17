<template>
  <section id="movieDetails" class="m-3">
    <div class="container">
      <div class="row">
        <!-- <h2 class="text-light text-center">Movie Details</h2> -->

        <div class="col-sm-12 col-md-4 col-lg-3 py-3">
          <div class="poster">
            <img src="./assets/images/Return to Hogwarts.jpg" alt="Return to Hogwarts">
            <div class="logo text-center">
              <img class="m-2" src="./assets/images/logo/netflix.jpg" alt="netflix">
              <span class="text-light">Now Streaming</span>
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-md-8 col-lg-9 py-3">
          <div class="details text-light">
            <h4>Harry Potter 20th Anniversary</h4>
            <span>01/01/2022 (US) Documentary 1h 43m</span>

            <div class="icon-box">
              <ul class="icon">
                <li><img src="./assets/images/icon/thumbnails-list.svg" alt="thumbnails"></li>
                <li><img src="./assets/images/icon/heart.svg" alt="heart"></li>
                <li><img src="./assets/images/icon/bookmark.svg" alt="bookmark"></li>
                <li><img src="./assets/images/icon/star.svg" alt="star"></li>
              </ul>
              <li class="play-trailer">
                <img src="./assets/images/icon/play.svg" alt="play">
                <a href="https://www.youtube.com/watch?v=fFGS4zZWGoA&feature=emb_title" target="_blank">Play Trailer</a>
              </li>
            </div>

            <div class="movie-details">
              <h4>Overview</h4>
              <p>
                An enchanting making-of story told through all-new in-depth interviews and cast conversations, inviting fans on a magical first-person journey through one of the most beloved film franchises of all time.
              </p>
              <h6>Creator</h6>
              <span>Eran Creevy</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "mDetails",
}
</script>

<style scoped>

#movieDetails {
  background-color: #032541
}

.poster {
  width: 220px;
  background-color: rgb(5, 52, 90); 
  border-radius: 10px;
}

.poster img {
  border-radius: 10px;
  width: 220px;
}

.logo img {
  width: 36px;
  height: 36px;
  border-radius: 7px;
}

.icon-box {
  margin-top: 22px;
}

.icon li {
  display: inline;
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
}

.play-trailer img {
  width: 20px;
  height: 20px;
  display: inline;
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