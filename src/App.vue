<template>
  <div id="app">
    <NavBar />
    <!--
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
-->
    <div class="app-content">
      <router-view class="container" />
    </div>
    <SiteFooter />
  </div>

</template>

<script>

  import NavBar from "@/organisms/NavBar.vue";
  import SiteFooter from "@/organisms/SiteFooter.vue";

  export default {
    components: {
      NavBar,
      SiteFooter,
    }
  };

</script>

