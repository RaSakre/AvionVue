<template>
    <div class="col-lg-7">
        <BasketProduct :product="product" :requiredDescription="true" />
    </div>
    <div style="display: flex; align-items: center;" class="col-lg-4">
        <Quantity @onIncrement="increment" @onDecrement="decrement" :quantity="product.quantity"
            :max="product.minimumOrderQuantity" />
    </div>
    <div style="display: flex" class="col-lg-1">
        <div style="align-items: center; display: flex">
            <p class="cart__item-total-price">{{ product.newPrice.toFixed(2) + '$' }}</p>
        </div>
    </div>
</template>
<script setup>
import Quantity from '../UI/Quantity.vue';
import BasketProduct from './BasketProduct.vue';
import { useBasketStore } from '../../store/basket';
const basketStore = useBasketStore();
const props = defineProps({
    product: {
        type: Object,
        required: true,
    },
});

const increment = () => {
    if (props.product.quantity >= props.product.minimumOrderQuantity) {
        return;
    } else {
        basketStore.changeProductQuantity(props.product.id, props.product.quantity + 1);
    }
};
const decrement = () => {
    if (props.product.quantity <= 1) {
        return;
    } else {
        basketStore.changeProductQuantity(props.product.id, props.product.quantity - 1);
    }
};
</script>
<style scoped></style>
