<template>
  <section id="joinToday" class="m-3">
    <div class="bg">
      <div class="container">
        <h1>Join Today</h1>

        <div class="row">

          <div class="col-sm-12 col-md-6 col-lg-8 py-3">
            <div class="jointoday-box">
              <p class="cotent-one">
                Get access to maintain your own custom personal lists, track what you've seen and search and filter for what to watch next—regardless if it's in theatres, on TV or available on popular streaming services like Netflix, Amazon Prime Video, FlixOlé, and Zee5.
              </p>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-4 py-3">
            <div class="jointoday-box">
              <ul class="cotent-tow">
                <li>Enjoy WT ad free</li>
                <li>Maintain a personal watchlist</li>
                <li>Filter by your subscribed streaming services and find something to watch</li>
                <li>Log the movies and TV shows you've seen</li>
                <li>Build custom lists</li>
                <li>Contribute to and improve our database</li>
              </ul>
            </div>
          </div>

        </div>
        <button class="btn btn-primary" type="button">Sign Up</button>

      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.bg {
  width: 100%;
  display: inline-block;
	background-image: url("./assets/images/Join Today.jpg");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
}

h1 {
  color: #fff;
}

.cotent-one {
  color: #fff;
}

.cotent-tow li {
  color: #fff;
}

button {
  margin-bottom: 5px; 
  font-weight: bold;
}

</style>