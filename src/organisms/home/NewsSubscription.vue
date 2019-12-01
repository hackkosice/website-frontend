<template>
  <div id="section-subscription" class="bg-primary shadow">
    <div class="container">
      <PageHeading color="white" :display="6">
        Subscribe to our newsletter
      </PageHeading>
      <SubPageHeading class="text-white">
        Do you want to stay in touch and be among the first to learn news
        and useful information about Hack Kosice 2020? Just enter your e-mail
        below, and we'll take care of the rest:
      </SubPageHeading>
      <form class="subscription-form row" @submit="submitForm">
        <Email
          class="subscription-email col-md-8"
          placeholder="Your E-mail Address"
          :required="true"
          v-model="email"
        />
        <div class="form-group col-md-4">
          <HKButton type="secondary" :submit="true" :block="true" :large="true">
            Subscribe
          </HKButton>
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

import SubscriptionService from "@/scripts/api/SubscriptionService";

import Swal from "sweetalert2";

export default {
  name: "NewsSubscription",

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
        html: '<div id="subscription-recaptcha"></div>',
        showCancelButton: true,
        onOpen: () => {
          grecaptcha.render("subscription-recaptcha", {
            sitekey: process.env.VUE_APP_RECAPTCHA
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
      return SubscriptionService.submit(this.email, recaptcha)
        .then(() => {
          Swal.fire(
            "Success!",
            "You have been successfully subscribed to our newsletter!",
            "success"
          );
          this.email = null;
        })
        .catch(() => {
          Swal.fire(
            "Error!",
            "Sorry, we could not subscribe your e-mail address. Please try it again later.",
            "error"
          );
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
