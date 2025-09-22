<script setup>
  import Layout from './Layout/Layout.vue';
  import {useProductsStore} from './store/product';
  import {onMounted} from 'vue';
  import {useAuthStore} from './store/auth';

  onMounted(() => {
    const productsStore = useProductsStore();
    productsStore.fetchProducts();
  });
</script>

<template>
  <Layout />
</template>

<style scoped></style>
