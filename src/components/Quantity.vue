<template>
  <div class="stepper__display">
    <button class="stepper__button" @click="emit('onDecrement')">-</button>
    <span class="stepper__value">{{ quantity }}</span>
    <button class="stepper__button" @click="emit('onIncrement')">+</button>
  </div>
</template>
<script setup>
const props = defineProps({
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
});

const emit = defineEmits(['onIncrement', 'onDecrement']);

// const increment = () => {
//   emit('update:quantity', props.quantity + 1);
// }

// const decrement = () => {
//   emit('update:quantity', props.quantity - 1);
// }
</script>

<style>
  .stepper__button {
    font-family: 'Satoshi';
    font-size: 16px;
    line-height: 100%;
    color: var(--mainColor);
    padding: 12px 16px;
  }

  .stepper__display {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    width: fit-content;
    width: 100%;
    max-width: 120px;
    background-color: #f9f9f9;
  }
</style>
