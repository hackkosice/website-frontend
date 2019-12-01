<template>
  <div class="welcome bg-secondary d-flex flex-column justify-content-center align-items-center">
    <div class="container">
      <MainLogo />
      <PageHeading :display="5">March 28th - 29th, 2020</PageHeading>
      <PageHeading class="welcome-second-subheading" color="white" :display="4">
        24 hours. 250 hackers. 1 spirit.
      </PageHeading>
      <div class="text-center mt-5 pb-5">
        <HKButton
          link="https://apply.hackkosice.com/user/signup/"
          :external="true"
          target="_blank"
          :fontSize="1.25"
          :large="true"
          >
          Apply now
        </HKButton>
      </div>
    </div>
  </div>
</template>

<script>
import MainLogo from "@/atoms/MainLogo.vue";
import PageHeading from "@/atoms/PageHeading.vue";
import HKButton from "@/atoms/HKButton.vue";

export default {
  name: "WelcomeSection",

  components: {
    MainLogo,
    PageHeading,
    HKButton
  }
};
</script>
