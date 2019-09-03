import Vue from "vue";
import axios from "axios";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import vueSmoothScroll from "vue2-smooth-scroll";

import "./assets/scss/styles.scss";

library.add(fas, fab, far);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(vueSmoothScroll);

Vue.config.productionTip = process.env.VUE_APP_DEBUG;

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
