<template>
  <router-link :to="`/products/${product.id}`" :id="[product.title.includes('Sofa') ? 'product1' : '']">
    <div class="product__item-image">
      <img :src="product.thumbnail" :alt="product.alt" />
    </div>
    <div class="product__item-textcontent">
      <h6 class="product__item-title">{{ product.title }}</h6>
      <p class="product__item-price">{{ product.price + '$' }}</p>
    </div>
  </router-link>
</template>
<script setup>
  const props = defineProps({
    product: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    columns: {
      type: Number,
      required: true,
    },
  });
</script>
<style scoped>
  .product__item-title {
    font-family: 'Clash-Display';
    font-weight: 400;
    font-size: 20px;
    color: var(--mainColor);
    line-height: 140%;
    margin-bottom: 8px;
  }

  .product__item-price {
    font-family: 'Satoshi';
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: var(--mainColor);
  }

  .product__item-image {
    width: 300px;
    height: 300px;
  }

  .product__item-image img {
    width: 100%;
    object-fit: cover;
  }

  .product__item-textcontent {
    margin-top: 24px;
  }
</style>
