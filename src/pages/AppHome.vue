<script>
export default {
  name: "AppHome",
  data() {
    return {
      jumbotronImages: [
        "src/assets/eac49fce-761a-4354-8438-9c211bba0c1d.jpeg",
        "src/assets/fc2b85a3-5a4c-44d0-9ae1-4c8ad5dc4a62.jpeg",
        "src/assets/a446630-b24c-4e8e-b6c6-dc20da6523d3.jpeg",
        "src/assets/90a4c679-75f3-42e5-b0f1-cbdc17ad427a.jpeg",
      ],
      currentImageIndex: 0,
    };
  },
  mounted() {
    setInterval(() => {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.jumbotronImages.length;
    }, 4000);
  },
};
</script>

<template>
  <div class="container-fluid jumbotron">
    <img :src="jumbotronImages[currentImageIndex]" alt="jumbotron image" />
  </div>

  <div class="container">
    <div class="row">
      <h2 class="text-center">Il Club</h2>
      <div class="col-lg-6">
        <p>
          <b>Benvenuti al Padel Alghero:</b> il luogo perfetto per divertirsi e
          giocare a padel! Situato in una posizione privilegiata ad Alghero,
          lungo il suggestivo Viale Europa e Via delle Baleari, il Padel Alghero
          offre un'esperienza unica nel mondo del padel. <br /><br />
          Immerso nella bellezza della costa sarda e affacciato sul mare
          cristallino, il nostro centro padel è il luogo ideale per gli amanti
          dello sport e del relax. Con una vista mozzafiato sulle acque blu e
          una brezza marina rinfrescante, ogni partita diventa un'esperienza
          indimenticabile. <br /><br />
          Presso il Padel Alghero troverete tre campi all'aperto, perfetti per
          sfidare gli amici o partecipare a tornei emozionanti. I nostri campi,
          ben tenuti e dotati delle più moderne attrezzature, vi offriranno
          un'esperienza di gioco senza pari. <br /><br />Dopo una partita
          intensa, potrete rilassarvi e godervi un drink sulla nostra
          incantevole terrazza panoramica. Confortevole e accogliente, la nostra
          terrazza vi permetterà di rigenerare le energie ammirando il tramonto
          sul mare. <br /><br />E se avete fame o sete, il nostro bar sarà
          sempre pronto ad accogliervi con bevande rinfrescanti e deliziosi
          spuntini. Con un'ampia selezione di cocktail, birre artigianali e
          stuzzichini, il nostro bar è il luogo perfetto per socializzare e
          rilassarsi dopo una partita. Venite a trovarci al Padel Alghero e
          scoprite l'emozione di giocare a padel in uno dei luoghi più belli
          della Sardegna. <br /><br />Vi aspettiamo per un'esperienza
          indimenticabile di sport, divertimento e relax!
        </p>
      </div>
      <div class="col-lg-6">
        <img src="..\assets\44dea813-c467-45cf-a491-6b45f7ad7c5a.jpeg" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.jumbotron {
  padding: 0;
  height: 1000px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 1000px;
    width: 100%;
    object-fit: cover;
  }
}

h2 {
  margin: 30px 0;
}
.col-lg-6 {
  img {
    width: 100%;
    height: auto;
  }
}
</style>
