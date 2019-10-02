<template>
  <div class="container pb-5">
    <PageHeading :display="4">Contact us</PageHeading>
    <SubPageHeading>Got any questions? Want to become sponsor or mentor? Need help with anything? Just let us know!</SubPageHeading>

    <div class="row d-flex h-100">
      <div class="col-sm-6">
        <form @submit="submitForm">
          <Email label="E-mail" placeholder="Your E-mail Address" :required="true" v-model="email" />
          <TextArea label="Message" placeholder="Type your message here..." :required="true" v-model="message" />
          <ReCaptcha v-model="recaptcha" class="text-center recaptcha" />
          <div class="form-group">
            <HKButton :submit="true" :block="true" :large="true">Send message</HKButton>
          </div>
        </form>
      </div>
      <div class="col-sm-6 d-flex justify-content-center align-items-center">
        <div class="contact-direct text-center font-italic">
          <font-awesome-icon :icon="['far', 'envelope']" />
          <br>
          <span>
            Or reach out to us via email
            <br>
            at <Link link="mailto:contact@hackkosice.com" title="contact@hackkosice.com" :external="true" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeading from "@/atoms/PageHeading.vue";
import SubPageHeading from "@/atoms/SubPageHeading.vue";
import Email from "@/atoms/form/Email.vue";
import TextArea from "@/atoms/form/TextArea.vue";
import ReCaptcha from "@/atoms/form/ReCaptcha.vue";
import HKButton from "@/atoms/HKButton.vue";
import Link from "@/atoms/Link.vue";

import ContactFormService from "@/scripts/api/ContactFormService";

import Swal from "sweetalert2";

export default {
  name: "ContactUs",

  components: {
    PageHeading,
    SubPageHeading,
    TextArea,
    Email,
    ReCaptcha,
    HKButton,
    Link
  },

  data: function () {
    return {
      email: null,
      message: null,
      recaptcha: null,
    };
  },

  methods: {
    submitForm: function(e) {
      e.preventDefault();

      if (!this.recaptcha) {
        Swal.fire(
          "Error!",
          "Please verify that you are not a robot!",
          "error"
        );
      } else if (this.message.length < 20 || this.message.length > 4000) {
        Swal.fire(
          "Error!",
          "Message must be at least 20 and at most 4000 characters!",
          "error"
        );
      } else {
        ContactFormService.submit(this.email, this.message, this.recaptcha)
          .then(() => {
            Swal.fire(
              "Success!",
              "Your message has been successfully send. Thank you for contacting us!",
              "success"
            );
            this.email = null;
            this.message = null;
          })
          .catch(() => {
            Swal.fire(
              "Error!",
              "Sorry, but we could not send your message. Please try it again later.",
              "error"
            );
          });
      }
    }
  }
};
</script>

<style lang="scss">
  .recaptcha .google-recaptcha {
    display: inline-block;
  }

  .contact-direct {
    font-size: 2rem;
  }
</style>
