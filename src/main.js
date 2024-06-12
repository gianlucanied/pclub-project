import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./router";
import AOS from "aos";
import "aos/dist/aos.css";
import i18n from "./i18n";

// Crea una sola istanza dell'app Vue
const app = createApp(App);
app.use(i18n);
// Usa il router
app.use(router);

// Monta l'app Vue
app.mount("#app");

// Inizializza AOS
AOS.init();
