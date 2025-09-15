<template>
    <Product />
    <Products :products="productStore.products" :columns="4" :initialCount="4" :sectionClass="'new-ceramics'"
        :heading="'You might also like'" />
    <Advantages />
    <Join />
</template>
<script setup>
import Product from '../components/Products/Product.vue';
import Products from '../components/Products/Products.vue';
import Advantages from '../Sections/Advantages.vue';
import Join from '../components/Join/Join.vue';
import { useProductsStore } from '../store/product';
const productStore = useProductsStore()
</script>
<style scoped></style>