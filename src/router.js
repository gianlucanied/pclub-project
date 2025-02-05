import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import AppAbout from "./pages/AppAbout.vue";
import AppContacts from "./pages/AppContacts.vue";
import AppTournament from "./pages/AppTournament.vue";
import AppSponsor from "./pages/AppSponsor.vue";

import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/about",
      name: "about",
      component: AppAbout,
    },
    {
      path: "/contacts",
      name: "contacts",
      component: AppContacts,
    },
    {
      path: "/tournaments",
      name: "tournaments",
      component: AppTournament,
    },
    {
      path: "/sponsor",
      name: "sponsor",
      component: AppSponsor,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

export { router };
