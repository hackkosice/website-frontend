<template>
  <div class="row">
    <div class="col-12">
      <span class="copyright text-white-50">&copy; {{ year }} Hack Kosice</span>
    </div>
  </div>
</template>

<script>

  export default {
    name: "Copyright",
    computed: {
      year: function () {
        return new Date().getFullYear();
      },
    },
  };

</script>

<style lang="scss" scoped>
  .copyright {
    font-weight: bold;
    text-transform: uppercase;
    line-height: 4rem;
    letter-spacing: 0.05rem;
  }
</style>
