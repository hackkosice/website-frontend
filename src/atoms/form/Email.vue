<template>
  <div class="form-group">
    <slot />
    <input
      type="email"
      class="form-control"
      :value="value"
      @input="$emit('input', $event.target.value)"
      :placeholder="placeholder"
      :required="required"
    />
  </div>
</template>

<script>
export default {
  name: "Email",

  props: {
    value: {
      default: null
    },

    placeholder: {
      type: String,
      default: null
    },

    required: {
      type: Boolean,
      default: false
    }
  }
};
</script>
