<template>
  <section class="cart">
    <div class="cart__container">
      <h1 class="cart__title">Your shopping cart</h1>
      <div class="cart__names">
        <div class="row">
          <h6 class="cart__name col-lg-7">Product</h6>
          <h6 class="cart__name col-lg-4">Quantity</h6>
          <h6 class="cart__name col-lg-1">Total</h6>
        </div>
      </div>
      <div class="cart__items">
        <div class="row row-gap-4">
          <BasketItem v-for="product in basketStore.basket" :key="product.id" :product="product" />
        </div>
      </div>
      <div class="cart__total">
        <div class="subtotal">
          <div class="subtotal-up">
            <h6 class="subtotal__title">Subtotal</h6>
            <p class="subtotal__price">{{ basketStore.totalPrice.toFixed(2) + '$' }}</p>
          </div>
          <p class="taxes">Taxes and shipping are calculated at checkout</p>
        </div>
        <router-link to="/payment">
          <Button :disabled="basketStore.basket.length === 0" :basketStyle="'end'" :variant="'dark'"
            :text="'Go to checkout'" />
        </router-link>
      </div>
    </div>
  </section>
</template>
<script setup>
import BasketItem from '../components/BasketItems/BasketItem.vue';
import Button from '../components/UI/Button.vue';
import { useBasketStore } from '../store/basket';
const basketStore = useBasketStore();
</script>
<style scoped>
.cart {
  padding: 64px 0px 48px 0px;
  background: #f9f9f9;
}

.cart__container {
  max-width: 1094px;
  padding: 0px 15px;
  margin: 0 auto;
}

.cart__title {
  font-family: 'Clash-Display';
  color: var(--mainColor);
  font-size: 36px;
  line-height: 140%;
  margin-bottom: 48px;
}

.cart__names {
  position: relative;
  margin-bottom: 32px;
}

.cart__name::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  border: 1px solid #ebe8f4;
  bottom: -12px;
  left: 0;
}

.cart__name {
  font-family: 'Clash-Display';
  color: var(--mainColor);
  font-size: 14px;
  line-height: 140%;
}

.cart__items {
  position: relative;
  gap: 20px;
  margin-bottom: 60px;
}

.cart__items::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  border: 1px solid #ebe8f4;
  bottom: -32px;
}

.cart__total {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.subtotal {
  margin-bottom: 16px;
}

.subtotal-up {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  margin-bottom: 12px;
}

.subtotal__title {
  font-family: 'Clash-Display';
  font-size: 20px;
  color: #4e4d93;
  line-height: 140%;
}

.subtotal__price {
  font-family: 'Clash-Display';
  font-size: 24px;
  color: var(--mainColor);
  line-height: 140%;
}

.taxes {
  font-family: 'Satoshi';
  color: #4e4d93;
  font-size: 14px;
  line-height: 150%;
}
</style>
