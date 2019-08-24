<template>
  <footer class="bg-secondary text-light">
    <div class="container">
      <div class="footer-content row">
        <div class="col-md-4">
          <FooterSocial />
        </div>
        <div class="col-md-4">
          <FooterContact />
        </div>
        <div class="col-md-4">
          <FooterPolicies />
        </div>
      </div>
      <FooterCopyright />
    </div>
  </footer>
</template>

<script>

  import FooterSocial from "@/molecules/FooterSocial.vue";
  import FooterContact from "@/molecules/FooterContact.vue";
  import FooterCopyright from "@/molecules/FooterCopyright.vue";
  import FooterPolicies from "@/molecules/FooterPolicies.vue";

  export default {
    name: 'SiteFooter',
    components: {
      FooterSocial,
      FooterContact,
      FooterCopyright,
      FooterPolicies,
    },
  };

</script>
