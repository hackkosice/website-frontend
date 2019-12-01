<template>
  <div id="app">
    <NavBar />
    <MlhBadge />
    <!--
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
-->
    <router-view id="app-content" class="app-content" />
    <SiteFooter />
  </div>
</template>

<script>
import NavBar from "@/organisms/NavBar.vue";
import SiteFooter from "@/organisms/SiteFooter.vue";
import MlhBadge from "@/atoms/navbar/MlhBadge.vue";

export default {
  components: {
    NavBar,
    SiteFooter,
    MlhBadge
  },

  watch: {
    $route: {
      handler: to => {
        document.title = to.meta.title
          ? `${to.meta.title} | Hack Kosice`
          : "Hack Kosice";
      },
      immediate: true
    }
  }
};
</script>
