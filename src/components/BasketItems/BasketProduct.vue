<template>
    <div class="cart__item-left">
        <img :style="imgStyles" :src="product.thumbnail" :alt="product.title" />
        <div class="cart__item-text">
            <h4 class="cart__item-title">{{ product.title }}</h4>
            <p v-if="requiredDescription" class="cart__item-description">{{ product.description }}</p>
            <p class="cart__item-price">{{ product.price.toFixed(2) + '$' }}</p>
            <span>{{ `(${product.quantity})` }}</span>
            <div v-if="requiredDelete" @click="basketStore.deleteProduct(product.id)" class="delete-img">
            <img  src="../../assets/basketitem/delete-2-svgrepo-com.svg" alt="">
        </div>
        </div>
        
    </div>
</template>
<script setup>
import { computed } from 'vue';
const imgStyles = computed(() => ({
    width: props.imgSize || 'auto'
}))

import { useBasketStore } from '../../store/basket';
const basketStore = useBasketStore()
const props = defineProps({
    product: {
        type: Object,
        required: true,
    },
    requiredDescription: {
        type: Boolean,
        required: false,
        default: true
    },
    imgSize: {
        type: String,
        required: false,
    },
    requiredDelete: {
        type: Boolean,
        required: false,
    }
})



</script>
<style scoped>
.cart__item-left {
    display: flex;
    align-items: center;
    gap: 21px;
}

.delete-img {
    position: absolute;
    bottom: 8px;
    right: -15px;
    cursor: pointer;
}

.delete-img img {
    height: 25px;
}

.cart__item-text {
    position: relative;
    max-width: 179px;
}

.cart__item-text>*:not(:last-child) {
    margin-bottom: 8px;
}

.cart__item-title {
    font-family: 'Clash-Display';
    font-size: 20px;
    line-height: 140%;
    color: var(--mainColor);
}

.cart__item-description {
    font-family: 'Satoshi';
    font-size: 14px;
    line-height: 150%;
    color: var(--mainColor);
}
</style>