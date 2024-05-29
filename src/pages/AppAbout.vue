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
        CHI SIAMO
      </div>
    </div>
  </div>
  <div class="my-container-bubble container-fluid">
    <div class="container my-container-about">
      <div data-aos="zoom-out-right">
        <div class="row">
          <div class="col-12"><h2>Qualcosa in più su di noi</h2></div>
        </div>
        <br />
        <div class="row">
          <div class="col-12">
            <p>
              <b>Benvenuti al nostro Circolo di Padel</b>, la destinazione
              perfetta per gli appassionati di sport e divertimento! Aperto
              nell'agosto del 2020, il nostro circolo è rapidamente diventato un
              punto di riferimento per gli amanti del padel, grazie alla qualità
              delle nostre strutture e all'atmosfera accogliente che offriamo a
              due passi dal mare. <br /><br />Con 3 campi scoperti
              all'avanguardia, garantiamo un'esperienza di gioco unica e
              coinvolgente, immersi nella bellezza del nostro ambiente esterno.
              Il nostro circolo è più di un semplice luogo dove giocare a padel:
              è una comunità di persone appassionate che condividono la stessa
              passione per questo sport entusiasmante. Che tu sia un
              principiante o un giocatore esperto, troverai il nostro circolo il
              posto ideale per migliorare le tue abilità e divertirti.
            </p>
          </div>
        </div>
      </div>
      <div data-aos="zoom-out-left">
        <div class="row">
          <div class="col-12">
            <h2>
              <br />
              Perché scegliere il nostro Circolo di Padel?
            </h2>
            <br />
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <span>
              <i class="gg-tennis"></i>
              <b>Strutture di alta qualità:</b> I nostri campi scoperti sono
              mantenuti in condizioni perfette per offrire la migliore
              esperienza di gioco possibile. La superficie di gioco è realizzata
              con materiali di prima scelta per garantire prestazioni ottimali e
              sicurezza.
            </span>
            <br />
            <br />
            <span>
              <i class="gg-tennis"></i>
              <b>Ambiente accogliente e comunità:</b> Siamo orgogliosi della
              nostra comunità amichevole e inclusiva. Il nostro circolo è il
              luogo ideale per fare nuove amicizie, partecipare a tornei locali
              e goderti l'atmosfera rilassata e divertente.
            </span>
            <br />
            <br />
            <span>
              <i class="gg-tennis"></i>
              <b>Insegnamento di qualità:</b> Il nostro maestro di padel,
              Roberto Bassu, è una vera eccellenza nel campo. Con attestati di
              insegnante di padel di primo e secondo livello, Roberto sta
              attualmente studiando per diventare Maestro Nazionale. La sua
              dedizione e passione per il padel si riflettono in ogni lezione,
              aiutando i giocatori di tutte le età e livelli a migliorare le
              proprie abilità.
            </span>
            <br />
            <br />
            <i class="gg-tennis"></i>

            <span>
              <b>Attività e tornei:</b> Offriamo una vasta gamma di attività,
              dalle lezioni private e di gruppo ai tornei competitivi.
              Partecipare ai nostri eventi è un ottimo modo per mettere alla
              prova le tue capacità e divertirti con altri appassionati.
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.jumbotron {
  position: relative;
  background-image: url("/public/fc2b85a3-5a4c-44d0-9ae1-4c8ad5dc4a62.jpeg");
  height: 85vh;
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
    color: #f1e400;
  }
}

@media only screen and (max-width: 991px) {
  .text-center {
    font-size: 3rem;
  }
}
</style>
