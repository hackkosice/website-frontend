<template>
  <router-link
    :to="route"
    v-slot="{ href, route, navigate, isActive, isExactActive }"
  >
    <a
      class="nav-item nav-link"
      :class="{ active: exact ? isExactActive : isActive }"
      :href="href"
      @click="navigate"
      >{{ name }}</a
    >
  </router-link>
</template>

<script>
export default {
  name: "NavBarLink",
  // TODO: validation rules
  props: ["route", "name", "exact"]
};
</script>
