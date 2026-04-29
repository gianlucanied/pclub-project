<script>
import "bootstrap/dist/css/bootstrap.min.css";

import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<template>
  <AppHeader />
  <main>
    <router-view></router-view>
  </main>
  <AppFooter />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap");
* {
  font-family: "Plus Jakarta Sans", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
