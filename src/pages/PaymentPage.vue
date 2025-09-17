<template>
    <div class="container">
        <div class="payment__content">
            <div class="payment__left mb-4">
                <h1 class="payment__title">Оплата</h1>
                <hr>
                <div class="payment__variants">
                    <label class="payment__variant" for="card">
                        <input v-model="selectedPayment" value="card" type="radio" name="payment" id="card">
                        <span>Оплатить картой</span>
                    </label>
                    <label class="payment__variant" for="irl">
                        <input v-model="selectedPayment" value="irl" type="radio" name="payment" id="irl">
                        <span>Оплатить при получении</span>
                    </label>
                </div>
                <PaymentCard @submit="submit" v-if="selectedPayment === 'card'" />
                <PaymentIRL @submit="submit" v-if="selectedPayment === 'irl'" />
                <div class="total-price">
                    <p>Итоговая цена:</p>
                    <p class="subtotal__price">{{ basketStore.totalPrice.toFixed(2) + '$' }}</p>
                </div>
            </div>
            <div class="payment__right">
                <BasketProduct v-for="product in basketStore.basket" :key="product.id" :product="product"
                    :required-description="false" :imgSize="'200px'" />
            </div>
            <Modal :is-open="isModalOpen" @close="isModalOpen = false">
                <div class="modal-view" v-if="!emptyBasketText">
                    <img src="../assets/modal/checkmark.svg" alt="">
                    <h2 class="modal-title">Оплата прошла успешно! ✅</h2>
                    <p class="modal-text">Ваш заказ принят в обработку</p>
                </div>
                <div class="modal-view" v-else>
                    <img src="../assets/modal/empty-cart.svg" alt="">
                    <p class="modal-text">{{ emptyBasketText }}</p>
                </div>
            </Modal>
        </div>
    </div>
</template>
<script setup>
import BasketProduct from '../components/BasketItems/BasketProduct.vue';
import { useBasketStore } from '../store/basket';
import PaymentCard from '../components/PaymentForms/PaymentCard.vue';
import PaymentIRL from '../components/PaymentForms/PaymentIRL.vue';
import Modal from '../components/UI/Modal.vue';
import { ref } from 'vue';
const basketStore = useBasketStore();
const selectedPayment = ref('card');
const isModalOpen = ref(false)
const emptyBasketText = ref('')
const submit = async () => {
    if (basketStore.basket.length === 0) {
        emptyBasketText.value = 'Корзина пустая'
        isModalOpen.value = true;
        return;
    }
    isModalOpen.value = true;
    await basketStore.addBoughtProductsToFirestore()
    basketStore.clearBasket();
}
</script>
<style scoped>
.payment__content {
    display: flex;
    gap: 20px;
}

.payment__title {
    font-size: 30px;
    margin-bottom: 20px;
    color: #2A254B;
}

.payment__variants {
    display: flex;
    gap: 20px;
}

.payment__variant {
    display: flex;
    gap: 10px;
}



.payment__right {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.subtotal__price {
    font-family: 'Clash-Display';
    font-size: 24px;
    color: var(--mainColor);
    line-height: 140%;
}

.total-price {
    margin-top: 10px;
}

.modal-title {
    font-size: 24px;
    margin-top: 10px;
    color: #2A254B;
}

.modal-text {
    font-size: 20px;
    margin-top: 10px;
    color: #2A254B;
}

.modal-view {
    text-align: center;
}
</style>