<script>
export default {
  name: "AppContacts",
};
</script>

<template>
  <div
    class="jumbotron container-fluid d-flex align-items-center justify-content-center"
  >
    <div class="row">
      <div data-aos="fade-up" data-aos-delay="100" class="col-12 text-center">
        CONTATTI
      </div>
    </div>
  </div>
  <div class="my-container-bubble container-fluid">
    <div class="container contacts-container">
      <div class="row">
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          class="col-lg-6 col-xs-12"
        >
          <h2>Come possiamo aiutarti?</h2>
          <p>
            Contattaci per richiedere informazioni sui campi prenotabili o per
            delle lezioni private, ti risponderemo nel più breve tempo
            possibile!
          </p>
          <h6>
            <i class="fa-solid fa-envelope fa-xl"></i>
            <span
              ><a href="mailto:padelalghero@gmail.com"
                >padelalghero@gmail.com</a
              >
            </span>
          </h6>
          <h6>
            <i class="fa-solid fa-phone fa-xl"></i>
            <span><a href="tel:+393501421000">+39 350 142 1000</a></span>
          </h6>
          <h6 class="playtomic-container">
            <img
              id="playtomic-icon"
              src="../../public/playtomic2.png"
              alt="logo playtomic"
            />
            <span>
              <a
                href="https://playtomic.io/padel-club-alghero/a1eaa271-dbc0-49a8-824b-84c6b9b94252?q=PADEL~2024-05-23~~~"
                >Prenota su Playtomic</a
              ></span
            >
          </h6>
          <div class="container-fluid">
            <div class="row">
              <div class="col-6 my-container">
                <h5>
                  <b>Dove siamo:</b>
                </h5>
                <a
                  href="https://www.google.it/maps/place/Padel+Club+Alghero/@40.575007,8.3162001,18z/data=!4m15!1m8!3m7!1s0x12dcf1f9e7851add:0xbf96a93a594c1d9c!2sViale+Europa,+07041+Alghero+SS!3b1!8m2!3d40.577633!4d8.3155993!16s%2Fg%2F1v79yj6_!3m5!1s0x12dcf1f65ab63d2b:0x72a4e977da2d13db!8m2!3d40.5748764!4d8.3176214!16s%2Fg%2F11qqvp8y6d?entry=ttu"
                  ><p>Viale Europa - Via delle Baleari <br />Alghero(SS)</p></a
                >
              </div>
              <div class="col-6 my-container">
                <h5><b>Social:</b></h5>
                <p>
                  <a href="https://www.instagram.com/padelalghero/">
                    <i class="fa-brands fa-instagram fa-xl"></i
                  ></a>

                  <a href="https://www.facebook.com/padelalghero/?locale=it_IT"
                    ><i class="fa-brands fa-facebook fa-xl"></i
                  ></a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="flip-left" class="col-lg-6 col-xs-12">
          <img src="/public/d68afb99-4a22-4936-b1af-2e07ccd40659.jpeg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.jumbotron {
  position: relative;
  background-image: url("/public/55cc2107-fa8b-47c9-a568-3d7a4401c0ce.jpeg");
  height: 100vh;
  color: white;
  font-size: 4rem;
  background-size: cover;
  background-position: center;
}

.jumbotron::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.my-container-bubble {
  background-image: url("/public/Animated-Shape1.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.text-center {
  position: relative;
  z-index: 1;
  border-bottom: 1px solid white;
}

#playtomic-icon {
  box-shadow: none;
  width: 40px;
  margin-left: -8px;
  margin-right: 18px;
}

.contacts-container {
  margin-top: 100px;
  padding: 50px 10% 80px 10%;
}

p {
  font-size: 1.3rem;
}

.col-lg-6 {
  img {
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
}

h6 {
  margin-top: 50px;
  i {
    margin-right: 20px;
  }
  a {
    display: inline-block; /* Assicura che l'elemento possa essere spostato */
    transition: transform 0.3s ease;
  }
  a:hover {
    transform: translateY(-5px);
  }
}

h5 {
  margin-top: 80px;
}

h2 {
  text-decoration: underline;
}

a {
  color: black;
  text-decoration: none;
  font-size: 1.3rem;
  i {
    margin-right: 20px;
    color: #0f1e38;
  }
  p {
    text-decoration: none;
    color: black;
  }
}

a:hover {
  color: black;
  transition: 0.3s;
}

b {
  border-bottom: 1px solid black;
  font-size: 1.5rem;
}

.my-container {
  p {
    margin-top: 20px;
    font-size: 1.3rem;
  }
}

i:hover {
  transform: translateY(-5px);
  transition: 0.3s;
}

i:not(:hover) {
  transition: transform 0.3s ease;
}

a:hover p {
  transform: translateY(-5px);
  transition: 0.3s;
}

@media only screen and (max-width: 991px) {
  #playtomic-icon {
    margin-top: -7px;
  }
  img {
    width: 100%;
    margin-top: 50px;
  }

  .text-center {
    font-size: 3rem;
  }
}
</style>
