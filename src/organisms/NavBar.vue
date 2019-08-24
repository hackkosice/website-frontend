<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-secondary">
    <div class="container">
      <NavBarBrand />

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse show">
        <div class="mr-auto"></div>
        <div class="navbar-nav justify-content-right">
          <NavBarLink
            v-for="(item, index) in menu"
            :name="item.name"
            :route="item.route"
            :exact="item.exact"
            :key="index"
          ></NavBarLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import NavBarBrand from "@/atoms/navbar/NavBarBrand.vue";
import NavBarLink from "@/atoms/navbar/NavBarLink.vue";

export default {
  name: "NavBar",
  components: {
    NavBarBrand,
    NavBarLink
  },
  data: function() {
    return {
      menu: [
        {
          route: "/",
          name: "Home",
          exact: true
        },
        {
          route: "/faq",
          name: "FAQ"
        },
        {
          route: "/about",
          name: "About Us"
        },
        {
          route: "/2019",
          name: "HK 2019"
        },
        {
          route: "/contact-us",
          name: "Contact us"
        }
      ]
    };
  }
};
</script>
