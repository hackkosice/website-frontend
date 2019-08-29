<template>
  <div class="welcome bg-secondary">
    <div class="container">
      <MainLogo />
      <PageHeading :display="6">March 28th - 29th, 2020</PageHeading>
      <PageHeading class="welcome-second-subheading" color="white" :display="4">24 hours. 250 hackers. 1 spirit.</PageHeading>
      <div class="text-center mt-5 pb-5">
        <HKButton link="#section-pre-registration" v-smooth-scroll="{ offset: offset }" :fontSize="1.25" :large="true">Pre-registration</HKButton>
      </div>
    </div>
  </div>
</template>

<script>
import { Constants } from "@/constants";

import MainLogo from "@/atoms/MainLogo.vue";
import PageHeading from "@/atoms/PageHeading.vue";
import HKButton from "@/atoms/HKButton.vue";

export default {
  name: "WelcomeSection",

  components: {
    MainLogo,
    PageHeading,
    HKButton
  },

  computed: {
    offset: function() {
      return -Constants.NAVBAR_HEIGHT;
    }
  }
};
</script>
