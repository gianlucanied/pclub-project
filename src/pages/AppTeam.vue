<script>
export default {
  name: "AppTeam",
  data() {
    return {
      serieCTeam: [
        "Emiliano Salvatore",
        "Francesco Ruiu",
        "Alessandro Pesapane",
        "Alessandro Panu",
        "Gennaro Marrazzo",
        "Daniele Pesapane",
        "Vincenzo Di Mauro",
        "Michele Esposito",
        "Luciano Razzuoli",
        "Giuseppe Meloni",
        "Roberto Bassu",
      ],
      serieDTeam: ["nome 1"],
      serieDTeamF: ["nome 1"],
    };
  },
};
</script>

<template>
  <div id="section-team" class="container">
    <h2>Le nostre squadre:</h2>
    <h3>Serie C</h3>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-xs-12">
          <img src="../assets/Serie C.png" alt="Serie C foto" />
        </div>
        <div class="col-lg-6 col-xs-12">
          <ul>
            <li v-for="(player, index) in serieCTeam" :key="index">
              {{ player }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#section-team {
  margin-top: 13%;

  h2 {
    border-bottom: 2px solid #f1e400;
    margin-right: 75%;
  }

  h3 {
    /* font-size: 2rem; */
    text-align: center;
    border-bottom: 2px solid #f1e400;
  }

  img {
    width: 100%;
  }
}

@media only screen and (max-width: 767px) {
  #section-team {
    margin-top: 23vh;

    h2 {
      margin-right: 40%;
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 871px) {
  #section-team {
    margin-top: 18vh;
    h2 {
      margin-right: 60%;
    }
  }
}
</style>
