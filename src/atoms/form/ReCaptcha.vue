<template>
  <div class="form-group">
    <vue-recaptcha
      class="google-recaptcha"
      :sitekey="reCaptchaKey"
      @verify="update"
      @expired="update(null)"
    />
  </div>
</template>

<script>
import VueRecaptcha from "vue-recaptcha";

export default {
  name: "ReCaptcha",

  components: {
    VueRecaptcha
  },

  computed: {
    reCaptchaKey: function() {
      return process.env.VUE_APP_RECAPTCHA;
    }
  },

  methods: {
    update(payload) {
      this.$emit("input", payload);
    }
  }
};
</script>
