<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "AppHome",
  data() {
    return {
      jumbotronImages: [
        "/eac49fce-761a-4354-8438-9c211bba0c1d.jpeg",
        "/fc2b85a3-5a4c-44d0-9ae1-4c8ad5dc4a62.jpeg",
        "/a446630-b24c-4e8e-b6c6-dc20da6523d3.jpeg",
        "/90a4c679-75f3-42e5-b0f1-cbdc17ad427a.jpeg",
      ],
      currentImageIndex: 0,
      clickSound: null,
    };
  },
  mounted() {
    setInterval(() => {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.jumbotronImages.length;
    }, 3000);

    AOS.init();

    this.clickSound = new Audio("/tennis-ball-hit-151257.mp3");
  },
  methods: {
    prenotaPlaytomic() {
      if (this.clickSound) {
        this.clickSound.play();
      }

      window.location.href =
        "https://playtomic.io/padel-club-alghero/a1eaa271-dbc0-49a8-824b-84c6b9b94252?q=PADEL~2024-05-23~~~";
    },
  },
};
</script>

<template>
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
        <div class="col-lg-6">
          <p data-aos="fade-up" data-aos-delay="100">
            <b>Benvenuti al Padel Alghero:</b> Benvenuti al Padel Alghero,
            situato in una posizione privilegiata ad Alghero, lungo Viale Europa
            e Via delle Baleari. <br /><br />
            Immerso nella bellezza della costa sarda e affacciato sul mare
            cristallino, offre tre campi all'aperto con attrezzature moderne per
            sfide e tornei. <br /><br />Dopo il gioco, rilassatevi sulla
            terrazza panoramica o al bar con bevande e spuntini.
            <br /><br />Venite a scoprire l'emozione di giocare a padel in un
            luogo incantevole della Sardegna per un'esperienza indimenticabile
            di sport, divertimento e relax!
          </p>
        </div>
        <div class="col-lg-6">
          <img
            data-aos="fade-up"
            data-aos-delay="100"
            src="\44dea813-c467-45cf-a491-6b45f7ad7c5a.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  background-color: rgba(0, 0, 0, 0.6);
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

.my-container-homepage {
  padding: 0 10%;
}

h2 {
  margin: 30px 0;
}

.col-lg-6 img {
  width: 100%;
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.jumbotron img {
  height: 1000px;
  width: 100%;
  object-fit: cover;
  max-width: 100%;
  max-height: 1000px;
}

.icona-playtomic {
  position: absolute;
  top: 65%;
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
}
</style>
