<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-cards";
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { EffectCube, Pagination } from 'swiper/modules';


import "../style.css";

import { EffectCards } from "swiper/modules";

export default {
  name: "AppHome",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const modules = [EffectCards, EffectCube, Pagination];
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
    };

    const closeFullscreenImage = () => {
      showFullscreenImage.value = false;
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
      setInterval(() => {
        currentImageIndex.value =
          (currentImageIndex.value + 1) % jumbotronImages.length;
      }, 3000);
      AOS.init();
      clickSound.value = new Audio("/tennis-ball-hit-151257.mp3");
      window.addEventListener("resize", handleResize);
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
  <div>
    <div class="fullscreen-image-overlay" v-if="showFullscreenImage">
      <span class="close-button" @click="closeFullscreenImage">
        <i class="fa-regular fa-circle-xmark fa-xl"></i>
      </span>
      <span class="prev-button" @click="prevImage">
        <i class="fa-solid fa-chevron-left fa-2xl"></i>
      </span>
      <span class="next-button" @click="nextImage">
        <i class="fa-solid fa-chevron-right fa-2xl"></i>
      </span>
      <img :src="homepageImages[selectedImageIndex]" alt="Fullscreen Image" />
    </div>

    <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0"
      class="container-fluid jumbotron">
      <div class="overlay-text">Padel Club Alghero</div>
      <div class="icona-playtomic">
        <button @click="prenotaPlaytomic">{{ $t("buttonPlaytomic") }}</button>
      </div>
      <img :src="jumbotronImages[currentImageIndex]" alt="jumbotron image" />
    </div>

    <div class="my-macro-container container-fluid">
      <div class="container my-container-homepage">
        <div class="row">
          <div class="col-lg-12">
            <div class="news">
              <div data-aos="flip-right">
                <h2>{{ $t("news") }}</h2>
                <p>{{ $t("pNews") }}</p>

                <div class="img-lesson" data-aos="flip-left">
                  <img src="/copertura.jpg" alt="">
                </div>



                <h2>{{ $t("lessonsNews") }}</h2>
                <p>{{ $t("pLessons") }}</p>

                <ul>
                  <li v-html="$t('first')"></li>
                  <li v-html="$t('second')"></li>
                  <li v-html="$t('third')"></li>

                </ul>
                <p v-html="$t('pTraining')"></p>
              </div>

              <div class="img-lesson" data-aos="flip-left">
                <img src="/CORSI-ADULTI.png" alt="">
              </div>
            </div>
            <p v-html="$t('pHome')" data-aos="fade-up" data-aos-delay="100"></p>
          </div>
        </div>
        <div class="row gallery" data-aos="fade-up">

          <img class="listino" src="/listino-prezzi.jpg" alt="listino">

          <div id="gallery-name" class="col-md-6 offset-md-3 text-center">
            <b>{{ $t("gallery") }}</b>
          </div>
          <div class="col-12">
            <swiper v-if="isSmallScreen" :effect="'cards'" :grabCursor="true" :modules="modules" class="mySwiper">
              <swiper-slide v-for="(image, index) in homepageImages" :key="index">
                <img :src="image" alt="" />
              </swiper-slide>
            </swiper>
            <div v-else class="grid">
              <div v-for="(image, index) in homepageImages" :key="index" class="grid-item"
                @click="openFullscreenImage(index)">
                <div class="image-wrapper">
                  <img :src="image" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fullscreen-image-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.fullscreen-image-overlay img {
  max-width: 90%;
  max-height: 90%;
}

.close-button,
.prev-button,
.next-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  font-size: 24px;
  cursor: pointer;
  z-index: 1000;
}

.close-button {
  top: 40px;
  right: 30px;
}

.prev-button {
  left: 30px;
}

.next-button {
  right: 30px;
}

.close-button:hover {
  color: red;
}

.prev-button:hover,
.next-button:hover {
  color: #f1e400;
}

.jumbotron {
  position: relative;
  padding: 0;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.jumbotron img {
  height: 100vh;
  width: 100%;
  object-fit: cover;
}

.jumbotron::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
}

.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 4rem;
  z-index: 2;
  text-align: center;
  border: 5px solid white;
  padding: 20px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.4);
  margin-bottom: 30px;
}


.news {
  text-align: center;
  margin-bottom: 100px;

  img {
    margin: 100px 0;
    border-radius: 20px;
    width: 80%;
    height: auto;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    object-fit: contain;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

  li {
    list-style: none;
  }

  p {
    text-align: left;
  }
}

.news img:hover {
  transform: scale(1.1);

}

.my-macro-container {
  background-image: url("/public/Animated-Shape-2.svg");
  height: auto;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-bottom: 50px;
  font-size: 1.3rem;

  h2 {
    font-size: 3rem;
  }
}

#gallery-name {
  margin-bottom: 30px;
  font-size: 2.5rem;
  border-bottom: 2px solid black;
}

.gallery {
  margin-top: 50px;
}

.my-container-homepage {
  padding: 10%;
}

.grid-item {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.listino {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  width: 100%;
  border-radius: 20px;
  padding: 0;
  margin-bottom: 70px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

}

.listino:hover {
  transform: scale(1.1);

}

h2 {
  margin: 30px 0;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

.grid-item {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.grid-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease-in-out;
}

.grid-item img:hover {
  cursor: pointer;
  transform: scale(1.2);
}

.grid-item .image-wrapper {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.grid-item--tall {
  grid-row: span 2;
}

.grid-item--wide {
  grid-column: span 2;
}

.grid-item--big {
  grid-row: span 2;
  grid-column: span 2;
}

.icona-playtomic {
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-align: center;
}

.icona-playtomic button {
  background-color: #f1e400;
  color: black;
  border: none;
  padding: 10px 20px;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.icona-playtomic button:hover {
  transform: translateY(-3px);
}

@media (max-width: 768px) {

  .news {
    img {
      width: 100%;
    }
  }

  .mySwiper {
    width: 100%;
    height: 400px;
    margin: 100px 0;
  }

  .jumbotron {
    height: 800px;
    margin-bottom: 70px;
  }

  .jumbotron img {
    height: 800px;
    max-height: none;
  }

  .icona-playtomic {
    margin-top: 30px;
  }

  .my-macro-container {
    height: auto;
    padding-bottom: 50px;
  }

  .overlay-text {
    font-size: 2rem;
    padding: 10px;
  }

  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {


  .grid {
    grid-template-columns: 1fr;
  }

  .grid-item .image-wrapper {
    height: 150px;
  }
}
</style>
