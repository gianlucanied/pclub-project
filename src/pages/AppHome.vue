<script>
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { Autoplay, EffectCards, EffectCube, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { onBeforeUnmount, onMounted, ref } from "vue";

export default {
  name: "AppHome",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const modules = [EffectCards, EffectCube, Pagination, Autoplay];
    const jumbotronImages = [
      "/FE973048.jpg",
      "/FE973700.jpg",
      "/FE972702.jpg",
      "/FE972716.jpg",
      "/FE973723.jpg",
      "/padelcoperto.jpg",
    ];
    const homepageImages = [
      "/FE972239.jpg",
      "/FE972342.jpg",
      "/FE972357.jpg",
      "/FE972882.jpg",
      "/FE973089.jpg",
      "/FE972626.jpg",
      "/FE972653.jpg",
      "/FE972885.jpg",
      "/FE972960.jpg",
      "/FE973294.jpg",
      "/FE973710.jpg",
      "/FE972959.jpg",
      "/FE973307.jpg",
      "/FE972902.jpg",
      "/FE973787.jpg",
    ];
    const currentImageIndex = ref(0);
    const showFullscreenImage = ref(false);
    const selectedImageIndex = ref(null);
    const clickSound = ref(null);
    const isSmallScreen = ref(window.innerWidth < 768);

    const openFullscreenImage = (index) => {
      selectedImageIndex.value = index;
      showFullscreenImage.value = true;
      document.body.style.overflow = 'hidden';
    };

    const closeFullscreenImage = () => {
      showFullscreenImage.value = false;
      document.body.style.overflow = 'auto';
    };

    const nextImage = () => {
      if (selectedImageIndex.value !== null) {
        selectedImageIndex.value =
          (selectedImageIndex.value + 1) % homepageImages.length;
      }
    };

    const prevImage = () => {
      if (selectedImageIndex.value !== null) {
        selectedImageIndex.value =
          (selectedImageIndex.value - 1 + homepageImages.length) %
          homepageImages.length;
      }
    };

    const prenotaPlaytomic = () => {
      if (clickSound.value) {
        clickSound.value.play();
      }
      window.location.href =
        "https://playtomic.io/padel-club-alghero/a1eaa271-dbc0-49a8-824b-84c6b9b94252?q=PADEL~2024-05-23~~~";
    };

    const handleResize = () => {
      isSmallScreen.value = window.innerWidth < 768;
    };

    onMounted(() => {
      const interval = setInterval(() => {
        currentImageIndex.value =
          (currentImageIndex.value + 1) % jumbotronImages.length;
      }, 4000);
      
      AOS.init({
        duration: 1000,
        once: true,
      });
      
      clickSound.value = new Audio("/tennis-ball-hit-151257.mp3");
      window.addEventListener("resize", handleResize);

      return () => clearInterval(interval);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", handleResize);
    });

    return {
      modules,
      jumbotronImages,
      homepageImages,
      currentImageIndex,
      showFullscreenImage,
      selectedImageIndex,
      clickSound,
      openFullscreenImage,
      closeFullscreenImage,
      nextImage,
      prevImage,
      prenotaPlaytomic,
      isSmallScreen,
    };
  },
};
</script>

