<template>
  <div class="products">
    <div class="container">
      <div class="row">
        <div v-for="product in productsStore.products" class="col-lg-3">
          <ProductCard :key="product.id" :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {useProductsStore} from '../store/product';
  import ProductCard from '../components/ProductCard.vue';
  const productsStore = useProductsStore();


  watch(productsStore.products, (newVal) => {
    console.log(newVal);
  });
</script>
