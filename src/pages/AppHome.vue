<script>
export default {
  name: "AppHome",
  data() {
    return {
      jumbotronImages: [
        "src/assets/eac49fce-761a-4354-8438-9c211bba0c1d.jpeg",
        "src/assets/a446630-b24c-4e8e-b6c6-dc20da6523d3.jpeg",
        "src/assets/fc2b85a3-5a4c-44d0-9ae1-4c8ad5dc4a62.jpeg",
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
          Collocati in una posizione unica ed invidiabile sul lungomare di “Su
          Siccu”, all’ interno dell’Area Porto Turistico di Sant’Elmo di
          Cagliari e, confinante col nuovo e riqualificato parco “Nervi” unico
          esempio di architettura industriale dell’area portuale, sta diventando
          un nuovo riferimento per il tempo libero, per lo sport, per la
          cultura, ma anche punto di partenza per le escursioni alla scoperta,
          attraverso il canale navigabile San Bartolomeo e la pista ciclabile,
          dell’oasi naturalistica di Molentargius, della storia delle saline e
          delle attività industriali e commerciali ad essa connesse. Facilmente
          raggiungibile sia da V.le Cristoforo Colombo che da Viale Armando Diaz
          passando dal quartiere fieristico “Piazza Marco Polo”, si arriva
          facilmente a “Calata della Fiera”, a Sant’Elmo e “parco Nervi”, dove
          c’è, appunto, L’ORANGE MARINA PADEL CLUB” accessibile liberamente a
          tutti. Con tutti i servizi (moderni e confortevoli spogliatoi, Bar,
          Ristorante, ProShop, Terrazza, WiFi, servizio di noleggio bici,
          monopattino e canoe, aree verdi, parco giochi per bambini, Camp Estivo
          per Bambini ecc) Orange Marina Padel Club 10.000mq di aggregazione
          sportiva, sociale, culturale, familiare, commerciale è l´esperienza
          padel più spettacolare: 8 Campi panoramici con illuminazione LED e
          fondo drenante area tecnica ed illuminazione Led superiore a 450 lux
          Campi 1 e 2 sono coperti Prenotazioni online H24 tramite wh al numero
          Via web Via App Orangeclub disponibile a breve per Apple ed Android
          Sistema Playtomic! per la creazione e organizzazione di partite
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
