<template>
  <div class="col-lg-7">
    <div class="cart__item-left">
      <img :src="product.thumbnail" alt="" />
      <div class="cart__item-text">
        <h4 class="cart__item-title">{{ product.title }}</h4>
        <p class="cart__item-description">{{ product.description }}</p>
        <p class="cart__item-price">{{ product.price.toFixed(2) + '$' }}</p>
      </div>
    </div>
  </div>
  <div class="col-lg-4">
    <Quantity
      @onIncrement="increment"
      @onDecrement="decrement"
      :quantity="product.quantity"
      :max="product.minimumOrderQuantity" />
  </div>
  <div style="display: flex" class="col-lg-1">
    <div style="align-items: center; display: flex">
      <p class="cart__item-total-price">{{ product.newPrice.toFixed(2) + '$' }}</p>
    </div>
  </div>
</template>
<script setup>
  import Quantity from '../Quantity.vue';
  import {useBasketStore} from '../../store/basket';
  const basketStore = useBasketStore();
  const props = defineProps({
    product: {
      type: Object,
      required: true,
    },
  });

  const increment = () => {
    if (props.product.quantity >= props.product.minimumOrderQuantity) {
      return;
    } else {
      basketStore.changeProductQuantity(props.product.id, props.product.quantity + 1);
    }
  };
  const decrement = () => {
    if (props.product.quantity <= 1) {
      return;
    } else {
      basketStore.changeProductQuantity(props.product.id, props.product.quantity - 1);
    }
  };
</script>
<style scoped>
  .cart__item-left {
    display: flex;
    gap: 21px;
  }

  .cart__item-text {
    max-width: 179px;
  }

  .cart__item-text > *:not(:last-child) {
    margin-bottom: 8px;
  }

  .cart__item-title {
    font-family: 'Clash-Display';
    font-size: 20px;
    line-height: 140%;
    color: var(--mainColor);
  }

  .cart__item-description {
    font-family: 'Satoshi';
    font-size: 14px;
    line-height: 150%;
    color: var(--mainColor);
  }
</style>
