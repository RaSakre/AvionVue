<template>
    <form class="payment__form" @submit.prevent="submit">
        <div class="row row-gap-3 mt-4 mb-4">
            <label class="col-12" for="card-number">Номер карты
                <div>
                    <input v-model="card" placeholder="1234 5678 9012 3456" required class="payment__input" type="text"
                        name="" id="card-number">
                </div>
            </label>
            <label class="col-6" for="card-expiry">Срок действия
                <div>
                    <input placeholder="MM/YY" v-model="date" class="payment__input" required type="text"
                        id="card-expiry">
                </div>
            </label>
            <label class="col-6" for="cvv">CVV
                <div>
                    <input placeholder="123" v-model="cvv" class="payment__input" required type="text" id="cvv">
                </div>
            </label>
        </div>
        <Button :disabled="!isDisabled()" @click="$emit('submit')" :variant="'dark'" :text="'Оплатить'" />
    </form>
</template>
<script setup>
import Button from '../UI/Button.vue';
import { ref, computed } from 'vue';
const emit = defineEmits(['submit']);

const regex = {
    cardNumber: /^\d{4} \d{4} \d{4} \d{4}$/,
    expiry: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
    cvv: /^\d{3}$/,
}
const card = ref('')
const date = ref('')
const cvv = ref('')

const isValidCardNumber = computed(() => regex.cardNumber.test(card.value))
const isValidExpiry = computed(() => regex.expiry.test(date.value))
const isValidCvv = computed(() => regex.cvv.test(cvv.value))

const isDisabled = () => {
    if (isValidCardNumber.value && isValidExpiry.value && isValidCvv.value) {
        return true
    } else {
        return false
    }
}

</script>
<style scoped>
.payment__input {
    padding: 5px;
    width: 100%;
    border: 1px solid #2A254B;
    border-radius: 5px;
}
</style>