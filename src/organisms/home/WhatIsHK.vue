<template>
  <div id="what-is-hk-background">
    <div class="container">
      <PageHeading :display="5">What is HK?</PageHeading>
      <SubPageHeading
        >A hackathon is a focused 24-hour event where students come together in
        small teams to share ideas and build something new and exciting,
        alongside a whole bunch of like-minded people. You learn immensely with
        the help of mentors, interact with companies and have
        fun!</SubPageHeading
      >
      <SubPageHeading
        >Hack Kosice 2019 was the first MLH hackathon in Slovakia and it brought
        together creative and inspiring people from over 30 countries. Along
        with great mentors, speakers, fun mini-games and a lot of tasty food, it
        was an unforgettable experience.
      </SubPageHeading>
      <SubPageHeading>Let’s double the fun in 2020!</SubPageHeading>
      <div class="text-center mt-5 pb-5">
        <HKButton link="about" :fontSize="1.25" :large="true"
          >Learn more</HKButton
        >
      </div>
    </div>
  </div>
</template>

<script>
import PageHeading from "@/atoms/PageHeading.vue";
import SubPageHeading from "@/atoms/SubPageHeading.vue";
import HKButton from "@/atoms/HKButton.vue";

export default {
  name: "WhatIsHK",

  components: {
    PageHeading,
    SubPageHeading,
    HKButton
  }
};
</script>

<style lang="scss" scoped>
#what-is-hk-background {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(~@/assets/imgs/what_is_hk_background.jpg);
  background-size: cover;
  background-attachment: fixed;
  color: white;

  .container {
    padding: 2rem 0;
  }
}
</style>
