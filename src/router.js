import Vue from "vue";
import Router from "vue-router";

import Home from "./pages/Home.vue";
import Faq from "./pages/Faq.vue";
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
      component: Home,
      meta: {
        title: "Home"
      }
    },
    {
      path: "/faq",
      name: "faq",
      component: Faq,
      meta: {
        title: "FAQ"
      }
    },
    {
      path: "/about",
      name: "about",
      component: About,
      meta: {
        title: "About"
      }
    },
    {
      path: "/contact-us",
      name: "contact-us",
      component: ContactUs,
      meta: {
        title: "Contact Us"
      }
    },
    {
      path: "/policy/cookie",
      name: "policy.cookie",
      component: CookiePolicy,
      meta: {
        title: "Cookie Policy"
      }
    },
    {
      path: "/policy/privacy",
      name: "policy.privacy",
      component: PrivacyPolicy,
      meta: {
        title: "Privacy Policy"
      }
    },
    {
      path: "*",
      name: "404",
      component: NotFound,
      meta: {
        title: "404 - Not found"
      }
    }
  ]
});
