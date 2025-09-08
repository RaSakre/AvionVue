<template>
    <Product />
    <Products :sectionClass="'ceramics'" :products="ceramicsProducts" :heading="'You might also like'" />
    <Advantages />
    <Join />
</template>
<script setup>
import Product from '../components/Product/Product.vue';
import Products from '../components/Products/Products.vue';
import Advantages from '../components/Advantages/Advantages.vue';
import Join from '../components/Join/Join.vue';
import { ceramicsProducts } from '../mockData/products';
</script>
<style scoped></style>