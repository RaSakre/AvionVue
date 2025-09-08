<template>
  <div
    class="product-card">
    <img class="product-card__img" :src="product.thumbnail" :alt="product.alt" />
    <div class="product-card__item-textcontent">
      <h6 class="product-card__item-title">{{ product.title }}</h6>
      <p class="product-card__item-price">{{ product.price }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.product-card {
    padding: 80px 0px 60px 0px;
}

.product-card__item-title {
    font-family: 'Clash-Display';
    font-weight: 400;
    font-size: 32px;
    line-height: 100%;
    color: var(--mainColor);
}

.product-card__item-textcontent {
    margin-top: 24px;
}

.product-card__item-price {
    font-family: 'Satoshi';
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: var(--mainColor);
}

.ceramics__button-wrapper {
    display: flex;
    justify-content: center;
}

.product-card__img {
    width: 100%;
    object-fit: cover;
}
</style>
