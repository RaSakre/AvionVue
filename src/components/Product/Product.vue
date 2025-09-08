<template>
    <section class="product">
        <div class="container">
            <div class="product__wrapper">
                <div class="product__image">
                    <img src="../../assets/product/productleft.png" alt="">
                </div>
                <div class="product__content">
                    <ProductDescription />
                    <ProductDimensions />
                    <ProductAmount />
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import ProductDescription from './ProductDescription.vue';
import ProductDimensions from './ProductDimensions.vue';
import ProductAmount from './ProductAmount.vue';
</script>
<style scoped>
@import url(../../styles/product/product.css);
</style>