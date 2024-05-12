<script>
export default {
  name: "AppHeader",
};
</script>

<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand" href="#"
        ><router-link :to="{ name: 'home' }">
          <img
            src="../assets/6c6bb5ba-64b6-44b2-bae6-aff2efa521de.jpeg"
            alt="Logo Padel"
          /> </router-link
      ></a>
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
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              <router-link :to="{ name: 'home' }"> Home </router-link></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <router-link :to="{ name: 'about' }"> About us </router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <router-link :to="{ name: 'contacts' }"> Contacts </router-link>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
img {
  width: 150px;
}

a {
  text-decoration: none;
  color: #101e39;
  font-size: 1.2rem;
  border-bottom: 1px solid transparent;
}

.nav-link:hover {
  border-bottom-color: black;
}
</style>
