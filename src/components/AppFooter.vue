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
            src="../assets/db548ce9-9c0d-4174-8d4d-0e5146bffbe0.jpeg"
            alt="logo footer"
          />
          <p>
            <i class="fa-solid fa-location-dot fa-xl"></i> Viale Europa - Via
            delle Baleari, Alghero (SS), Italy
          </p>
          <p>
            <i class="fa-solid fa-envelope fa-xl"></i> padelalghero@gmail.com
          </p>
          <p><i class="fa-solid fa-phone fa-xl"></i> +39 350 142 1000</p>
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
</template>

<style scoped>
.my-container-footer {
  margin: 30px 0;
}
a {
  padding-right: 10px;
}

p {
  margin: 10px 0;
}

img {
  width: 40%;
}
i:hover {
  transform: scale(1.2);
  transition: 0.3s;
}
</style>
