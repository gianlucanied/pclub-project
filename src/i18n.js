// src/i18n.js
import { createI18n } from "vue-i18n";

const messages = {
  en: {
    contattaci: "Contacts us",
    buttonText: "Change Language",
    buttonPlaytomic: "Book on Playtomic",
    about: "About us",
    about2: "ABOUT US",
    contacts: "Contacts",
    contacts2: "CONTACTS",
    pHome:
      "<b> Welcome to Padel Club Alghero: </b> located in a prime spot in Alghero along Viale Europa and Via delle Baleari. <br/> <br/>Nestled in the beauty of the Sardinian coast and overlooking the crystal-clear sea, it offers three outdoor courts with modern equipment for exciting matches and tournaments. <br/> <br/> After playing, unwind on the panoramic terrace or at the bar with drinks and snacks. Come and discover the thrill of playing padel in a stunning Sardinian location for an unforgettable experience of sport, fun, and relaxation!",
    gallery: "Photo Gallery:",
    address: "Address:",
    information: "Informations:",
    social: "Follow us on Social Media:",
    suDiNoi: "Something more about us: ",
    pAbout:
      "<b>Welcome to our Padel Club</b>, the perfect destination for sports enthusiasts and fun seekers! Opened in August 2020, our club quickly became a landmark for padel lovers, thanks to the quality of our facilities and the welcoming atmosphere we offer just steps from the sea. <br /><br />With 3 state-of-the-art outdoor courts, we ensure a unique and engaging playing experience, surrounded by the beauty of our outdoor setting. Our club is more than just a place to play padel: it is a community of passionate individuals who share the same love for this exciting sport. Whether you are a beginner or an experienced player, you will find our club the ideal place to improve your skills and have fun.",
    why: "Why choose our Padel Club?",
    secondPAbout: `
        <b>High-Quality Facilities:</b> 
        Our outdoor courts are maintained in perfect condition to provide the best possible playing experience. 
        The playing surface is made from top-quality materials to ensure optimal performance and safety. <br /><br /> 

        <span><b>Welcoming Environment and Community:</b> 
        We take pride in our friendly and inclusive community. 
        Our club is the ideal place to make new friends, participate in local tournaments, and enjoy a relaxed and fun atmosphere. </span><br /><br />

        <span><b>Quality Instruction:</b> 
        Our padel coach, Roberto Bassu, is a true expert in the field. 
        With certifications as a first and second-level padel instructor, Roberto is currently studying to become a National Coach. 
        His dedication and passion for padel are reflected in every lesson, helping players of all ages and levels improve their skills. </span> <br /><br /> 

        <span><b>Activities and Tournaments:</b> 
        We offer a wide range of activities, from private and group lessons to competitive tournaments. 
        Participating in our events is a great way to test your skills and have fun with other enthusiasts. </span>
        `,
    sponsor: "Our Sponsors: ",
    help: "How can we help you?",
    infoContacts:
      "Contact us to request information on bookable camps or for private lessons, we will reply as soon as possible!",
    where: "Where we are: ",
  },
  it: {
    contattaci: "Contattaci",
    buttonText: "Cambia Lingua",
    buttonPlaytomic: "Prenota su Playtomic",
    about: "Chi siamo",
    about2: "CHI SIAMO",
    contacts: "Contatti",
    contacts2: "CONTATTI",
    pHome:
      "<b> Benvenuti al Padel Club Alghero: </b> situato in una posizione privilegiata ad Alghero, lungo Viale Europa e Via delle Baleari. <br/><br/> Immerso nella bellezza della costa sarda e affacciato sul mare cristallino, offre tre campi all'aperto con attrezzature moderne per sfide e tornei. <br/><br/> Dopo il gioco, rilassatevi sulla terrazza panoramica o al bar con bevande e spuntini. Venite a scoprire l'emozione di giocare a padel in un luogo incantevole della Sardegna per un'esperienza indimenticabile di sport, divertimento e relax!",
    gallery: "Galleria Fotografica:",
    address: "Indirizzo:",
    information: "Informazioni:",
    social: "Seguici sui Social:",
    suDiNoi: "Qualcosa in più su di noi: ",
    pAbout:
      "<b>Benvenuti al nostro Circolo di Padel</b>, la destinazione perfetta per gli appassionati di sport e divertimento! Aperto nell'agosto del 2020, il nostro circolo è rapidamente diventato un punto di riferimento per gli amanti del padel, grazie alla qualità delle nostre strutture e all'atmosfera accogliente che offriamo a due passi dal mare. <br /><br />Con 3 campi scoperti all'avanguardia, garantiamo un'esperienza di gioco unica e coinvolgente, immersi nella bellezza del nostro ambiente esterno. Il nostro circolo è più di un semplice luogo dove giocare a padel: è una comunità di persone appassionate che condividono la stessa passione per questo sport entusiasmante. Che tu sia un principiante o un giocatore esperto, troverai il nostro circolo il posto ideale per migliorare le tue abilità e divertirti.",
    why: "Perché scegliere il nostro Circolo di Padel?",
    secondPAbout: `
    <b>Strutture di alta qualità:</b> 
      I nostri campi scoperti sono mantenuti in condizioni perfette per offrire la migliore esperienza di gioco possibile. 
      La superficie di gioco è realizzata con materiali di prima scelta per garantire prestazioni ottimali e sicurezza. <br /><br /> 

      <span><b>Ambiente accogliente e comunità:</b> 
      Siamo orgogliosi della nostra comunità amichevole e inclusiva. 
      Il nostro circolo è il luogo ideale per fare nuove amicizie, partecipare a tornei locali e goderti l'atmosfera rilassata e divertente. </span><br /><br />

      <span><b>Insegnamento di qualità:</b> 
      Il nostro maestro di padel, Roberto Bassu, è una vera eccellenza nel campo. 
      Con attestati di insegnante di padel di primo e secondo livello, Roberto sta attualmente studiando per diventare Maestro Nazionale. 
      La sua dedizione e passione per il padel si riflettono in ogni lezione, aiutando i giocatori di tutte le età e livelli a migliorare le proprie abilità. </span> <br /><br /> 

      <span><b>Attività e tornei:</b> 
      Offriamo una vasta gamma di attività, dalle lezioni private e di gruppo ai tornei competitivi. 
      Partecipare ai nostri eventi è un ottimo modo per mettere alla prova le tue capacità e divertirti con altri appassionati. </span>
    `,
    sponsor: "I nostri Sponsor:",
    help: "Come possiamo aiutarti?",
    infoContacts:
      "Contattaci per richiedere informazioni sui campi prenotabili o per delle lezioni private, ti risponderemo nel più breve tempo possibile!",
    where: "Dove siamo: ",
  },
};

const i18n = createI18n({
  locale: "it",
  messages,
});

export default i18n;
