<template>
  <button :style="[`align-self: ${basketStyle}`]" @click="emit('addToCart')" class="button" :class="[variant && `button--${variant}`]">{{ text }}</button>
</template>

<script setup>
  const props = defineProps({
    variant: {
      type: String,
      required: false,
      default: '',
    },
    text: {
      type: String,
      required: true,
      default: 'Button',
    },
    basketStyle: {
      type: String,
      required: false,
    }
  });

  const emit = defineEmits(['addToCart'])
</script>

<style scoped>
  .button {
    padding: 16px 32px;
    font-family: 'Satoshi';
    font-weight: 400;
    background: #f9f9f9;
    font-size: 16px;
    line-height: 150%;
    color: var(--mainColor);
    align-self: start;
    text-wrap: nowrap;
  }
  .button--lightDark {
    background-color: rgba(249, 249, 249, 0.15);
    color: #fff;
  }
  .button--dark {
    background-color: var(--mainColor);
    color: #fff;
  }
  .button--light {
    background-color: #fff;
    color: var(--mainColor);
  }
  .button:disabled {
    background-color: #e0e0e0;
    color: #828282;
  }
</style>
