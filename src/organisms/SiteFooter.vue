<template>
  <footer class="bg-secondary text-light">
    <div class="container">
      <div class="row">
        <div class="col-md-4">a</div>
        <div class="col-md-4">b</div>
        <div class="col-md-4">c</div>
      </div>
      <Copyright />
    </div>
  </footer>
</template>

<script>

  import Copyright from "@/molecules/Copyright.vue";

  export default {
    name: 'SiteFooter',
    components: {
      Copyright
    },
  };

</script>
