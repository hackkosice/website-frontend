<template>
  <div class="mb-4">
    <h4>Contact</h4>
    <p class="text-white-50">
      <Link :link="`mailto:${mail}`" :title="mail" :external="true" />
      <br />
      We are friendly.
      <br />
      We also speak Slovak.
    </p>
  </div>
</template>

<script>
import Link from "@/atoms/Link.vue";

export default {
  name: "FooterContact",
  components: {
    Link
  },
  data: function() {
    return {
      mail: "contact@hackkosice.com"
    };
  }
};
</script>
