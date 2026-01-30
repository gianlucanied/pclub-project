<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCoverflow, Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";

export default {
  name: "AppTournament",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const primoOpen = [
      "/1-Open/FE970010.jpg",
      "/1-Open/FE970123.jpg",
      "/1-Open/FE970183.jpg",
      "/1-Open/FE970215.jpg",
      "/1-Open/FE970288.jpg",
      "/1-Open/FE970496.jpg",
      "/1-Open/FE970731(1).jpg",
      "/1-Open/FE970802(1).jpg",
      "/1-Open/FE970863.jpg",
      "/1-Open/FE970914.jpg",
      "/1-Open/FE970920.jpg",
      "/1-Open/FE979721.jpg",
      "/1-Open/FE979782.jpg",
      "/1-Open/FE979822(1).jpg",
    ];
    const secondOpen = [
      "/2-Open/FE971269.jpg",
      "/2-Open/FE971363.jpg",
      "/2-Open/FE971373.jpg",
      "/2-Open/FE973815.jpg",
      "/2-Open/FE973858.jpg",
      "/2-Open/FE973873.jpg",
      "/2-Open/FE973963.jpg",
      "/2-Open/FE973984.jpg",
      "/2-Open/FE974050.jpg",
      "/2-Open/FE974364.jpg",
      "/2-Open/FE974402.jpg",
      "/2-Open/FE974693.jpg",
      "/2-Open/FE977686.jpg",
      "/2-Open/FE977729.jpg",
      "/2-Open/FE977794.jpg",
    ];
    const thirdOpen = [
      "/3-Open/1.jpeg",
      "/3-Open/2.jpeg",
      "/3-Open/3.jpeg",
      "/3-Open/4.jpeg",
      "/3-Open/5.jpeg",
      "/3-Open/6.jpeg",
    ];
    const alleanzaImages = [
      "/FE972250.jpg",
      "/FE973166.jpg",
      "/FE973572.jpg",
      "/FE973864.jpg",
      "/FE972882.jpg",
      "/FE972960.jpg",
      "/FE973710.jpg",
      "/FE972959.jpg",
      "/FE973307.jpg",
      "/FE972902.jpg",
    ];
    
    return {
      primoOpen,
      secondOpen,
      thirdOpen,
      alleanzaImages,
      modules: [Navigation, Pagination, Mousewheel, Keyboard, EffectCoverflow, Autoplay],
    };
  },
};
</script>

