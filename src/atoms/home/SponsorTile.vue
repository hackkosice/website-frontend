<template>
  <div class="sponsor text-center d-flex h-100 justify-content-center">
    <a
      class="d-flex align-items-center"
      :href="sponsor.url"
      :title="sponsor.name"
      target="_blank"
    >
      <img
        class="img-fluid"
        :class="sponsorClass"
        :src="sponsor.logo"
        :alt="sponsor.name"
      />
    </a>
  </div>
</template>

<script>
export default {
  name: "SponsorTile",

  props: {
    config: {
      type: Object,
      required: true
    },

    sponsor: {
      type: Object,
      required: true
    }
  },

  computed: {
    sponsorClass: function() {
      return `sponsor-logo sponsor-logo-${this.config.style}-${this.sponsor.style}`;
    }
  }
};
</script>
