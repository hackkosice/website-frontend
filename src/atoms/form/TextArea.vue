<template>
  <div class="form-group">
    <label v-if="label" class="font-weight-bold">{{ label }}</label>
    <slot />
    <textarea
      class="form-control"
      @input="$emit('input', $event.target.value)"
      :placeholder="placeholder"
      :required="required"
      :rows="rows"
      :value.prop="value"></textarea>
  </div>
</template>

<script>
export default {
  name: "TextArea",

  props: {
    value: {
      default: null
    },

    label: {
      type: String,
      default: null
    },

    rows: {
      type: Number,
      default: 5
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
