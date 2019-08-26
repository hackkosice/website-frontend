<template>
  <div class="sponsor d-flex h-100 w-100 justify-content-center text-center">
    <router-link
      class="d-flex w-100 align-items-center text-decoration-none"
      to="/contact-us"
    >
      <span class="sponsor-placeholder w-100">Your company</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "SponsorPlaceholder",

  props: {
    config: {
      type: Object,
      required: true
    }
  }
};
</script>
