<template>
  <router-link
    :to="route"
    v-slot="{ href, route, navigate, isActive, isExactActive }"
  >
    <a
      class="nav-item nav-link"
      :class="{ active: exact ? isExactActive : isActive }"
      :href="href"
      @click="navigateRoute($event, navigate)"
      >{{ name }}</a
    >
  </router-link>
</template>

<script>
export default {
  name: "NavBarLink",

  props: {
    route: {
      type: [String, Object],
      required: true
    },

    name: {
      type: String,
      required: true
    },

    exact: {
      type: Boolean,
      default: false
    },

    onNavigate: {
      type: Function,
      default: null
    }
  },

  methods: {
    navigateRoute(event, callback) {
      callback(event);
      if (!!this.onNavigate) {
        this.onNavigate();
      }
    }
  }
};
</script>
