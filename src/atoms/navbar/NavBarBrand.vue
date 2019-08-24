<template>
  <router-link
    to="/"
    v-slot="{ href, route, navigate, isActive, isExactActive }"
  >
    <a class="navbar-brand" :href="href" @click="navigate">
      <img
        src="@/assets/imgs/logo_large_transparent.png"
        height="40"
        class="d-inline-block align-top"
        alt=""
      />
    </a>
  </router-link>
</template>

<script>
export default {
  name: "NavBarBrand"
};
</script>
