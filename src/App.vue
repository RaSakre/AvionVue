<script setup>
  import Layout from './Layout/Layout.vue';
  import {useProductsStore} from './store/product';
  import {onMounted} from 'vue';
  import {useAuthStore} from './store/auth';

  onMounted(() => {
    const productsStore = useProductsStore();
    productsStore.fetchProducts();

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = Math.floor(Math.random() * 10);
        if (true) {
          resolve('Успешно');
        } else {
          reject('Ошибка доступа1');
        }
      }, 1000);
    });

    const promise2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (false) {
          resolve('Успешно');
        } else {
          reject('Ошибка доступа2');
        }
      }, 1000);
    });

    Promise.all([promise, promise2]).then((result) => {
        console.log(result);
      }).catch((error) => {
        console.log(error);
      });
  });
</script>

<template>
  <Layout />
</template>

<style scoped></style>
