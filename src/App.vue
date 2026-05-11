<script>
import "bootstrap/dist/css/bootstrap.min.css";
import { onBeforeUnmount, onMounted, ref } from 'vue';
import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  setup() {
    const showScrollTop = ref(false);

    const handleScroll = () => {
      showScrollTop.value = window.scrollY > 400;
    };

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    onMounted(() => window.addEventListener('scroll', handleScroll));
    onBeforeUnmount(() => window.removeEventListener('scroll', handleScroll));

    return { showScrollTop, scrollToTop };
  },
};
</script>

<template>
  <AppHeader />
  <main>
    <router-view></router-view>
  </main>
  <AppFooter />

  <transition name="fade-up">
    <button
      v-if="showScrollTop"
      class="scroll-top-btn"
      @click="scrollToTop"
      aria-label="Torna su"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>
  </transition>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap");

* {
  font-family: "Plus Jakarta Sans", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.scroll-top-btn {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 999;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #f7931e;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(247, 147, 30, 0.4);
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.scroll-top-btn:hover {
  background: #e07c0a;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(247, 147, 30, 0.5);
}

.fade-up-enter-active,
.fade-up-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>