<template>
  <input
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
</style>
