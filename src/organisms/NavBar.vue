<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-secondary">
    <div class="container">
      <NavBarBrand></NavBarBrand>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse show">
        <div class="mr-auto"></div>
        <div class="navbar-nav justify-content-right">
          <NavBarLink v-for="item in menu" :name="item.name" :route="item.route" :exact="item.exact"></NavBarLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>

  import NavBarBrand from "@/atoms/NavBarBrand.vue";
  import NavBarLink from "@/atoms/NavBarLink.vue";

  export default {
    name: "NavBar",
    components: {
      NavBarBrand,
      NavBarLink,
    },
    data: function () {
      return {
        menu: [
          {
            route: '/',
            name: 'Home',
            exact: true,
          },
          {
            route: '/about',
            name: 'About Us',
          },
        ]
      };
    },
  };

</script>

<style lang="scss" scoped>
  nav.navbar .nav-item.nav-link {
    text-transform: uppercase;
    font-weight: bold;
  }
</style>
