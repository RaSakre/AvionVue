<template >
    <HeroSection/>
    <Advantages/>
    <Products :sectionClass="'new-ceramics'" :heading="'New Ceramics'" :products="ceramicsProducts"/>
    <Products :sectionClass="'products'" :heading="'Our popular products'" :products="popularProducts"/>
    <Join/>
    <About/>
</template>
<script setup>
import HeroSection from '../components/HeroSection/HeroSection.vue';
import Advantages from '../components/Advantages/Advantages.vue';
import Products from '../components/Products/Products.vue';
import Join from '../components/Join/Join.vue';
import About from '../components/About/About.vue';
import { ceramicsProducts } from '../mockData/products';
import { popularProducts } from '../mockData/products';

</script>
<style scoped>

</style>