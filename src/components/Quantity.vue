<template>
  <div style="display: flex; gap: 22px;" class="col-lg-4">
    <h6 id="amount" class="amount__title">{{ amount }}</h6>
    <div class="stepper__display">
      <button class="stepper__button" @click="emit('onDecrement')">-</button>
      <span class="stepper__value">{{ quantity }}</span>
      <button class="stepper__button" @click="emit('onIncrement')">+</button>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  amount: {
    type: String,
    required: false,
  }
});

const emit = defineEmits(['onIncrement', 'onDecrement']);

</script>

<style scoped>
.amount__stepper {
  display: flex;
  align-items: center;
  gap: 22px;
  background-color: #f9f9f9;
}

@media (max-width: 575px) {
  .amount__stepper {
    min-height: 80px;
    gap: 0px;
    justify-content: center;
  }
}

.amount__title {
  font-family: "Clash-Display";
  font-size: 16px;
  line-height: 100%;
  color: var(--mainColor);
  align-self: center;
}

@media (max-width: 575px) {
  .amount__title {
    align-self: flex-start;
  }
}

.stepper__button {
  font-family: "Satoshi";
  font-size: 16px;
  line-height: 100%;
  color: var(--mainColor);
}

.stepper__display {
  display: flex;
  align-items: center;
  gap: 33px;
}
</style>
