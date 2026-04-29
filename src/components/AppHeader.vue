<script>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import LanguageSwitcher from "./LanguageSwitcher.vue";

export default {
  name: "AppHeader",
  components: {
    LanguageSwitcher,
  },
  setup() {
    const route = useRoute();
    const currentPage = ref(route.name);
    const isScrolled = ref(false);
    const mobileMenuOpen = ref(false);
    const lastScrollTop = ref(0);
    const isHeaderVisible = ref(true);

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      isScrolled.value = scrollTop > 50;
      if (scrollTop > lastScrollTop.value && scrollTop > 100) {
        isHeaderVisible.value = false;
      } else {
        isHeaderVisible.value = true;
      }
      lastScrollTop.value = scrollTop;
    };

    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value;
      document.body.style.overflow = mobileMenuOpen.value ? 'hidden' : 'auto';
    };

    const closeMobileMenu = () => {
      mobileMenuOpen.value = false;
      document.body.style.overflow = 'auto';
    };

    watch(() => route.name, (newPage) => {
      currentPage.value = newPage;
      closeMobileMenu();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto';
    });

    return {
      currentPage,
      isScrolled,
      mobileMenuOpen,
      isHeaderVisible,
      toggleMobileMenu,
      closeMobileMenu,
    };
  },
};
</script>

<template>
  <header class="app-header">
    <nav class="main-nav" :class="{ scrolled: isScrolled, hidden: !isHeaderVisible }">
      <div class="nav-container">
        <!-- Logo -->
        <router-link :to="{ name: 'home' }" class="logo" @click="closeMobileMenu">
          <img src="/public/6c6bb5ba-64b6-44b2-bae6-aff2efa521de.jpeg" alt="Padel Club Alghero" />
          <span class="logo-text">
            Padel Club
            <small>Alghero</small>
          </span>
        </router-link>

        <!-- Desktop Navigation -->
        <ul class="nav-links">
          <li :class="{ active: currentPage === 'home' }">
            <router-link :to="{ name: 'home' }">Home</router-link>
          </li>
          <li :class="{ active: currentPage === 'about' }">
            <router-link :to="{ name: 'about' }">{{ $t("about") || "Chi Siamo" }}</router-link>
          </li>
          <li :class="{ active: currentPage === 'tournaments' }">
            <router-link :to="{ name: 'tournaments' }">{{ $t("tournaments") || "Tornei" }}</router-link>
          </li>
          <li :class="{ active: currentPage === 'sponsor' }">
            <router-link :to="{ name: 'sponsor' }">{{ $t("sponsor1") || "Sponsor" }}</router-link>
          </li>
        </ul>

        <!-- Right Actions -->
        <div class="nav-actions">
          <LanguageSwitcher />
          <router-link :to="{ name: 'contacts' }" class="contact-btn">
            {{ $t("contacts") || "Contatti" }}
          </router-link>
        </div>

        <!-- Mobile Hamburger -->
        <button class="mobile-menu-btn" @click="toggleMobileMenu" aria-label="Menu">
          <span :class="{ open: mobileMenuOpen }"></span>
          <span :class="{ open: mobileMenuOpen }"></span>
          <span :class="{ open: mobileMenuOpen }"></span>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <transition name="slide">
      <div class="mobile-menu" v-if="mobileMenuOpen" @click.self="closeMobileMenu">
        <div class="mobile-menu-content">
          <div class="mobile-menu-header">
            <img src="/public/6c6bb5ba-64b6-44b2-bae6-aff2efa521de.jpeg" alt="Logo" />
            <button @click="closeMobileMenu" class="close-mobile-menu" aria-label="Chiudi menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <ul class="mobile-nav-links">
            <li :class="{ active: currentPage === 'home' }">
              <router-link :to="{ name: 'home' }" @click="closeMobileMenu">Home</router-link>
            </li>
            <li :class="{ active: currentPage === 'about' }">
              <router-link :to="{ name: 'about' }" @click="closeMobileMenu">{{ $t("about") || "Chi Siamo" }}</router-link>
            </li>
            <li :class="{ active: currentPage === 'tournaments' }">
              <router-link :to="{ name: 'tournaments' }" @click="closeMobileMenu">{{ $t("tournaments") || "Tornei" }}</router-link>
            </li>
            <li :class="{ active: currentPage === 'sponsor' }">
              <router-link :to="{ name: 'sponsor' }" @click="closeMobileMenu">{{ $t("sponsor1") || "Sponsor" }}</router-link>
            </li>
            <li :class="{ active: currentPage === 'contacts' }">
              <router-link :to="{ name: 'contacts' }" @click="closeMobileMenu">{{ $t("contacts") || "Contatti" }}</router-link>
            </li>
          </ul>

          <div class="mobile-menu-footer">
            <div class="mobile-language-switcher">
              <LanguageSwitcher />
            </div>
            <a href="tel:+393454821835" class="mobile-phone">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              +39 345 482 1835
            </a>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 1000;
}

