<template>
  <button
    v-if="isButton"
    @click="perform"
    :type="buttonType"
    :class="buttonClass"
    :style="buttonStyle"
  >
    <slot />
  </button>
  <a
    v-else
    :href="link"
    @click.prevent="redirect"
    :class="buttonClass"
    :style="buttonStyle"
  >
    <slot />
  </a>
</template>

<script>
export default {
  name: "PrimaryButton",

  props: {
    action: {
      type: Function,
      default: null
    },

    link: {
      type: [String, Object],
      default: null
    },

    external: {
      type: Boolean,
      default: false
    },

    target: {
      type: String,
      default: "_self"
    },

    type: {
      type: String,
      default: "primary"
    },

    submit: {
      type: Boolean,
      default: false
    },

    outlined: {
      type: Boolean,
      default: false
    },

    large: {
      type: Boolean,
      default: false
    },

    block: {
      type: Boolean,
      default: false
    },

    fontSize: {
      type: Number,
      default: 1
    }
  },

  computed: {
    isButton: function() {
      return !!this.action || this.submit;
    },

    buttonClass: function() {
      return [
        "btn",
        "btn-hk",
        this.classType,
        this.block ? "btn-block" : "",
        this.large ? "btn-lg" : ""
      ];
    },

    buttonStyle: function() {
      return {
        "font-size": `${this.fontSize}rem`
      };
    },

    buttonType: function() {
      return this.submit ? "submit" : "button";
    },

    classType: function() {
      const outlined = this.outlined ? "outline-" : "";
      return `btn-${outlined}${this.type}`;
    }
  },

  methods: {
    perform(e) {
      if (this.submit) {
        return;
      }

      e.preventDefault();
      this.action();
    },

    redirect() {
      if (this.external) {
        window.open(this.link, this.target);
      } else {
        this.$router.push(this.link);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  text-transform: uppercase;
  font-weight: bold;
}
</style>
