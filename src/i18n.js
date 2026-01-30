// src/i18n.js
import { createI18n } from "vue-i18n";

const messages = {
  en: {
    // Header & Navigation
    contattaci: "Contact us",
    buttonText: "Change Language",
    
    // Pages
    tournaments: "Tournaments",
    tournaments2: "TOURNAMENTS",
    about: "About us",
    about2: "ABOUT US",
    contacts: "Contacts",
    contacts2: "CONTACTS",
    sponsor1: "Sponsors",
    
    // Home Page - Hero
    heroTitle: "Padel Club Alghero",
    heroSubtitle: "Experience the passion of padel on the Coral Riviera",
    buttonPlaytomic: "Book on Playtomic",
    
    // Home Page - News Section
    newsBadge: "🆕 News",
    news: "Latest News",
    pNews: "We are happy to announce that we have installed a cover for one of our courts! This new feature allows us to offer an even more comfortable playing experience in all weather conditions. We look forward to having you try it out!",
    
    // Home Page - About Section
    pHome: "<b>Welcome to Padel Club Alghero:</b> located in a prime position in Alghero, along Viale Europa and Via delle Baleari. <br/><br/> Surrounded by the stunning beauty of the Sardinian coast and overlooking the crystal-clear sea, it features 2 outdoor courts and 1 indoor court equipped with modern facilities for matches and tournaments. <br/><br/> After the game, unwind on the panoramic terrace or at the bar with drinks and snacks. Come and experience the thrill of playing padel in a breathtaking Sardinian setting for an unforgettable blend of sport, fun, and relaxation!",
    
    // Home Page - Price Section
    priceListTitle: "Price List",
    
    // Home Page - Gallery Section
    gallery: "Photo Gallery",
    gallerySubtitle: "The best moments of our club",
    
    // Tournaments Page
    nextTournaments: "Upcoming Tournaments:",
    descriptionTournaments: "",
    olderTournaments: "Previous Tournaments:",
    tournamentsSubtitle: "Relive the emotions of our competitions",
    tournamentsDescription: "A gallery of the most exciting moments",
    tournament1Title: "2° OPEN Riviera del Corallo",
    tournament1Date: "2024 Edition",
    tournament2Title: "1° ALLEANZA ASSICURAZIONI Tournament",
    tournament2Date: "Special Edition",
    tournament3Title: "1° OPEN Riviera del Corallo",
    tournament3Date: "First Edition",
    tournament4Title: "3° Torneo Open Riviera del corallo by Key Estate",
    tournament4Date: "2025 Edition",
    ptorneo: `5 September 2025 Padel: the triumph of the Open Riviera del Corallo in Alghero — a record-breaking edition. <br /> The event, organized by Padel Club Alghero in collaboration with the Autonomous Region of Sardinia and sponsored by “Key Estate,” exceeded all expectations, establishing itself as one of the most followed sporting events of the island’s summer. <br /> The third edition of the Open Riviera del Corallo, Sardinia’s premier padel event, has come to a close with a resounding success. <br />  Organized by Padel Club Alghero and sponsored by “Key Estate,” the tournament surpassed every expectation, confirming its status as one of the most popular sporting events of the Sardinian summer. From August 27 to 31, the Alghero club was transformed into a vibrant arena of passion and competition. <br />  The 2025 edition marked a true record, with over 200 registered athletes, including many international players—clear evidence of the tournament’s growing global appeal. A large and enthusiastic crowd attended, witnessing matches of an exceptionally high technical and competitive level, never before seen in Sardinia. <br />  With a total prize pool of €6,000, the tournament attracted world-class champions, including several players ranked within the top 150 of the international rankings. The nine competition categories allowed padel players of all ages and experience levels to take to the court, fostering an inclusive atmosphere marked by great sportsmanship. <br /> The success is largely due to ASD Ball Don’t Lie, the local association that, through vision and impeccable organization, transformed the event into one of the most important fixtures on the Sardinian sports calendar. Alghero, with its stunning setting, once again proved to be the perfect location, combining sport, tourism, and territorial promotion in a winning formula. <br /> With this record-breaking edition now behind it, the Open Riviera del Corallo is already looking ahead, aiming to consolidate its position and become one of the most prestigious and eagerly awaited tournaments at the national level.`,

    
    // About Page
    aboutSubtitle: "Our story, our passion",
    suDiNoi: "Something more about us:",
    pAbout: "<b>Welcome to our Padel Club</b>, the ultimate destination for sports and fun enthusiasts! Since opening in August 2020, our club has quickly become a go-to spot for padel lovers, thanks to our top-notch facilities and warm, welcoming atmosphere just steps from the sea. <br /><br />With two cutting-edge outdoor courts and one indoor court, we offer a playing experience like no other, surrounded by the stunning beauty of our outdoor setting. But our club is more than just a place to play padel, it's a vibrant community of passionate players who share a love for this exciting sport. Whether you're a beginner or a seasoned pro, our club is the perfect place to sharpen your skills and enjoy yourself.",
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
    
    // About Page - Features
    featuresTitle: "Our Strengths",
    feature1Title: "Modern Structure",
    feature1Text: "Professional courts with latest generation coverage and lighting",
    feature2Title: "Active Community",
    feature2Text: "A community of enthusiasts always ready to welcome new players",
    feature3Title: "Tournaments & Events",
    feature3Text: "We regularly organize tournaments and events for all levels",
    feature4Title: "Flexible Hours",
    feature4Text: "Open 7 days a week with extended hours for maximum convenience",
    feature5Title: "Strategic Location",
    feature5Text: "Located in the heart of Alghero, easily accessible",
    feature6Title: "Competitive Prices",
    feature6Text: "Affordable rates with advantageous memberships for everyone",
    
    // About Page - CTA
    ctaTitle: "Ready to Play with Us?",
    ctaSubtitle: "Join our community and experience the passion of padel",
    ctaButton1: "Contact Us",
    ctaButton2: "Book Online",
    
    // Lessons News
    lessonsNews: "Lessons News:",
    pLessons: "Hello everyone 🎾 We are excited to announce a new way of organizing our padel lessons! Here's how it works: Every week, in our dedicated chat, we post polls to choose the days when the training sessions will take place. For now, we have decided to follow this fixed schedule:",
    first: "<strong>Beginner Training</strong>: at 4:00 PM",
    second: "<strong>Intermediate Training</strong>: at 5:00 PM",
    third: "<strong>Advanced Training</strong>: at 6:00 PM",
    pTraining: "The training sessions will take place every <strong>Tuesday</strong> and <strong>Thursday</strong>. To confirm a session, it is necessary to have at least 3 or 4 participants. This allows us to organize the lessons in the best way possible and ensure maximum fun for everyone!</p><p>Do you want to join? Join the chat by scanning the <strong>QR Code</strong>. See you on the court!",
    
    // Contacts Page
    help: "How can we help you?",
    infoContacts: "Contact us to request information on bookable courts or for private lessons, we will reply as soon as possible!",
    where: "Where we are:",
    address: "Where We Are",
    information: "Contact",
    social: "Follow Us",
    contactsSubtitle: "We are here to answer all your questions",
    phone1Label: "Phone 1",
    phone2Label: "Phone 2",
    playtomicDescription: "Online booking system",
    addressLine1: "Viale Europa - Via delle Baleari",
    addressLine2: "Alghero (SS)",
    visitUsText: "Come visit us!",
    
    // Footer
    footerTagline: "Your passion for padel on the Coral Riviera",
    photosBy: "Photos by",
    madeWith: "Made with",
    by: "by",
    copyright: "© 2024 Padel Club Alghero. All rights reserved.",
    
    // Sponsor Page
    sponsor: "Our Sponsors:",
    sponsorHeroTitle: "SPONSORS",
    sponsorHeroSubtitle: "Our partners who make all this possible.",
    hSponsor: "Main Partners",
    mainPartnerBadge: "Main Partner",
    h2Sponsor: "Become Our Sponsor",
    sponsorDescription: "Write to us and we will contact you to discuss partnership opportunities.",
    nameForm: "Name",
    namePlaceholder: "Your name or company",
    emailPlaceholder: "your@email.com",
    messageForm: "Message",
    messagePlaceholder: "Tell us about your company and your interest...",
    submitButton: "Send Request",
    submitting: "Sending...",
    formSuccess: "Message sent successfully! We will reply as soon as possible.",
    formError: "An error occurred. Please try again later.",
    formErrorEmpty: "Please fill in all fields.",
    formErrorNetwork: "Connection error. Check your network and try again.",
    allSponsorsTitle: "Our Sponsors",
    allSponsorsSubtitle: "Thanks to all the partners who support Padel Club Alghero"
  },
  
  it: {
    // Header & Navigation
    contattaci: "Contattaci",
    buttonText: "Cambia Lingua",
    
    // Pages
    tournaments: "Tornei",
    tournaments2: "TORNEI",
    about: "Chi siamo",
    about2: "CHI SIAMO",
    contacts: "Contatti",
    contacts2: "CONTATTI",
    sponsor1: "Sponsor",
    
    // Home Page - Hero
    heroTitle: "Padel Club Alghero",
    heroSubtitle: "Vivi la passione del padel nella Riviera del Corallo.",
    buttonPlaytomic: "Prenota su Playtomic",
    
    // Home Page - News Section
    newsBadge: "🆕 Novità",
    news: "Ultime Novità",
    pNews: "Siamo felici di annunciare che abbiamo installato una copertura per uno dei nostri campi! Questa novità ci permette di offrire un'esperienza di gioco ancora più confortevole in ogni condizione atmosferica. Vi aspettiamo per provarla!",
    
    // Home Page - About Section
    pHome: "<b>Benvenuti al Padel Club Alghero:</b> situato in una posizione privilegiata ad Alghero, lungo Viale Europa e Via delle Baleari. <br/><br/> Immerso nella bellezza della costa sarda e affacciato sul mare cristallino, offre 2 campi all'aperto e 1 coperto con attrezzature moderne per sfide e tornei. <br/><br/> Dopo il gioco, rilassatevi sulla terrazza panoramica o al bar con bevande e spuntini. Venite a scoprire l'emozione di giocare a padel in un luogo incantevole della Sardegna per un'esperienza indimenticabile di sport, divertimento e relax!",
    
    // Home Page - Price Section
    priceListTitle: "Listino Prezzi",
    
    // Home Page - Gallery Section
    gallery: "Galleria Fotografica",
    gallerySubtitle: "I momenti migliori del nostro club.",
    
    // Tournaments Page
    nextTournaments: "Prossimi Tornei:",
    descriptionTournaments: "",
    olderTournaments: "Tornei Precedenti:",
    tournamentsSubtitle: "Rivivi le emozioni delle nostre competizioni",
    tournamentsDescription: "Una galleria dei momenti più emozionanti",
    tournament1Title: "2° OPEN Riviera del Corallo",
    tournament1Date: "Edizione 2024",
    tournament2Title: "1° Torneo ALLEANZA ASSICURAZIONI",
    tournament2Date: "Edizione Speciale",
    tournament3Title: "1° OPEN Riviera del Corallo",
    tournament3Date: "Prima Edizione",
    tournament4Title: "3° Torneo Open Riviera del corallo by Key Estate",
    tournament4Date: "2025 Edition",
    ptorneo: `5 Settembre 2025 Padel, ad Alghero il trionfo dell’Open Riviera del Corallo: un’edizione da record L’evento, organizzato dal Padel Club Alghero in collaborazione con la Regione Autonoma Sardegna e sponsorizzato da “Key Estate”, ha superato ogni aspettativa, affermandosi come una delle manifestazioni sportive più seguite dell'estate isolana. <br /> Si è conclusa con un bilancio trionfale la terza edizione dell’Open Riviera del Corallo, l’appuntamento di punta del padel in Sardegna. <br /> L’evento, organizzato dal Padel Club Alghero e sponsorizzato da “Key Estate”, ha superato ogni aspettativa, affermandosi come una delle manifestazioni sportive più seguite dell’estate isolana. <br /> Dal 27 al 31 agosto, il circolo algherese si è trasformato in un’arena vibrante di passione e agonismo. L’edizione 2025 ha segnato un vero e proprio record, con oltre 200 atleti iscritti, inclusi numerosi partecipanti stranieri, a conferma della crescente risonanza internazionale del torneo. Il pubblico, accorso numeroso, ha assistito a match di altissimo livello tecnico e agonistico, mai visto prima in Sardegna. Con un montepremi complessivo di 6.000 euro, il torneo ha attirato campioni di caratura mondiale, con alcuni giocatori posizionati nella top 150 del ranking internazionale. <br /> Le nove categorie di gara hanno permesso a padelisti di ogni età ed esperienza di scendere in campo, creando un’atmosfera inclusiva e di grande fair play. Il successo è merito dell’ASD Ball Don’t Lie, l’associazione locale che, con visione e un’organizzazione impeccabile, ha saputo trasformare l’evento in uno degli appuntamenti più importanti del calendario sardo. <br /> Alghero, con la sua cornice suggestiva, si è confermata la location perfetta, unendo sport, turismo e promozione del territorio in una formula vincente. Archiviata l’edizione da record, l’Open Riviera del Corallo punta già a consolidare la sua posizione, con l’obiettivo di diventare uno dei tornei più prestigiosi e attesi a livello nazionale`,
    
    // About Page
    aboutSubtitle: "La nostra storia, la nostra passione",
    suDiNoi: "Qualcosa in più su di noi:",
    pAbout: "<b>Benvenuti al nostro Circolo di Padel</b>, la destinazione perfetta per gli appassionati di sport e divertimento! Aperto nell'agosto del 2020, il nostro circolo è rapidamente diventato un punto di riferimento per gli amanti del padel, grazie alla qualità delle nostre strutture e all'atmosfera accogliente che offriamo a due passi dal mare. <br /><br />Con due campi scoperti all'avanguardia e uno coperto, garantiamo un'esperienza di gioco unica e coinvolgente, immersi nella bellezza del nostro ambiente esterno. Il nostro circolo è più di un semplice luogo dove giocare a padel: è una comunità di persone appassionate che condividono la stessa passione per questo sport entusiasmante. Che tu sia un principiante o un giocatore esperto, troverai il nostro circolo il posto ideale per migliorare le tue abilità e divertirti.",
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
    
    // About Page - Features
    featuresTitle: "I Nostri Punti di Forza",
    feature1Title: "Struttura Moderna",
    feature1Text: "Campi professionali con copertura e illuminazione di ultima generazione",
    feature2Title: "Community Attiva",
    feature2Text: "Una comunità di appassionati sempre pronta ad accogliere nuovi giocatori",
    feature3Title: "Tornei & Eventi",
    feature3Text: "Organizziamo regolarmente tornei ed eventi per tutti i livelli",
    feature4Title: "Orari Flessibili",
    feature4Text: "Aperti 7 giorni su 7 con orari prolungati per massima comodità",
    feature5Title: "Posizione Strategica",
    feature5Text: "Situati nel cuore di Alghero, facilmente raggiungibili",
    feature6Title: "Prezzi Competitivi",
    feature6Text: "Tariffe accessibili con abbonamenti vantaggiosi per tutti",
    
    // About Page - CTA
    ctaTitle: "Pronto a Giocare con Noi?",
    ctaSubtitle: "Unisciti alla nostra community e vivi la passione del padel",
    ctaButton1: "Contattaci",
    ctaButton2: "Prenota Online",
    
    // Lessons News
    lessonsNews: "Novità lezioni:",
    pLessons: "Ciao a tutti 🎾 Siamo felici di annunciare una nuova modalità di organizzazione per le nostre lezioni di padel! Funziona così: Ogni settimana, nella nostra chat dedicata, pubblichiamo dei sondaggi per scegliere i giorni in cui si terranno gli allenamenti. Al momento, abbiamo deciso di seguire questo programma fisso:",
    first: "<strong>Allenamento Principianti</strong>: alle 16:00",
    second: "<strong>Allenamento Intermedi</strong>: alle 17:00",
    third: "<strong>Allenamento Avanzati</strong>: alle 18:00",
    pTraining: "Gli allenamenti si terranno ogni <strong>Martedì</strong> e <strong>Giovedì</strong>. Per confermare un allenamento, è necessario raggiungere almeno 3 o 4 partecipanti. Questo ci permette di organizzare le lezioni in modo ottimale e garantire il massimo divertimento per tutti!</p><p>Vuoi partecipare? Unisciti alla chat scansionando il <strong>QR Code</strong>. Vi aspettiamo sul campo!",
    
    // Contacts Page
    help: "Come possiamo aiutarti?",
    infoContacts: "Contattaci per richiedere informazioni sui campi prenotabili o per delle lezioni private, ti risponderemo nel più breve tempo possibile!",
    where: "Dove siamo:",
    address: "Dove Siamo",
    information: "Contatti",
    social: "Seguici",
    contactsSubtitle: "Siamo qui per rispondere a tutte le tue domande",
    phone1Label: "Telefono 1",
    phone2Label: "Telefono 2",
    playtomicDescription: "Sistema di prenotazione online",
    addressLine1: "Viale Europa - Via delle Baleari",
    addressLine2: "Alghero (SS)",
    visitUsText: "Vieni a trovarci!",
    
    // Footer
    footerTagline: "La tua passione per il padel nella Riviera del Corallo",
    photosBy: "Foto di",
    madeWith: "Realizzato con",
    by: "da",
    copyright: "© 2024 Padel Club Alghero. Tutti i diritti riservati.",
    
    // Sponsor Page
    sponsor: "I nostri Sponsor:",
    sponsorHeroTitle: "SPONSOR",
    sponsorHeroSubtitle: "I nostri partner che rendono possibile tutto questo",
    hSponsor: "Partner Principali",
    mainPartnerBadge: "Partner Principale",
    h2Sponsor: "Diventa Nostro Sponsor",
    sponsorDescription: "Scrivici e ti contatteremo per discutere le opportunità di partnership",
    nameForm: "Nome",
    namePlaceholder: "Il tuo nome o azienda",
    emailPlaceholder: "tua@email.com",
    messageForm: "Messaggio",
    messagePlaceholder: "Raccontaci della tua azienda e del tuo interesse...",
    submitButton: "Invia Richiesta",
    submitting: "Invio in corso...",
    formSuccess: "Messaggio inviato con successo! Ti risponderemo al più presto.",
    formError: "Si è verificato un errore. Riprova più tardi.",
    formErrorEmpty: "Per favore, compila tutti i campi.",
    formErrorNetwork: "Errore di connessione. Controlla la tua rete e riprova.",
    allSponsorsTitle: "I Nostri Sponsor",
    allSponsorsSubtitle: "Grazie a tutti i partner che sostengono il Padel Club Alghero."
  },
};

const i18n = createI18n({
  locale: "it",
  messages,
});

export default i18n;