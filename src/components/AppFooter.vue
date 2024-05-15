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
          <img src="../assets/output-onlinepngtools.png" alt="logo footer" />
          <div class="row footer-informations">
            <div class="col-md-12 col-xs-12 col-lg-4 section-footer">
              <h5><b>Indirizzo:</b></h5>
              <p>
                <i class="fa-solid fa-location-dot fa-xl"></i> Viale Europa -
                Via delle Baleari<br />
                Alghero (SS)<br />
                Italy
              </p>
            </div>
            <div class="col-lg-4 col-xs-12 section-footer border-left-right">
              <h5><b>Informazioni:</b></h5>
              <p>
                <i class="fa-solid fa-envelope fa-xl"></i>
                padelalghero@gmail.com
              </p>
              <p><i class="fa-solid fa-phone fa-xl"></i> +39 350 142 1000</p>
            </div>
            <div class="col-lg-3 col-xs-12 section-footer">
              <h5><b>Seguici sui social:</b></h5>

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
  </div>
</template>

<style scoped>
.my-container-footer {
  padding-top: 30px;
  margin: 50px 0 0 0;
  background-color: #080e1be4;

  h5 {
    color: white;
  }
}
a {
  padding-right: 10px;
}

p {
  margin: 10px 0;
  color: white;
}

i {
  text-decoration: none;
  color: #f1e400;
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
</style>
