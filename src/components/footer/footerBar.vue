<template>
  <section id="footerBar" class="footer-style text-info">
    <div class="container">
      <footer class="py-5">
        <div class="row">

          <div class="col-2">
            <h5>THE BASICS</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">Home</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">Features</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">Contact Us</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">About WT</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">System Status</a>
              </li>
            </ul>
          </div>

          <div class="col-2">
            <h5>GET INVOLVED</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">Contribution</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">Add New Movie</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">Add New TV</a>
              </li>
            </ul>
          </div>

          <div class="col-2">
            <h5>COMMUNITY</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">Guidelines</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">Discussions</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">Leaderboard</a>
              </li>
            </ul>
          </div>

          <div class="col-4 offset-1">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of whats new and exciting from us.</p>
              <div class="d-flex w-100 gap-2">
                <label for="newsletter1" class="visually-hidden"
                  >Email address</label
                >
                <input
                  id="newsletter1"
                  type="text"
                  class="form-control"
                  placeholder="Email address"
                />
                <button class="btn btn-primary" type="button">Subscribe</button>
              </div>
            </form>
          </div>
          
        </div>

        <div class="d-flex justify-content-between py-4 my-4 border-top">
          <p>&copy; 2022 Company, Created By <span><a href="https://www.linkedin.com/in/mahmoud-essam-822719149/">Mr-Web</a></span>. All rights reserved.</p>
          <ul class="list-unstyled d-flex">
            <li class="ms-3"><a class="link-dark" href="https://twitter.com/Mahmoud42275"><img src="./assets/images/icons8-twitter-50.png" alt="twitter" /></a></li>
            <li class="ms-3"><a class="link-dark" href="https://www.linkedin.com/in/mahmoud-essam-822719149/"><img src="./assets/images/icons8-linkedin-64.png" alt="linkedin" /></a></li>
            <li class="ms-3"><a class="link-dark" href="http://www.facebook.com/"><img src="./assets/images/icons8-facebook-50.png" alt="facebook" /></a></li>
            <li class="ms-3"><a class="link-dark" href="https://github.com/mahmoudessam820"><img  src="./assets/images/icons8-compare-git-40.png" alt="github" /></a></li>            
          </ul>
        </div>

      </footer>
    </div>
  </section>
</template>

<script>
export default {
  name: "footerBar",
};
</script>

<style scoped>
.footer-style {
  background-color: #032541;
}

.footer-style img {
  width: 40px;
}

h5 {
  color: #fff;
}
</style>