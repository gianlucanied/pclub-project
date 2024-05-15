<script>
export default {
  name: "AppHeader",
  data() {
    return {
      currentPage: "",
    };
  },
  watch: {
    $route(to, from) {
      this.currentPage = to.name;
    },
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand" href="#">
        <router-link :to="{ name: 'home' }">
          <img
            src="../assets/6c6bb5ba-64b6-44b2-bae6-aff2efa521de.jpeg"
            alt="Logo Padel"
          />
        </router-link>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item" :class="{ active: currentPage === 'home' }">
            <router-link :to="{ name: 'home' }" class="nav-link">
              Home
            </router-link>
          </li>
          <li class="nav-item" :class="{ active: currentPage === 'about' }">
            <router-link :to="{ name: 'about' }" class="nav-link">
              About us
            </router-link>
          </li>
          <li class="nav-item" :class="{ active: currentPage === 'teams' }">
            <router-link :to="{ name: 'teams' }" class="nav-link">
              Teams
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
}

img {
  width: 100px;
}

a {
  text-decoration: none;
  color: #101e39;
  font-size: 1.2rem;
  border-bottom: 3px solid transparent;
}

.nav-link:hover {
  color: #f1e400;
  transition: 0.5s;
}

.navbar .navbar-nav .nav-item.active .nav-link {
  border-bottom-color: #f1e400 !important;
  color: black;
}
</style>