<template>
  <div class="home-page">
    <!-- Fullscreen Image Overlay -->
    <transition name="fade">
      <div class="fullscreen-overlay" v-if="showFullscreenImage" @click.self="closeFullscreenImage">
        <button class="close-btn" @click="closeFullscreenImage" aria-label="Close">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <button class="nav-btn prev-btn" @click="prevImage" aria-label="Previous">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        
        <button class="nav-btn next-btn" @click="nextImage" aria-label="Next">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
        
        <div class="fullscreen-content">
          <img :src="homepageImages[selectedImageIndex]" alt="Gallery Image" />
          <div class="image-counter">
            {{ selectedImageIndex + 1 }} / {{ homepageImages.length }}
          </div>
        </div>
      </div>
    </transition>

    <!-- Hero/Jumbotron -->
    <section class="hero-section">
      <div class="hero-slideshow">
        <transition-group name="slide-fade">
          <img
            v-for="(image, index) in jumbotronImages"
            :key="index"
            v-show="index === currentImageIndex"
            :src="image"
            :alt="`Slide ${index + 1}`"
            class="hero-image"
          />
        </transition-group>
      </div>
      
      <div class="hero-overlay"></div>
      
      <div class="hero-content" data-aos="fade-up" data-aos-delay="200">
        <h1 class="hero-title">{{ $t("heroTitle") }}</h1>
        <p class="hero-subtitle">{{ $t("heroSubtitle") }}</p>
        <button @click="prenotaPlaytomic" class="cta-playtomic">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          {{ $t("buttonPlaytomic") }}
        </button>
      </div>

      <div class="scroll-indicator">
        <div class="mouse"></div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="main-content">
      <div class="container">
        <!-- News Section -->
        <section class="news-section" data-aos="fade-up">
          <div class="news-badge">{{ $t("newsBadge") }}</div>
          <h2>{{ $t("news") }}</h2>
          <p class="news-text">{{ $t("pNews") }}</p>
          
          <div class="news-image-container" data-aos="zoom-in" data-aos-delay="200">
            <img src="/copertura.jpg" alt="News" class="news-image" />
            <div class="image-shine"></div>
          </div>
        </section>

        <!-- About Section -->
        <section class="about-section" data-aos="fade-up">
          <div class="about-content" v-html="$t('pHome')"></div>
        </section>

        <!-- Price List -->
        <section class="price-section" data-aos="fade-up">
          <h2>{{ $t("priceListTitle") }}</h2>
          <div class="price-card">
            <img src="/nuova-locandina.jpg" alt="Listino Prezzi" class="price-image" />
          </div>
        </section>

        <!-- Gallery Section -->
        <section class="gallery-section" data-aos="fade-up">
          <div class="section-header">
            <h2>{{ $t("gallery") }}</h2>
            <p class="section-subtitle">{{ $t("gallerySubtitle") }}</p>
          </div>

          <!-- Mobile Swiper -->
          <swiper
            v-if="isSmallScreen"
            :effect="'cards'"
            :grabCursor="true"
            :modules="modules"
            :autoplay="{ delay: 3000, disableOnInteraction: false }"
            class="mobile-swiper"
          >
            <swiper-slide v-for="(image, index) in homepageImages" :key="index">
              <img :src="image" :alt="`Gallery ${index + 1}`" />
            </swiper-slide>
          </swiper>

          <!-- Desktop Grid -->
          <div v-else class="gallery-grid">
            <div
              v-for="(image, index) in homepageImages"
              :key="index"
              class="gallery-item"
              :class="{ 
                'gallery-item--tall': index % 7 === 0,
                'gallery-item--wide': index % 5 === 0
              }"
              @click="openFullscreenImage(index)"
              data-aos="zoom-in"
              :data-aos-delay="index * 50"
            >
              <div class="gallery-item-wrapper">
                <img :src="image" :alt="`Gallery ${index + 1}`" />
                <div class="gallery-overlay">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Fullscreen Overlay */
.fullscreen-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  backdrop-filter: blur(10px);
}

.fullscreen-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fullscreen-content img {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 25px 100px rgba(0, 0, 0, 0.5);
}

.image-counter {
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 1rem;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  backdrop-filter: blur(10px);
}

