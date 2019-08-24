<template>
  <div>
    <div class="container">
      <PageHeading :display="1">404</PageHeading>
      <SubPageHeading>We are sorry, but the page you are looking for does not exist :(</SubPageHeading>
      <div class="text-center mt-5">
        <HKButton link="/" :fontSize="1.25">Go home</HKButton>
      </div>
    </div>
  </div>
</template>

<script>

import PageHeading from "@/atoms/PageHeading.vue";
import SubPageHeading from "@/atoms/SubPageHeading.vue";
import HKButton from "@/atoms/HKButton"

export default {
  name: "NotFound",
  components: {
    PageHeading,
    SubPageHeading,
    HKButton
  }
};

</script>
