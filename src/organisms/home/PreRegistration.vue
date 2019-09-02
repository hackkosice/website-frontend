<template>
  <div id="section-pre-registration" class="bg-primary shadow">
    <div class="container">
      <PageHeading color="white" :display="6">Pre-registration for Hack Kosice 2020</PageHeading>
      <SubPageHeading class="text-white">
        Are you as excited as we are? Pre-registration for Hack Kosice 2020 has already begun! If you are in for this ride, just enter your e-mail below, and we’ll take care of the rest:
      </SubPageHeading>
      <form class="pre-registration-form row" @submit="submitForm">
        <Email class="pre-registration-email col-md-8" placeholder="Your E-mail Address" :required="true" v-model="email" />
        <div class="form-group col-md-4">
          <HKButton type="secondary" :submit="true" :block="true" :large="true">Pre-register</HKButton>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import PageHeading from "@/atoms/PageHeading.vue";
import SubPageHeading from "@/atoms/SubPageHeading.vue";
import Email from "@/atoms/form/Email.vue";
import HKButton from "@/atoms/HKButton.vue";

import PreRegistrationService from "@/scripts/api/PreRegistrationService";

import Swal from "sweetalert2";

export default {
  name: "PreRegistration",

  components: {
    PageHeading,
    SubPageHeading,
    Email,
    HKButton
  },

  data: function() {
    return {
      email: null
    };
  },

  methods: {
    submitForm: function(e) {
      e.preventDefault();

      Swal.fire({
        title: "Verify that you are not a robot",
        html: '<div id="pre-registration-recaptcha"></div>',
        showCancelButton: true,
        onOpen: () => {
          grecaptcha.render("pre-registration-recaptcha", {
            "sitekey": process.env.VUE_APP_RECAPTCHA
          });
        },
        preConfirm: () => {
          const response = grecaptcha.getResponse();
          if (response.length === 0) {
            Swal.showValidationMessage("Please verify that you're not a robot");
          } else {
            this.registerSubscriber(response);
            return false;
          }
        },
        allowOutsideClick: () => !Swal.isLoading()
      });
    },

    registerSubscriber(recaptcha) {
      return PreRegistrationService.submit(this.email, recaptcha)
        .then(result => {
          Swal.fire("Success!", "You have been successfully pre-registered for Hack Kosice 2020!", "success");
          this.email = null;
        })
        .catch(error => {
          Swal.fire("Error!", "Sorry, we could not pre-register your e-mail address. Please try it again later.", "error");
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
</style>
