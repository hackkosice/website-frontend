<template>
  <h1 :class="displayClass" class="text-primary text-center font-weight-bold p-4"><slot /></h1>
</template>

<script>

export default {
  name: "PageHeading",
  props: {
    "display": {
      type: Number,
      default: 3
    }
  },
  computed: {
    displayClass: function () {
      return `display-${this.display}`;
    }
  }
};

</script>
