<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

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
      alleanzaImages,
      modules: [Navigation, Pagination, Mousewheel, Keyboard],
    };
  },
};
</script>

<template>
  <div
    class="jumbotron container-fluid d-flex align-items-center justify-content-center"
  >
    <div class="row">
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        class="col-12 text-center text-jumbo"
      >
        {{ $t("tournaments2") }}
      </div>
    </div>
  </div>
  <div class="my-container-2 container-fluid macro-container">
    <div
      class="container container-interno"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div class="row">
        <div class="col-12 text-center" data-aos="fade-up" data-aos-delay="100">
          <h2>{{ $t("nextTournaments") }}</h2>
          <p>{{ $t("descriptionTournaments") }}</p>
        </div>
      </div>
    </div>
    <div
      class="container container-interno"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div class="row">
        <div class="col-12 text-center">
          <h2 data-aos="fade-up" data-aos-delay="100">
            {{ $t("olderTournaments") }}
          </h2>
          <div class="container-slider" data-aos="fade-up" data-aos-delay="100">
            <p>2° OPEN Riviera del corallo</p>
            <swiper
              :cssMode="true"
              :navigation="true"
              :pagination="true"
              :mousewheel="true"
              :keyboard="true"
              :modules="modules"
              class="mySwiper"
            >
              <swiper-slide v-for="(image, index) in secondOpen" :key="index">
                <img :src="image" alt="" />
              </swiper-slide>
            </swiper>
          </div>
          <div class="container-slider" data-aos="fade-up" data-aos-delay="100">
            <p>1° Torneo ALLEANZA ASSICURAZIONI</p>
            <swiper
              :cssMode="true"
              :navigation="true"
              :pagination="true"
              :mousewheel="true"
              :keyboard="true"
              :modules="modules"
              class="mySwiper"
            >
              <swiper-slide
                v-for="(image, index) in alleanzaImages"
                :key="index"
              >
                <img :src="image" alt="" />
              </swiper-slide>
            </swiper>
          </div>
          <div class="container-slider" data-aos="fade-up" data-aos-delay="100">
            <p>1° OPEN Riviera del corallo</p>
            <swiper
              :cssMode="true"
              :navigation="true"
              :pagination="true"
              :mousewheel="true"
              :keyboard="true"
              :modules="modules"
              class="mySwiper"
            >
              <swiper-slide v-for="(image, index) in primoOpen" :key="index">
                <img :src="image" alt="" />
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.jumbotron {
  position: relative;
  background-image: url("/public/FE972531.jpg");
  height: 85vh;
  color: white;
  font-size: 4rem;
  background-size: cover;
  background-position: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.jumbotron::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}

.text-jumbo {
  border-bottom: 1px solid white;
}

.macro-container {
  background-image: url("/public/Animated-Shape10.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.my-container-2 {
  padding: 150px 10% 80px 10%;
}

.my-container-2 p {
  font-size: 1.3rem;
}

h2 {
  text-decoration: underline;
}

.container-interno {
  margin: 50px 0;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.container-slider {
  margin-bottom: 50px;
}

.swiper-slide {
  height: 70vh; /* Set the desired height of the slide */
  display: flex;
  align-items: center;
  justify-content: center;
}

.swiper-slide img {
  object-fit: contain;
  width: auto;
  height: 100%;
  max-height: 100%;
}

@media (max-width: 480px) {
  .jumbotron {
    font-size: 3rem;
  }
}
</style>
