<script>
export default {
  name: "AppFooter",
};
</script>

<template>
  <div class="container-fluid my-container-footer">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <img
            src="/public/db548ce9-9c0d-4174-8d4d-0e5146bffbe0-removebg-preview.png"
            alt="logo footer"
          />
          <div class="row footer-informations">
            <div class="col-md-12 col-xs-12 col-lg-4 section-footer">
              <h5>
                <b>{{ $t("address") }}</b>
              </h5>
              <p>
                <i class="fa-solid fa-location-dot fa-xl"></i>
                <a
                  href="https://www.google.it/maps/place/Padel+Club+Alghero/@40.575007,8.3162001,18z/data=!4m15!1m8!3m7!1s0x12dcf1f9e7851add:0xbf96a93a594c1d9c!2sViale+Europa,+07041+Alghero+SS!3b1!8m2!3d40.577633!4d8.3155993!16s%2Fg%2F1v79yj6_!3m5!1s0x12dcf1f65ab63d2b:0x72a4e977da2d13db!8m2!3d40.5748764!4d8.3176214!16s%2Fg%2F11qqvp8y6d?entry=ttu"
                  >Viale Europa - Via delle Baleari<br />
                  Alghero (SS)<br />
                  Italy</a
                >
              </p>
            </div>
            <div class="col-lg-4 col-xs-12 section-footer border-left-right">
              <h5>
                <b>{{ $t("information") }}</b>
              </h5>
              <p>
                <i class="fa-solid fa-envelope fa-xl"></i>
                <a href="mailto:padelalghero@gmail.com"
                  >padelalghero@gmail.com</a
                >
              </p>
              <p>
                <i class="fa-solid fa-phone fa-xl"></i>
                <a href="tel:+393454821835">+39 345 482 1835</a>
              </p>
              <p>
                <i class="fa-solid fa-phone fa-xl"></i>
                <a href="tel:+393501421000">+39 350 142 1000</a>
              </p>
            </div>
            <div class="col-lg-3 col-xs-12 section-footer">
              <h5>
                <b>{{ $t("social") }}</b>
              </h5>

              <a href="https://www.instagram.com/padelalghero/">
                <i class="fa-brands fa-instagram fa-xl"></i
              ></a>

              <a href="https://www.facebook.com/padelalghero/?locale=it_IT"
                ><i class="fa-brands fa-facebook fa-xl"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="creator-container col-lg-6 col-sm-12 text-center">
          <p>
            Photos:
            <a href="https://www.instagram.com/campusfederico/"
              ><b>Federico Campus</b></a
            >
          </p>
        </div>
        <div class="creator-container col-lg-6 col-sm-12 text-center">
          <p>
            Made with
            <i
              id="heart"
              class="fa-solid fa-heart fa-lg"
              style="color: #0000ff"
            ></i>
            by
            <a href="https://www.instagram.com/gianlucanied/"
              ><b>gianlucanied</b></a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.my-container-footer {
  padding-top: 30px;
  background-color: #042a3b;
  background-image: url("/public/stacked-waves-haikei-8.svg");
  background-size: auto;
  background-position: center;
  background-repeat: no-repeat;

  h5 {
    color: white;
  }
}
a {
  padding-right: 10px;
  font-size: 1.2rem;
}

p {
  margin: 10px 0;
  color: white;

  a {
    text-decoration: none;
    color: white;
  }
}

i {
  text-decoration: none;
  color: #f1e400;
  padding-right: 10px;
}

img {
  width: 40%;
}

p:hover {
  i {
    transform: translateY(-5px);
    transition: 0.3s;
  }
}

p:not(:hover) {
  i {
    transition: transform 0.3s ease;
  }
}

i:hover {
  transform: translateY(-5px);
  transition: 0.3s;
}

i:not(:hover) {
  transition: transform 0.3s ease;
}

.footer-informations {
  padding: 50px 0;
  /* gap: 20px; */
}

.section-footer {
  padding: 20px;
  /* border-left: 2px solid #f1e400;
  border-right: 2px solid #f1e400; */
}

.border-left-right {
  border-left: 1px solid #f1e400;
  border-right: 1px solid #f1e400;
}

@media only screen and (max-width: 991px) {
  img {
    width: 80%;
  }
  .border-left-right {
    border: none;
  }
}

@media only screen and (max-width: 480px) {
}

.creator-container {
  padding-bottom: 30px;
  display: flex;
  justify-content: center;
}

.creator-container a {
  font-size: 15px;
  padding-left: 0px;
}

.creator-container a:hover {
  color: #f1e400;
  transition: 0.3s;
}

.creator-container p {
  color: white;
  text-align: center;
}

#heart {
  padding: 0px;
}
</style>
