<template>
  <router-link
    v-if="!external"
    :to="link"
    v-slot="{ href, route, navigate, isActive, isExactActive }"
  >
    <a class="text-primary" :href="href" @click="navigate" :target="target">{{
      linkTitle
    }}</a>
  </router-link>
  <a v-else class="text-primary" :href="link" :target="target">{{
    linkTitle
  }}</a>
</template>

<script>
export default {
  name: "Link",

  props: {
    link: {
      type: [String, Object],
      required: true
    },

    title: {
      type: String,
      default: null
    },

    external: {
      type: Boolean,
      default: false
    },

    target: {
      type: String,
      default: "_self"
    }
  },

  computed: {
    linkTitle: function() {
      return this.title || this.link;
    }
  }
};
</script>