/* Main Nav */
.main-nav {
  background: #fff;
  border-bottom: 1px solid #f0ebe3;
  transition: box-shadow 0.3s ease, transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.main-nav.scrolled {
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.07);
}

.main-nav.hidden {
  transform: translateY(-100%);
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 70px;
  display: flex;
  align-items: center;
  gap: 2.5rem;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  flex-shrink: 0;
  transition: opacity 0.2s ease;
}

.logo:hover {
  opacity: 0.85;
}

.logo img {
  height: 42px;
  width: auto;
  border-radius: 6px;
}

.logo-text {
  display: flex;
  flex-direction: column;
  font-size: 0.95rem;
  font-weight: 800;
  color: #111;
  line-height: 1.15;
  letter-spacing: -0.2px;
}

.logo-text small {
  font-size: 0.65rem;
  font-weight: 600;
  color: #f7931e;
  letter-spacing: 0.8px;
  text-transform: uppercase;
}

/* Desktop Nav Links */
.nav-links {
  display: flex;
  list-style: none;
  gap: 0;
  margin: 0;
  padding: 0;
  flex: 1;
}

.nav-links li a {
  display: block;
  padding: 0.55rem 1rem;
  color: #374151;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  border-radius: 7px;
  transition: color 0.2s ease, background 0.2s ease;
}

.nav-links li a:hover {
  color: #111;
  background: #faf5ee;
}

.nav-links li.active a {
  color: #f7931e;
  background: #fdf4e7;
}

/* Nav Actions */
.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
  margin-left: auto;
}

.contact-btn {
  background: #f7931e;
  color: white !important;
  padding: 0.6rem 1.4rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.875rem;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.2s ease;
  white-space: nowrap;
}

.contact-btn:hover {
  background: #e07c0a;
  transform: translateY(-1px);
}

/* Mobile Hamburger */
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 26px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-left: auto;
}

.mobile-menu-btn span {
  width: 100%;
  height: 2px;
  background: #111;
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: center;
}

.mobile-menu-btn span.open:nth-child(1) {
  transform: rotate(45deg) translateY(7px);
  background: #f7931e;
}

.mobile-menu-btn span.open:nth-child(2) {
  opacity: 0;
}

.mobile-menu-btn span.open:nth-child(3) {
  transform: rotate(-45deg) translateY(-7px);
  background: #f7931e;
}

/* Mobile Menu Overlay */
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.45);
  z-index: 1001;
}

.mobile-menu-content {
  background: white;
  width: 75%;
  max-width: 310px;
  height: 100%;
  margin-left: auto;
  box-shadow: -8px 0 40px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
}

.mobile-menu-header {
  padding: 1.2rem 1.5rem;
  border-bottom: 1px solid #f0ebe3;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.mobile-menu-header img {
  height: 38px;
  border-radius: 6px;
}

.close-mobile-menu {
  background: transparent;
  border: none;
  color: #374151;
  cursor: pointer;
  padding: 0.25rem;
  transition: color 0.2s ease;
  line-height: 0;
}

.close-mobile-menu:hover {
  color: #f7931e;
}

.mobile-nav-links {
  list-style: none;
  padding: 0.75rem 0;
  margin: 0;
  flex: 1;
}

.mobile-nav-links li a {
  display: block;
  padding: 0.85rem 1.5rem;
  color: #374151;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: color 0.2s ease, background 0.2s ease, padding-left 0.2s ease;
  border-left: 3px solid transparent;
}

.mobile-nav-links li a:hover {
  background: #faf5ee;
  color: #111;
  border-left-color: #f7931e;
  padding-left: 1.9rem;
}

.mobile-nav-links li.active a {
  color: #f7931e;
  background: #fdf4e7;
  border-left-color: #f7931e;
}

.mobile-menu-footer {
  padding: 1.2rem 1.5rem;
  border-top: 1px solid #f0ebe3;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.mobile-language-switcher {
  display: flex;
  justify-content: center;
}

.mobile-phone {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.8rem;
  background: #f7931e;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.9rem;
  transition: background 0.2s ease;
}

.mobile-phone:hover {
  background: #e07c0a;
}

/* Slide Transition */
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.35s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}

.slide-enter-from .mobile-menu-content {
  transform: translateX(100%);
}

.slide-leave-to .mobile-menu-content {
  transform: translateX(100%);
}

.mobile-menu-content {
  transition: transform 0.35s ease;
}

/* Responsive */
@media (max-width: 992px) {
  .nav-links,
  .nav-actions {
    display: none;
  }

  .mobile-menu-btn {
    display: flex;
  }

  .nav-container {
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .nav-container {
    padding: 0 1rem;
  }

  .logo-text {
    display: none;
  }

  .mobile-menu-content {
    width: 85%;
  }
}
</style>
