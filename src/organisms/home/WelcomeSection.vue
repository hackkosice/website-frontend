<template>
  <div class="welcome bg-secondary">
    <div class="container">
      <MainLogo />
      <PageHeading class="" :display="6">March 28th - 29th, 2020</PageHeading>
      <PageHeading color="white" :display="4">24 hours. 250 hackers. 1 spirit.</PageHeading>
    </div>
  </div>
</template>

<script>
import MainLogo from "@/atoms/MainLogo.vue";
import PageHeading from "@/atoms/PageHeading.vue";

export default {
  name: "WelcomeSection",

  components: {
    MainLogo,
    PageHeading
  }
};
</script>
