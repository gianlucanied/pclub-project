<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "AppHome",
  data() {
    return {
      jumbotronImages: [
        "/FE973048.jpg",
        "/FE973700.jpg",
        "/FE972702.jpg",
        "/FE972716.jpg",
        "/FE973723.jpg",
        "/FE972247.jpg",
      ],
      homepageImages: [
        "/FE972239.jpg",
        "/FE972342.jpg",
        "/FE972357.jpg",
        "/FE972882.jpg",
        "/FE973089.jpg",
        "/FE972626.jpg",
        "/FE972653.jpg",
        "/FE972885.jpg",
        "/FE973294.jpg",
        "/FE973710.jpg",
        "/FE972563.jpg",
        "/FE972959.jpg",
        "/FE973307.jpg",
        "/FE972902.jpg",
        "/FE973787.jpg",
      ],
      currentImageIndex: 0,
      showFullscreenImage: false,
      selectedImage: null,
      clickSound: null,
    };
  },
  methods: {
    openFullscreenImage(image) {
      this.selectedImage = image;
      this.showFullscreenImage = true;
    },
    closeFullscreenImage() {
      this.showFullscreenImage = false;
    },
    prenotaPlaytomic() {
      if (this.clickSound) {
        this.clickSound.play();
      }

      window.location.href =
        "https://playtomic.io/padel-club-alghero/a1eaa271-dbc0-49a8-824b-84c6b9b94252?q=PADEL~2024-05-23~~~";
    },
  },
  mounted() {
    this.$nextTick(() => {
      setInterval(() => {
        this.currentImageIndex =
          (this.currentImageIndex + 1) % this.jumbotronImages.length;
      }, 3000);
      AOS.init();
    });

    this.clickSound = new Audio("/tennis-ball-hit-151257.mp3");
  },
};
</script>

<template>
  <div>
    <div class="fullscreen-image-overlay" v-if="showFullscreenImage">
      <span class="close-button" @click="closeFullscreenImage"
        ><i class="fa-regular fa-circle-xmark fa-xl"></i
      ></span>
      <img :src="selectedImage" alt="Fullscreen Image" />
    </div>

    <div
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
      data-aos-offset="0"
      class="container-fluid jumbotron"
    >
      <div class="overlay-text">PADEL CLUB ALGHERO</div>
      <div class="icona-playtomic">
        <button @click="prenotaPlaytomic">Prenota su Playtomic</button>
      </div>
      <img :src="jumbotronImages[currentImageIndex]" alt="jumbotron image" />
    </div>

    <div class="my-macro-container container-fluid">
      <div class="container my-container-homepage">
        <div class="row">
          <h2 data-aos="fade-up" class="text-center">Il Club</h2>
          <div class="col-lg-12">
            <p data-aos="fade-up" data-aos-delay="100">
              <b>Benvenuti al Padel Club Alghero:</b>
              situato in una posizione privilegiata ad Alghero, lungo Viale
              Europa e Via delle Baleari. <br /><br />
              Immerso nella bellezza della costa sarda e affacciato sul mare
              cristallino, offre tre campi all'aperto con attrezzature moderne
              per sfide e tornei. <br /><br />Dopo il gioco, rilassatevi sulla
              terrazza panoramica o al bar con bevande e spuntini.
              <br /><br />Venite a scoprire l'emozione di giocare a padel in un
              luogo incantevole della Sardegna per un'esperienza indimenticabile
              di sport, divertimento e relax!
            </p>
          </div>
        </div>
        <div class="row gallery" data-aos="fade-up">
          <div class="col-12">
            <div class="grid">
              <div
                v-for="(image, index) in homepageImages"
                :key="index"
                class="grid-item"
                @click="openFullscreenImage(image)"
              >
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

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
  color: white;
  z-index: 1000;
}

.close-button:hover {
  color: red;
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

.gallery {
  margin-top: 50px;
}

.my-container-homepage {
  padding: 0 10%;
}

.grid-item {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
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
}

.grid-item img:hover {
  cursor: pointer;
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
  .jumbotron {
    height: 800px;
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
