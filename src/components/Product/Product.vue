<template>
  <section class="product">
    <div class="container">
      <div class="product__wrapper">
        <div class="product__image">
          <img src="../../assets/product/productleft.png" alt="" />
        </div>
        <div class="product__content">
          <ProductDescription />
          <ProductDimensions />
          <ProductAmount />
          <Quantity :quantity="quantity" @onIncrement="increment" @onDecrement="decrement" />
          <p class="product__total-price">Total price: {{ totalPrice }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
  import ProductDescription from './ProductDescription.vue';
  import ProductDimensions from './ProductDimensions.vue';
  import ProductAmount from './ProductAmount.vue';
  import Quantity from '../Quantity.vue';
  import {ref, computed} from 'vue';

  const quantity = ref(1);
  const price = ref(125);

  const increment = () => {
    quantity.value++;
  };

  const decrement = () => {
    quantity.value--;
  };

  const totalPrice = computed(() => {
    return quantity.value * price.value;
  });
</script>
<style scoped>
  @import url(../../styles/product/product.css);
</style>
