<template>
  <a class="social-button" :href="link" target="_blank">
    <font-awesome-icon :icon="icon" />
  </a>
</template>

<script>
export default {
  name: "FooterSocialButton",
  props: {
    icon: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.social-button {
  display: inline-block;
  width: 34px;
  height: 34px;
  line-height: 34px;
  font-size: 16px;
  text-align: center;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.6);
  margin-right: 15px;
  font-weight: bold;
  transition: 0.3s;
}

.social-button:hover {
  background-color: rgba(255, 255, 255, 0.6);
  color: rgba(94, 33, 55, 0.85);
}
</style>
