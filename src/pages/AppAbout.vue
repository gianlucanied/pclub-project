<script>
export default {
  name: "AppAbout",
};
</script>

<template>
  <div
    class="jumbotron container-fluid d-flex align-items-center justify-content-center"
  >
    <div class="row">
      <div data-aos="fade-up" data-aos-delay="100" class="col-12 text-center">
        {{ $t("about") }}
      </div>
    </div>
  </div>
  <div class="my-container-bubble container-fluid">
    <div class="container my-container-about">
      <div data-aos="zoom-out-right">
        <div class="row">
          <div class="col-12">
            <h2>
              <b>{{ $t("suDiNoi") }}</b>
            </h2>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-12">
            <p v-html="$t('pAbout')"></p>
          </div>
        </div>
      </div>
      <div data-aos="zoom-out-left">
        <div class="row">
          <div class="col-12">
            <h2>
              <br />
              <b>{{ $t("why") }}</b>
            </h2>
            <br />
          </div>
        </div>
        <div class="row">
          <div class="col-12"><span v-html="$t('secondPAbout')"></span></div>
        </div>
      </div>
      <div class="sponsor-container container-fluid" data-aos="fade-up">
        <h3>
          <b>{{ $t("sponsor") }}</b>
        </h3>
        <div class="row justify-content-center">
          <div
            class="col-6 col-md-4 col-lg-4 sponsor d-flex align-items-center justify-content-center"
          >
            <img src="/public/sponsor/aragon-removebg-preview.png" alt="" />
          </div>
          <div
            class="col-6 col-md-4 col-lg-4 sponsor d-flex align-items-center justify-content-center"
          >
            <img src="/public/sponsor/conad-removebg-preview.png" alt="" />
          </div>
          <div
            class="col-6 col-md-4 col-lg-4 sponsor d-flex align-items-center justify-content-center"
          >
            <img
              src="/public/sponsor/De-filippis-removebg-preview.png"
              alt=""
            />
          </div>
          <div
            class="col-6 col-md-4 col-lg-4 sponsor d-flex align-items-center justify-content-center"
          >
            <img
              src="/public/sponsor/hotel-florida-removebg-preview.png"
              alt=""
            />
          </div>
          <div
            class="col-6 col-md-4 col-lg-4 sponsor d-flex align-items-center justify-content-center"
          >
            <img src="/public/sponsor/vibra-removebg-preview.png" alt="" />
          </div>
          <div
            class="col-6 col-md-4 col-lg-4 sponsor d-flex align-items-center justify-content-center"
          >
            <img
              src="/public/sponsor/Rent_a_Car_express_Alghero-removebg-preview.png"
              alt=""
            />
          </div>
          <div
            class="col-6 col-md-4 col-lg-4 sponsor d-flex align-items-center justify-content-center"
          >
            <img src="/public/sponsor/logudoro.png" alt="" />
          </div>
          <div
            class="col-6 col-md-4 col-lg-4 sponsor d-flex align-items-center justify-content-center"
          >
            <img src="/public/sponsor/nautilus-Logo-02.png" alt="" />
          </div>
          <div
            class="col-6 col-md-4 col-lg-4 sponsor d-flex align-items-center justify-content-center"
          >
            <img src="/public/sponsor/mp-finance-removebg-preview.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.jumbotron {
  position: relative;
  background-image: url("/public/FE973089.jpg");
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

.my-container-bubble {
  background-image: url("/public/Animated-Shape10.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.text-center {
  position: relative;
  z-index: 1;
  border-bottom: 1px solid white;
}

.sponsor-container {
  background-color: rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 20px;
  margin-top: 50px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  h3 {
    text-align: center;
    text-decoration: underline;
    font-size: 2rem;
    margin: 30px 0px;
  }
}

h2 {
  text-decoration: underline;
}

.my-container-about {
  padding: 100px 10%;

  p {
    font-size: 1.3rem;
  }

  span {
    font-size: 1.3rem;
    padding-left: 5px;
  }

  i {
    display: inline-block;
    margin-right: 10px;
    color: black;
  }
}

.sponsor img {
  width: 100%;
  max-width: 200px;
}

@media only screen and (max-width: 991px) {
  .text-center {
    font-size: 3rem;
  }

  h3 {
    font-size: 20px;
  }
}
</style>
