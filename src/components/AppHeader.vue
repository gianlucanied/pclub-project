<script>
import LanguageSwitcher from "./LanguageSwitcher.vue";

export default {
  name: "AppHeader",
  components: {
    LanguageSwitcher,
  },
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
  <div class="container-header container-fluid">
    <p>
      <i class="fa-solid fa-square-phone fa-xl"></i> {{ $t("contattaci") }}
      <a class="number" href="tel:+393454821835"><span>+39 345 482 1835</span></a>
    </p>
  </div>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand" href="#">
        <router-link :to="{ name: 'home' }">
          <img src="/public/6c6bb5ba-64b6-44b2-bae6-aff2efa521de.jpeg" alt="Logo Padel" />
        </router-link>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="language-switcher-wrapper">
        <LanguageSwitcher />
      </div>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item" :class="{ active: currentPage === 'home' }">
            <router-link :to="{ name: 'home' }" class="nav-link">
              Home
            </router-link>
          </li>

          <li class="nav-item" :class="{ active: currentPage === 'about' }">
            <router-link :to="{ name: 'about' }" class="nav-link">
              {{ $t("about") }}
            </router-link>
          </li>
          <li class="nav-item" :class="{ active: currentPage === 'contacts' }">
            <router-link :to="{ name: 'contacts' }" class="nav-link">
              {{ $t("contacts") }}
            </router-link>
          </li>
          <li class="nav-item" :class="{ active: currentPage === 'tournaments' }">
            <router-link :to="{ name: 'tournaments' }" class="nav-link">
              {{ $t("tournaments") }}
            </router-link>
          </li>
          <li class="nav-item" :class="{ active: currentPage === 'sponsor' }">
            <router-link :to="{ name: 'sponsor' }" class="nav-link">
              {{ $t("sponsor1") }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.container-header {
  background-color: #101e39;
  color: white;
  display: flex;
  justify-content: flex-end;
  text-align: end;
  border-bottom: 1px solid #f1e400;

  p {
    padding: 20px 30px 5px 30px;
  }

  .number {
    color: white;
    font-size: 15px;
  }
}

.container-header span:hover {
  color: #f1e400;
  transition: 0.5s;
}

.navbar-fixed {
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

.navbar .navbar-nav .nav-item .nav-link {
  border-bottom: 3px solid transparent;
  display: inline-block;
  width: auto;
  text-align: center;
  transition: border-color 0.3s ease;
}

.navbar .navbar-nav .nav-item.active .nav-link {
  border-bottom-color: #f1e400;
}

.language-switcher-wrapper {
  margin-left: auto;
}

@media (max-width: 768px) {
  .container-header {
    display: none;
  }

  .navbar .navbar-nav .nav-item.active .nav-link {
    display: inline-block;
    width: auto;
    text-align: center;
    border-bottom: 3px solid #f1e400;
  }
}
</style>
