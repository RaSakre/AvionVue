<template>
    <div class="product__amount">
        <h6 id="amount" class="amount__title">Amount:</h6>
        <div class="amount__stepper">
            <div class="stepper__display">
                <button class="stepper__button stepper__button--minus">-</button>
                <span class="stepper__value">1</span>
                <button class="stepper__button stepper__button--plus">+</button>
            </div>
        </div>
        <Button :text="'Add to cart'" :variant="'dark'" />
    </div>
</template>
<script setup>
import Button from '../Button.vue';
</script>
<style scoped>
@import url(../../styles/product/product-amount.css);
</style>