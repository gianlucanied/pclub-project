// src/i18n.js
import { createI18n } from "vue-i18n";

const messages = {
  en: {
    tournaments: "Tournaments",
    tournaments2: "TOURNAMENTS",
    nextTournaments: "Upcoming tournaments:",
    descriptionTournaments: "",
    olderTournaments: "Previous tournaments:",
    contattaci: "Contacts us",
    buttonText: "Change Language",
    buttonPlaytomic: "Book on Playtomic",
    about: "About us",
    about2: "ABOUT US",
    contacts: "Contacts",
    contacts2: "CONTACTS",
    news: "News:",
    pNews: "We are happy to announce that we have installed a cover for one of our courts! This new feature allows us to offer an even more comfortable playing experience in all weather conditions. We look forward to having you try it out!",
    lessonsNews: "Lessons News:",
    pLessons: "Hello everyone 🎾 We are excited to announce a new way of organizing our padel lessons! Here’s how it works: Every week, in our dedicated chat, we post polls to choose the days when the training sessions will take place. For now, we have decided to follow this fixed schedule:",
    first: "<strong>Beginner Training</strong>: at 4:00 PM",
    second: "<strong>Intermediate Training</strong>: at 5:00 PM",
    third: "<strong>Advanced Training</strong>: at 6:00 PM",
    pTraining: "The training sessions will take place every <strong>Tuesday</strong> and <strong>Thursday</strong>. To confirm a session, it is necessary to have at least 3 or 4 participants. This allows us to organize the lessons in the best way possible and ensure maximum fun for everyone!</p><p>Do you want to join? Join the chat by scanning the <strong>QR Code</strong>. See you on the court!",
    pHome:
      "<b>Welcome to Padel Club Alghero:</b> located in a prime position in Alghero, along Viale Europa and Via delle Baleari. <br/><br/> Surrounded by the stunning beauty of the Sardinian coast and overlooking the crystal-clear sea, it features 2 outdoor courts and 1 indoor court equipped with modern facilities for matches and tournaments. <br/><br/> After the game, unwind on the panoramic terrace or at the bar with drinks and snacks. Come and experience the thrill of playing padel in a breathtaking Sardinian setting for an unforgettable blend of sport, fun, and relaxation!",
    gallery: "Photo Gallery:",
    address: "Address:",
    information: "Informations:",
    social: "Follow us on Social Media:",
    suDiNoi: "Something more about us: ",
    pAbout:
      "<b>Welcome to our Padel Club</b>, the ultimate destination for sports and fun enthusiasts! Since opening in August 2020, our club has quickly become a go-to spot for padel lovers, thanks to our top-notch facilities and warm, welcoming atmosphere just steps from the sea. <br /><br />With two cutting-edge outdoor courts and one indoor court, we offer a playing experience like no other, surrounded by the stunning beauty of our outdoor setting. But our club is more than just a place to play padel, it’s a vibrant community of passionate players who share a love for this exciting sport. Whether you’re a beginner or a seasoned pro, our club is the perfect place to sharpen your skills and enjoy yourself.",
    why: "Why choose our Padel Club?",
    secondPAbout: `
        <b>High-Quality Facilities:</b> 
        Our outdoor courts are maintained in perfect condition to provide the best possible playing experience. 
        The playing surface is made from top-quality materials to ensure optimal performance and safety. <br /><br /> 

        <span><b>Welcoming Environment and Community:</b> 
        We take pride in our friendly and inclusive community. 
        Our club is the ideal place to make new friends, participate in local tournaments, and enjoy a relaxed and fun atmosphere. </span><br /><br />

        <span><b>Quality Instruction:</b> 
Our padel coaches, Roberto Bassu, National Coach, and Luca Caminiti, Second-Level Instructor, are true experts in the field. Their dedication and passion for padel shine through in every lesson, helping players of all ages and skill levels improve their abilities. </span> <br /><br /> 

        <span><b>Activities and Tournaments:</b> 
        We offer a wide range of activities, from private and group lessons to competitive tournaments. 
        Participating in our events is a great way to test your skills and have fun with other enthusiasts. </span>
        `,
    sponsor: "Our Sponsors: ",
    help: "How can we help you?",
    infoContacts:
      "Contact us to request information on bookable camps or for private lessons, we will reply as soon as possible!",
    where: "Where we are: ",
    sponsor1: "Become our Sponsor",
    hSponsor: "Do you want to become a new Sponsor?",
    h2Sponsor: "Contact us for more information",
    nameForm: "Name",
    messageForm: "Message"
  },
  it: {
    tournaments: "Tornei",
    tournaments2: "TORNEI",
    nextTournaments: "Prossimi Tornei:",
    descriptionTournaments: "",
    olderTournaments: "Tornei precedenti:",
    contattaci: "Contattaci",
    buttonText: "Cambia Lingua",
    buttonPlaytomic: "Prenota su Playtomic",
    about: "Chi siamo",
    about2: "CHI SIAMO",
    contacts: "Contatti",
    contacts2: "CONTATTI",
    pHome:
      "<b> Benvenuti al Padel Club Alghero: </b> situato in una posizione privilegiata ad Alghero, lungo Viale Europa e Via delle Baleari. <br/><br/> Immerso nella bellezza della costa sarda e affacciato sul mare cristallino, offre 2 campi all'aperto e 1 coperto con attrezzature moderne per sfide e tornei. <br/><br/> Dopo il gioco, rilassatevi sulla terrazza panoramica o al bar con bevande e spuntini. Venite a scoprire l'emozione di giocare a padel in un luogo incantevole della Sardegna per un'esperienza indimenticabile di sport, divertimento e relax!",
    gallery: "Galleria Fotografica:",
    address: "Indirizzo:",
    information: "Informazioni:",
    social: "Seguici sui Social:",
    suDiNoi: "Qualcosa in più su di noi: ",

    news: "Novità:",
    pNews: "Siamo felici di annunciare che abbiamo installato una copertura per uno dei nostri campi! Questa novità ci permette di offrire un’esperienza di gioco ancora più confortevole in ogni condizione atmosferica. Vi aspettiamo per provarla!",
    lessonsNews: "Novità lezioni:",
    pLessons: "Ciao a tutti 🎾 Siamo felici di annunciare una nuova modalità di organizzazione per le nostre lezioni di padel! Funziona così: Ogni settimana, nella nostra chat dedicata, pubblichiamo dei sondaggi per scegliere i giorni in cui si terranno gli allenamenti. Al momento, abbiamo deciso di seguire questo programma fisso:",
    first: "<strong>Allenamento Principianti</strong>: alle 16:00",
    second: "<strong>Allenamento Intermedi</strong>: alle 17:00",
    third: "<strong>Allenamento Avanzati</strong>: alle 18:00",
    pTraining: "Gli allenamenti si terranno ogni <strong>Martedì</strong> e <strong>Giovedì</strong>. Per confermare un allenamento, è necessario raggiungere almeno 3 o 4 partecipanti. Questo ci permette di organizzare le lezioni in modo ottimale e garantire il massimo divertimento per tutti!</p><p>Vuoi partecipare? Unisciti alla chat scansionando il <strong>QR Code</strong>. Vi aspettiamo sul campo!",


    pAbout:
      "<b>Benvenuti al nostro Circolo di Padel</b>, la destinazione perfetta per gli appassionati di sport e divertimento! Aperto nell'agosto del 2020, il nostro circolo è rapidamente diventato un punto di riferimento per gli amanti del padel, grazie alla qualità delle nostre strutture e all'atmosfera accogliente che offriamo a due passi dal mare. <br /><br />Con due campi scoperti all'avanguardia e uno coperto, garantiamo un'esperienza di gioco unica e coinvolgente, immersi nella bellezza del nostro ambiente esterno. Il nostro circolo è più di un semplice luogo dove giocare a padel: è una comunità di persone appassionate che condividono la stessa passione per questo sport entusiasmante. Che tu sia un principiante o un giocatore esperto, troverai il nostro circolo il posto ideale per migliorare le tue abilità e divertirti.",
    why: "Perché scegliere il nostro Circolo di Padel?",
    secondPAbout: `
    <b>Strutture di alta qualità:</b> 
      I nostri campi sono mantenuti in condizioni perfette per offrire la migliore esperienza di gioco possibile. 
      La superficie di gioco è realizzata con materiali di prima scelta per garantire prestazioni ottimali e sicurezza. <br /><br /> 

      <span><b>Ambiente accogliente e comunità:</b> 
      Siamo orgogliosi della nostra comunità amichevole e inclusiva. 
      Il nostro circolo è il luogo ideale per fare nuove amicizie, partecipare a tornei locali e goderti l'atmosfera rilassata e divertente. </span><br /><br />

      <span><b>Insegnamento di qualità:</b> 
      I nostri maestri di padel, Roberto Bassu, Maestro Nazionale e Luca Caminiti, Istruttore di Secondo Livello sono una vera eccellenza nel campo. 
      La loro dedizione e passione per il padel si riflettono in ogni lezione, aiutando i giocatori di tutte le età e livelli a migliorare le proprie abilità. </span> <br /><br /> 

      <span><b>Attività e tornei:</b> 
      Offriamo una vasta gamma di attività, dalle lezioni private e di gruppo ai tornei competitivi. 
      Partecipare ai nostri eventi è un ottimo modo per mettere alla prova le tue capacità e divertirti con altri appassionati. </span>
    `,
    sponsor: "I nostri Sponsor:",
    help: "Come possiamo aiutarti?",
    infoContacts:
      "Contattaci per richiedere informazioni sui campi prenotabili o per delle lezioni private, ti risponderemo nel più breve tempo possibile!",
    where: "Dove siamo: ",
    sponsor1: "Diventa nostro Sponsor",
    hSponsor: "Vuoi diventare un nuovo Sponsor?",
    h2Sponsor: "Contattaci per avere informazioni",
    nameForm: "Nome",
    messageForm: "Messaggio"

  },
};

const i18n = createI18n({
  locale: "it",
  messages,
});

export default i18n;
