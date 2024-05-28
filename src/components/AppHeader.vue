<script>
export default {
  name: "AppHeader",
  data() {
    return {
      currentPage: "",
      isHeaderHidden: false,
      timeout: null,
    };
  },
  watch: {
    $route(to, from) {
      this.currentPage = to.name;

      window.scrollTo(0, 0);
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    window.scrollTo(0, 0);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (this.timeout) clearTimeout(this.timeout);
      const isAtTop =
        window.scrollY === 0 || document.documentElement.scrollTop === 0;

      if (isAtTop) {
        this.isHeaderHidden = false;
      } else {
        this.isHeaderHidden = true;
        this.timeout = setTimeout(() => {
          this.isHeaderHidden = false;
        }, 2000);
      }
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
            src="/public/6c6bb5ba-64b6-44b2-bae6-aff2efa521de.jpeg"
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
              Chi siamo
            </router-link>
          </li>
          <li class="nav-item" :class="{ active: currentPage === 'contacts' }">
            <router-link :to="{ name: 'contacts' }" class="nav-link">
              Contatti
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar-fixed {
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
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
}
</style>
