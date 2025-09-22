<template>
  <input
    @blur="$emit('blur')"
    @input="$emit('input', $event.target.value)"
    :type="type"
    :placeholder="placeholder"
    class="input"
    :class="[variant && `input-${variant}`]"
</template>
<script setup>
  const props = defineProps({
    type: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    variant: {
      type: String,
      required: false,
      default: '',
    },
  });
  const emit = defineEmits(['blur', 'input']);
</script>
<style scoped>
  .input {
    width: 100%;
    padding: 17px 32px;
    min-height: 56px;
    background-color: var(--emailBgColor);
  }

  .input-dark {
    background: rgba(255, 255, 255, 0.15);
    color: #fff;
  }
  .input-dark::placeholder {
    color: #fff;
  }
  .input-black {
    background: #424141;
    color: #ffffff;
  }
</style>