.close-btn {
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.close-btn:hover {
  background: #ff6b35;
  border-color: #ff6b35;
  transform: rotate(90deg);
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.prev-btn {
  left: 2rem;
}

.next-btn {
  right: 2rem;
}

.nav-btn:hover {
  background: #f7931e;
  border-color: #f7931e;
  transform: translateY(-50%) scale(1.1);
}

/* Hero Section */
.hero-section {
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-slideshow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.hero-image {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slide-fade-enter-active {
  transition: all 1.5s ease;
}

.slide-fade-leave-active {
  transition: all 1.5s ease;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: scale(1.1);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 100%);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  padding: 2rem;
}

.hero-title {
  font-size: 5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  text-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  letter-spacing: -2px;
  background: linear-gradient(135deg, #fff, #f7931e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  opacity: 0.95;
  font-weight: 300;
}

.cta-playtomic {
  padding: 1.2rem 3rem;
  background: linear-gradient(135deg, #f7931e, #ff6b35);
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 40px rgba(247, 147, 30, 0.4);
}

.cta-playtomic:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 15px 50px rgba(247, 147, 30, 0.6);
}

.scroll-indicator {
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}

.mouse {
  width: 30px;
  height: 50px;
  border: 3px solid rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  position: relative;
  animation: mouse-scroll 2s infinite;
}

.mouse::before {
  content: '';
  width: 6px;
  height: 6px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  animation: mouse-wheel 2s infinite;
}

@keyframes mouse-scroll {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@keyframes mouse-wheel {
  0% {
    top: 10px;
  }
  50% {
    top: 20px;
  }
  100% {
    top: 10px;
  }
}

/* Main Content */
.main-content {
  background-image: url("/public/Animated-Shape-2.svg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 6rem 2rem;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

/* News Section */
.news-section {
  text-align: center;
  margin-bottom: 8rem;
  position: relative;
}

.news-badge {
  display: inline-block;
  background: linear-gradient(135deg, #ff6b35, #f7931e);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
}

.news-section h2 {
  font-size: 3.5rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
  font-weight: 800;
}

.news-text {
  font-size: 1.3rem;
  color: #666;
  margin-bottom: 3rem;
}

.news-image-container {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.15);
}

.news-image {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
}

.news-image-container:hover .news-image {
  transform: scale(1.05);
}

.image-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s;
}

.news-image-container:hover .image-shine {
  left: 100%;
}

/* About Section */
.about-section {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 4rem 3rem;
  border-radius: 24px;
  margin-bottom: 6rem;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
}

.about-content {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #333;
}

/* Price Section */
.price-section {
  margin-bottom: 6rem;
  text-align: center;
}

.price-section h2 {
  font-size: 3rem;
  color: #1a1a1a;
  margin-bottom: 3rem;
  font-weight: 800;
}

.price-card {
  max-width: 1000px;
  margin: 0 auto;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  transition: all 0.4s ease;
}

.price-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.2);
}

.price-image {
  width: 100%;
  height: auto;
  display: block;
}

/* Gallery Section */
.gallery-section {
  margin-top: 6rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: 3.5rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
  font-weight: 800;
  position: relative;
  display: inline-block;
}

.section-header h2::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #ff6b35, #f7931e);
  border-radius: 2px;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #666;
  margin-top: 2rem;
}

/* Mobile Swiper */
.mobile-swiper {
  width: 100%;
  height: 500px;
  padding: 2rem 0 4rem;
}

.mobile-swiper :deep(.swiper-slide) {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
}

.mobile-swiper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Desktop Gallery Grid */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  padding: 2rem 0;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  cursor: pointer;
  background: #f5f5f5;
}

.gallery-item--tall {
  grid-row: span 2;
}

.gallery-item--wide {
  grid-column: span 2;
}

.gallery-item-wrapper {
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.gallery-item--tall .gallery-item-wrapper {
  height: 515px;
}

.gallery-item-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.9), rgba(247, 147, 30, 0.9));
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.gallery-overlay svg {
  color: white;
  transform: scale(0.8);
  transition: transform 0.4s ease;
}

.gallery-item:hover .gallery-item-wrapper img {
  transform: scale(1.15);
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-item:hover .gallery-overlay svg {
  transform: scale(1);
}

/* Transitions */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Responsive */
@media (max-width: 1200px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 3rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .cta-playtomic {
    padding: 1rem 2rem;
    font-size: 1rem;
  }

  .main-content {
    padding: 4rem 1rem;
  }

  .news-section h2,
  .price-section h2,
  .section-header h2 {
    font-size: 2.5rem;
  }

  .about-section {
    padding: 2rem 1.5rem;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .gallery-item-wrapper {
    height: 200px;
  }

  .gallery-item--tall .gallery-item-wrapper {
    height: 415px;
  }

  .nav-btn {
    width: 50px;
    height: 50px;
  }

  .prev-btn {
    left: 1rem;
  }

  .next-btn {
    right: 1rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .gallery-item--tall .gallery-item-wrapper,
  .gallery-item-wrapper {
    height: 250px;
  }
}
</style>