<template>
  <div class="tournaments-page">
    <!-- Hero Section -->
    <div class="jumbotron">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1 class="hero-title" data-aos="fade-up" data-aos-delay="100">
          {{ $t("tournaments2") }}
        </h1>
        <div class="hero-divider" data-aos="fade-up" data-aos-delay="200"></div>
        <p class="hero-subtitle" data-aos="fade-up" data-aos-delay="300">
          {{ $t("tournamentsSubtitle") }}
        </p>
      </div>
      <div class="scroll-indicator">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </div>

    <!-- Main Content -->
    <div class="main-content">
      <div class="container">
        <!-- Tournaments Section -->
        <section class="tournaments-section">
          <div class="section-header" data-aos="fade-up" data-aos-delay="100">
            <h2>{{ $t("olderTournaments") }}</h2>
            <p class="section-description">{{ $t("tournamentsDescription") }}</p>
          </div>

          <!-- Tournament 1: 3° Open -->
          <div class="tournament-block" data-aos="fade-up" data-aos-delay="100">
            <div class="tournament-header">
              <div class="tournament-badge">🏆</div>
              <div class="tournament-info">
                <h3>{{ $t("tournament4Title") }}</h3>
                <span class="tournament-date">{{ $t("tournament4Date") }}</span>
                <span class="tournament-date tournament-description" v-html="$t('ptorneo')"></span>
              </div>
            </div>
            
            <swiper
              :effect="'coverflow'"
              :grabCursor="true"
              :centeredSlides="true"
              :slidesPerView="'auto'"
              :coverflowEffect="{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }"
              :navigation="true"
              :pagination="{ clickable: true }"
              :mousewheel="true"
              :keyboard="true"
              :autoplay="{ delay: 3000, disableOnInteraction: false }"
              :modules="modules"
              class="tournament-swiper"
            >
              <swiper-slide v-for="(image, index) in thirdOpen" :key="index">
                <div class="slide-content">
                  <img :src="image" :alt="`3° Open - Foto ${index + 1}`" />
                  <div class="slide-overlay">
                    <span class="slide-number">{{ index + 1 }} / {{ thirdOpen.length }}</span>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>

          <!-- Tournament 2: 2° Open -->
          <div class="tournament-block" data-aos="fade-up" data-aos-delay="100">
            <div class="tournament-header">
              <div class="tournament-badge">🏆</div>
              <div class="tournament-info">
                <h3>{{ $t("tournament1Title") }}</h3>
                <span class="tournament-date">{{ $t("tournament1Date") }}</span>
              </div>
            </div>
            
            <swiper
              :effect="'coverflow'"
              :grabCursor="true"
              :centeredSlides="true"
              :slidesPerView="'auto'"
              :coverflowEffect="{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }"
              :navigation="true"
              :pagination="{ clickable: true }"
              :mousewheel="true"
              :keyboard="true"
              :autoplay="{ delay: 3000, disableOnInteraction: false }"
              :modules="modules"
              class="tournament-swiper"
            >
              <swiper-slide v-for="(image, index) in secondOpen" :key="index">
                <div class="slide-content">
                  <img :src="image" :alt="`2° Open - Foto ${index + 1}`" />
                  <div class="slide-overlay">
                    <span class="slide-number">{{ index + 1 }} / {{ secondOpen.length }}</span>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>

          <!-- Tournament 3: Alleanza -->
          <div class="tournament-block" data-aos="fade-up" data-aos-delay="100">
            <div class="tournament-header">
              <div class="tournament-badge">🎾</div>
              <div class="tournament-info">
                <h3>{{ $t("tournament2Title") }}</h3>
                <span class="tournament-date">{{ $t("tournament2Date") }}</span>
              </div>
            </div>
            
            <swiper
              :effect="'coverflow'"
              :grabCursor="true"
              :centeredSlides="true"
              :slidesPerView="'auto'"
              :coverflowEffect="{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }"
              :navigation="true"
              :pagination="{ clickable: true }"
              :mousewheel="true"
              :keyboard="true"
              :autoplay="{ delay: 3500, disableOnInteraction: false }"
              :modules="modules"
              class="tournament-swiper"
            >
              <swiper-slide v-for="(image, index) in alleanzaImages" :key="index">
                <div class="slide-content">
                  <img :src="image" :alt="`Alleanza - Foto ${index + 1}`" />
                  <div class="slide-overlay">
                    <span class="slide-number">{{ index + 1 }} / {{ alleanzaImages.length }}</span>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>

          <!-- Tournament 4: 1° Open -->
          <div class="tournament-block" data-aos="fade-up" data-aos-delay="100">
            <div class="tournament-header">
              <div class="tournament-badge">⭐</div>
              <div class="tournament-info">
                <h3>{{ $t("tournament3Title") }}</h3>
                <span class="tournament-date">{{ $t("tournament3Date") }}</span>
              </div>
            </div>
            
            <swiper
              :effect="'coverflow'"
              :grabCursor="true"
              :centeredSlides="true"
              :slidesPerView="'auto'"
              :coverflowEffect="{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }"
              :navigation="true"
              :pagination="{ clickable: true }"
              :mousewheel="true"
              :keyboard="true"
              :autoplay="{ delay: 4000, disableOnInteraction: false }"
              :modules="modules"
              class="tournament-swiper"
            >
              <swiper-slide v-for="(image, index) in primoOpen" :key="index">
                <div class="slide-content">
                  <img :src="image" :alt="`1° Open - Foto ${index + 1}`" />
                  <div class="slide-overlay">
                    <span class="slide-number">{{ index + 1 }} / {{ primoOpen.length }}</span>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Hero Section */
.jumbotron {
  position: relative;
  background-image: url("/public/FE972531.jpg");
  height: 90vh;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 100%);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  max-width: 900px;
  padding: 2rem;
}

.hero-title {
  font-size: 4.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  letter-spacing: -2px;
  line-height: 1.1;
}

.hero-divider {
  width: 120px;
  height: 4px;
  background: linear-gradient(90deg, transparent, white, transparent);
  margin: 0 auto 1.5rem;
  border-radius: 2px;
}

.hero-subtitle {
  font-size: 1.4rem;
  font-weight: 300;
  opacity: 0.95;
  letter-spacing: 0.5px;
}

.scroll-indicator {
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  animation: bounce 2s infinite;
  color: white;
  opacity: 0.8;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-10px);
  }
  60% {
    transform: translateX(-50%) translateY(-5px);
  }
}

