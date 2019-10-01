import Vue from "vue";
import Router from "vue-router";

import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import ContactUs from "./pages/ContactUs.vue";
import CookiePolicy from "./pages/policy/CookiePolicy.vue";
import PrivacyPolicy from "./pages/policy/PrivacyPolicy.vue";
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
      path: "/contact-us",
      name: "contact-us",
      component: ContactUs
    },
    {
      path: "/policy/cookie",
      name: "policy.cookie",
      component: CookiePolicy
    },
    {
      path: "/policy/privacy",
      name: "policy.privacy",
      component: PrivacyPolicy
    },
    {
      path: "*",
      name: "404",
      component: NotFound
    }
  ]
});
