<template>
  <div>
    <img
      src="@/assets/imgs/logo_box_small_transparent.png"
      class="d-inline-block align-top img-fluid pl-5 pr-5"
      alt=""
    />
    <div class="d-flex justify-content-center mt-4">
      <FooterSocialButton
        v-for="(social, index) in socials"
        :icon="social.icon"
        :link="social.link"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import FooterSocialButton from "@/atoms/footer/FooterSocialButton";

export default {
  name: "FooterSocial",
  components: {
    FooterSocialButton
  },
  data: function() {
    return {
      socials: [
        {
          icon: ["fab", "facebook-f"],
          link: "https://www.facebook.com/hackkosice"
        },
        {
          icon: ["fab", "instagram"],
          link: "http://instagram.com/hackkosice/"
        },
        {
          icon: ["fab", "twitter"],
          link: "https://twitter.com/hackkosice"
        },
        {
          icon: ["fab", "youtube"],
          link: "https://www.youtube.com/channel/UC_0bkXkhmGAdhp7HysrXeqQ"
        }
      ]
    };
  }
};
</script>
