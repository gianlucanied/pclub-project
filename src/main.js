import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./router";
import AOS from "aos";
import "aos/dist/aos.css";

// Crea una sola istanza dell'app Vue
const app = createApp(App);

// Usa il router
app.use(router);

// Monta l'app Vue
app.mount("#app");

// Inizializza AOS
AOS.init();
