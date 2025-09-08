<script setup>
  import Layout from './Layout/Layout.vue';
  import { useProductsStore } from './store/product';
  import { onMounted } from 'vue';

  onMounted(() => {
    const productsStore = useProductsStore();
    productsStore.fetchProducts();
  });
</script>

<template>
  <Layout/>
</template>

<style scoped>


</style>
