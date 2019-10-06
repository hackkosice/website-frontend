<template>
  <h1 :class="headingClass" class="text-center font-weight-bold p-4 page-heading">
    <slot />
  </h1>
</template>

<script>
export default {
  name: "PageHeading",
  props: {
    display: {
      type: Number,
      default: 3
    },

    color: {
      type: String,
      default: "primary"
    }
  },
  computed: {
    headingClass: function() {
      return `text-${this.color} display-${this.display}`;
    }
  }
};
</script>
