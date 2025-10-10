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
      
      // Add scrolled class after 50px
      isScrolled.value = scrollTop > 50;
      
      // Hide/show header based on scroll direction
      if (scrollTop > lastScrollTop.value && scrollTop > 100) {
        isHeaderVisible.value = false;
      } else {
        isHeaderVisible.value = true;
      }
      
      lastScrollTop.value = scrollTop;
    };

    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value;
      if (mobileMenuOpen.value) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
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
    <!-- Top Bar -->
    <div class="top-bar">
      <div class="top-bar-content">
        <div class="contact-info">
          <a href="tel:+393454821835" class="contact-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>{{ $t("contattaci") || "Contattaci" }}</span>
            <strong>+39 345 482 1835</strong>
          </a>
        </div>
        <div class="top-bar-right">
          <LanguageSwitcher />
        </div>
      </div>
    </div>

    <!-- Main Navigation -->
    <nav class="main-nav" :class="{ 
      scrolled: isScrolled, 
      hidden: !isHeaderVisible 
    }">
      <div class="nav-container">
        <!-- Logo -->
        <router-link :to="{ name: 'home' }" class="logo" @click="closeMobileMenu">
          <img src="/public/6c6bb5ba-64b6-44b2-bae6-aff2efa521de.jpeg" alt="Padel Club Alghero" />
          <span class="logo-text">Padel Club<br><small>Alghero</small></span>
        </router-link>

        <!-- Desktop Navigation -->
        <ul class="nav-links">
          <li :class="{ active: currentPage === 'home' }">
            <router-link :to="{ name: 'home' }">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              Home
            </router-link>
          </li>
          <li :class="{ active: currentPage === 'about' }">
            <router-link :to="{ name: 'about' }">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              {{ $t("about") || "Chi Siamo" }}
            </router-link>
          </li>
          <li :class="{ active: currentPage === 'tournaments' }">
            <router-link :to="{ name: 'tournaments' }">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                <path d="M4 22h16"></path>
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
              </svg>
              {{ $t("tournaments") || "Tornei" }}
            </router-link>
          </li>
          <li :class="{ active: currentPage === 'sponsor' }">
            <router-link :to="{ name: 'sponsor' }">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                <line x1="7" y1="7" x2="7.01" y2="7"></line>
              </svg>
              {{ $t("sponsor1") || "Sponsor" }}
            </router-link>
          </li>
          <li :class="{ active: currentPage === 'contacts' }">
            <router-link :to="{ name: 'contacts' }" class="contact-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              {{ $t("contacts") || "Contatti" }}
            </router-link>
          </li>
        </ul>

        <!-- Mobile Menu Button -->
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
            <button @click="closeMobileMenu" class="close-mobile-menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <ul class="mobile-nav-links">
            <li :class="{ active: currentPage === 'home' }">
              <router-link :to="{ name: 'home' }" @click="closeMobileMenu">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
                Home
              </router-link>
            </li>
            <li :class="{ active: currentPage === 'about' }">
              <router-link :to="{ name: 'about' }" @click="closeMobileMenu">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
                {{ $t("about") || "Chi Siamo" }}
              </router-link>
            </li>
            <li :class="{ active: currentPage === 'tournaments' }">
              <router-link :to="{ name: 'tournaments' }" @click="closeMobileMenu">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                  <path d="M4 22h16"></path>
                </svg>
                {{ $t("tournaments") || "Tornei" }}
              </router-link>
            </li>
            <li :class="{ active: currentPage === 'sponsor' }">
              <router-link :to="{ name: 'sponsor' }" @click="closeMobileMenu">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                </svg>
                {{ $t("sponsor1") || "Sponsor" }}
              </router-link>
            </li>
            <li :class="{ active: currentPage === 'contacts' }">
              <router-link :to="{ name: 'contacts' }" @click="closeMobileMenu">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                {{ $t("contacts") || "Contatti" }}
              </router-link>
            </li>
          </ul>

          <div class="mobile-menu-footer">
            <a href="tel:+393454821835" class="mobile-phone">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
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
/* Top Bar */
.top-bar {
  background: linear-gradient(135deg, #101e39 0%, #1a2d50 100%);
  color: white;
  border-bottom: 2px solid #f7931e;
  position: relative;
  z-index: 1001;
}

.top-bar-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0.8rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.contact-info {
  display: flex;
  align-items: center;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: white;
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.contact-link svg {
  color: #f7931e;
}

.contact-link strong {
  color: #f7931e;
  font-weight: 600;
}

.contact-link:hover {
  transform: translateX(5px);
}

.contact-link:hover strong {
  color: #ff6b35;
}

/* Main Navigation */
.main-nav {
  background: white;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.main-nav.scrolled {
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
}

.main-nav.hidden {
  transform: translateY(-100%);
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

.logo img {
  height: 60px;
  width: auto;
  border-radius: 8px;
}

.logo-text {
  font-size: 1.2rem;
  font-weight: 800;
  color: #101e39;
  line-height: 1.2;
}

.logo-text small {
  font-size: 0.7rem;
  font-weight: 400;
  color: #f7931e;
}

/* Desktop Navigation */
.nav-links {
  display: flex;
  list-style: none;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  align-items: center;
}

.nav-links li a {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  color: #101e39;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 50px;
  transition: all 0.3s ease;
  position: relative;
}

.nav-links li a svg {
  transition: transform 0.3s ease;
}

.nav-links li a:hover {
  color: #f7931e;
  background: rgba(247, 147, 30, 0.1);
}

.nav-links li a:hover svg {
  transform: translateY(-2px);
}

.nav-links li.active a {
  color: #f7931e;
  background: rgba(247, 147, 30, 0.15);
}

.contact-btn {
  background: linear-gradient(135deg, #f7931e, #ff6b35) !important;
  color: white !important;
  box-shadow: 0 4px 15px rgba(247, 147, 30, 0.3);
}

.contact-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(247, 147, 30, 0.4);
  background: linear-gradient(135deg, #ff6b35, #f7931e) !important;
}

/* Mobile Menu Button */
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1002;
}

.mobile-menu-btn span {
  width: 100%;
  height: 3px;
  background: #101e39;
  border-radius: 3px;
  transition: all 0.3s ease;
  transform-origin: center;
}

.mobile-menu-btn span.open:nth-child(1) {
  transform: rotate(45deg) translateY(8px);
  background: #f7931e;
}

.mobile-menu-btn span.open:nth-child(2) {
  opacity: 0;
}

.mobile-menu-btn span.open:nth-child(3) {
  transform: rotate(-45deg) translateY(-8px);
  background: #f7931e;
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(16, 30, 57, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1001;
  overflow-y: auto;
}

.mobile-menu-content {
  background: white;
  width: 85%;
  max-width: 400px;
  height: 100%;
  margin-left: auto;
  box-shadow: -10px 0 50px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
}

.mobile-menu-header {
  padding: 2rem;
  border-bottom: 2px solid #f7931e;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.mobile-menu-header img {
  height: 50px;
  border-radius: 8px;
}

.close-mobile-menu {
  background: transparent;
  border: none;
  color: #101e39;
  cursor: pointer;
  padding: 0.5rem;
  transition: all 0.3s ease;
}

.close-mobile-menu:hover {
  color: #f7931e;
  transform: rotate(90deg);
}

.mobile-nav-links {
  list-style: none;
  padding: 2rem 0;
  margin: 0;
  flex: 1;
}

.mobile-nav-links li a {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem 2rem;
  color: #101e39;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  border-left: 4px solid transparent;
}

.mobile-nav-links li a svg {
  color: #f7931e;
}

.mobile-nav-links li a:hover {
  background: rgba(247, 147, 30, 0.1);
  border-left-color: #f7931e;
  padding-left: 2.5rem;
}

.mobile-nav-links li.active a {
  background: rgba(247, 147, 30, 0.15);
  border-left-color: #f7931e;
  color: #f7931e;
}

.mobile-menu-footer {
  padding: 2rem;
  border-top: 1px solid #eee;
}

.mobile-phone {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 1rem;
  background: linear-gradient(135deg, #f7931e, #ff6b35);
  color: white;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 700;
  transition: all 0.3s ease;
}

.mobile-phone:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(247, 147, 30, 0.4);
}

/* Transitions */
.slide-enter-active, .slide-leave-active {
  transition: all 0.4s ease;
}

.slide-enter-from {
  opacity: 0;
}

.slide-leave-to {
  opacity: 0;
}

.slide-enter-from .mobile-menu-content {
  transform: translateX(100%);
}

.slide-leave-to .mobile-menu-content {
  transform: translateX(100%);
}

/* Responsive */
@media (max-width: 992px) {
  .top-bar {
    display: none;
  }

  .nav-links {
    display: none;
  }

  .mobile-menu-btn {
    display: flex;
  }

  .logo-text {
    font-size: 1rem;
  }

  .logo img {
    height: 50px;
  }
}

@media (max-width: 480px) {
  .nav-container {
    padding: 0.8rem 1rem;
  }

  .logo img {
    height: 45px;
  }

  .logo-text {
    display: none;
  }

  .mobile-menu-content {
    width: 100%;
  }
}
</style>