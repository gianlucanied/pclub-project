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
      <div class="col-12 text-center">CONTATTI</div>
    </div>
  </div>
  <div class="container contacts-container">
    <div class="row">
      <div class="col-lg-6 col-xs-12">
        <h3><b>Come possiamo aiutarti?</b></h3>
        <p>
          Contattaci per richiedere informazioni sui campi prenotabili o per
          delle lezioni private, ti risponderemo nel più breve tempo possibile!
        </p>
        <h6>
          <i class="fa-solid fa-envelope fa-xl"></i>
          <span
            ><a href="mailto:padelalghero@gmail.com">padelalghero@gmail.com</a>
          </span>
        </h6>
        <h6>
          <i class="fa-solid fa-phone fa-xl"></i>
          <span><a href="tel:+393501421000"> +39 350 142 1000</a></span>
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
      <div class="col-lg-6 col-xs-12">
        <img src="../assets/d68afb99-4a22-4936-b1af-2e07ccd40659.jpeg" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.jumbotron {
  position: relative;
  background-image: url("..\assets\55cc2107-fa8b-47c9-a568-3d7a4401c0ce.jpeg");
  height: 800px;
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

.text-center {
  position: relative;
  z-index: 1;
  border-bottom: 1px solid white;
}

.contacts-container {
  margin-top: 100px;
}

.col-lg-6 {
  img {
    width: 80%;
  }
}

h6 {
  margin-top: 50px;
  i {
    margin-right: 20px;
  }
}

h5 {
  margin-top: 80px;
}

a {
  color: black;
  text-decoration: none;
  i {
    margin-right: 20px;
    color: #f1e400;
  }

  p {
    text-decoration: none;
    color: black;
  }
}

a:hover {
  color: #f1e400;
  transition: 0.5s;
}

a:not(:hover) {
  transition: transform 0.3s ease;
}

b {
  border-bottom: 1px solid black;
}

.my-container {
  p {
    margin-top: 20px;
  }
}

i:hover {
  transform: translateY(-5px);
  transition: 0.3s;
}

i:not(:hover) {
  transition: transform 0.3s ease;
}

@media only screen and (max-width: 991px) {
  img {
    width: 100%;
    margin-top: 50px;
  }
}
</style>