/* Main Content */
.main-content {
  background-image: url("/public/Animated-Shape10.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding: 6rem 2rem;
  min-height: 100vh;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 5rem;
}

.section-header h2 {
  font-size: 3rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
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

.section-description {
  font-size: 1.2rem;
  color: #666;
  margin-top: 2rem;
}

/* Tournament Block */
.tournament-block {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 30px;
  padding: 3rem;
  margin-bottom: 5rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.5);
}

.tournament-block:hover {
  transform: translateY(-10px);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.15);
}

.tournament-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
}

.tournament-badge {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #ff6b35, #f7931e);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  box-shadow: 0 8px 25px rgba(255, 107, 53, 0.3);
  flex-shrink: 0;
}

.tournament-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.tournament-info h3 {
  font-size: 1.8rem;
  color: #1a1a1a;
  margin-bottom: 0;
  font-weight: 700;
  line-height: 1.2;
}

.tournament-date {
  color: #666;
  font-size: 1rem;
  font-weight: 500;
  display: block;
}

.tournament-parag {
  color: #888;
  font-size: 0.95rem;
  font-weight: 400;
  font-style: italic;
  margin-top: 0.3rem;
  line-height: 1.5;
  max-width: 600px;
}

/* Swiper Styles */
.tournament-swiper {
  padding: 3rem 0 5rem;
}

.tournament-swiper .swiper-slide {
  width: 70%;
  max-width: 600px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  overflow: hidden;
}

.slide-content {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3);
}

.slide-content img {
  width: 100%;
  height: 100%;
  object-fit: contain; /* Cambiato da cover a contain */
  background-color: #000; /* Aggiunto sfondo nero per le lettere nere */
  transition: transform 0.5s ease;
}

.slide-content:hover img {
  transform: scale(1.02); /* Ridotto da 1.05 a 1.02 per zoom più leggero */
}

.slide-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  padding: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.slide-content:hover .slide-overlay {
  opacity: 1;
}

.slide-number {
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 1px;
}

/* Swiper Navigation */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #ff6b35;
  background: rgba(255, 255, 255, 0.9);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

:deep(.swiper-button-next):hover,
:deep(.swiper-button-prev):hover {
  background: #ff6b35;
  color: white;
  transform: scale(1.1);
}

:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  font-size: 20px;
  font-weight: 900;
}

:deep(.swiper-pagination-bullet) {
  width: 12px;
  height: 12px;
  background: #ff6b35;
  opacity: 0.5;
  transition: all 0.3s ease;
}

:deep(.swiper-pagination-bullet-active) {
  opacity: 1;
  width: 30px;
  border-radius: 6px;
  background: linear-gradient(90deg, #ff6b35, #f7931e);
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #ff6b35, #f7931e);
  border-radius: 30px;
  padding: 4rem 3rem;
  text-align: center;
  margin-top: 5rem;
  box-shadow: 0 20px 60px rgba(255, 107, 53, 0.3);
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: movePattern 20s linear infinite;
}

@keyframes movePattern {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(50px, 50px);
  }
}

.cta-content {
  position: relative;
  z-index: 1;
}

.cta-section h2 {
  color: white;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.cta-section p {
  color: rgba(255, 255, 255, 0.95);
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.cta-button {
  padding: 1.2rem 3rem;
  background: white;
  color: #ff6b35;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.cta-button:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.cta-button svg {
  transition: transform 0.3s ease;
}

.cta-button:hover svg {
  transform: translateX(5px);
}

/* Responsive */
@media (max-width: 992px) {
  .hero-title {
    font-size: 3.5rem;
  }

  .tournament-swiper .swiper-slide {
    width: 85%;
    height: 400px;
  }

  .tournament-block {
    padding: 2rem;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .main-content {
    padding: 4rem 1rem;
  }

  .section-header h2 {
    font-size: 2.2rem;
  }

  .tournament-header {
    flex-direction: column;
    text-align: center;
  }

  .tournament-info h3 {
    font-size: 1.4rem;
  }

  .tournament-parag {
    max-width: 100%;
  }

  .tournament-swiper .swiper-slide {
    width: 90%;
    height: 350px;
  }

  .cta-section {
    padding: 3rem 1.5rem;
  }

  .cta-section h2 {
    font-size: 2rem;
  }

  .cta-button {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .tournament-badge {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }

  .tournament-swiper .swiper-slide {
    height: 300px;
  }
}
</style>