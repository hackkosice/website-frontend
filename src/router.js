import Vue from "vue";
import Router from "vue-router";

import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import CookiePolicy from "./pages/policy/CookiePolicy.vue";
import NotFound from "./pages/NotFound.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/policy/cookie",
      name: "policy.cookie",
      component: CookiePolicy
    },
    {
      path: "*",
      name: "404",
      component: NotFound
    }
  ]
});
