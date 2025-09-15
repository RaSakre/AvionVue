<template>
    <form class="payment__form" @submit.prevent="submit">
        <div class="row row-gap-3 mt-4 mb-4">
            <label class="col-12" for="card-number">Номер карты
                <div>
                    <input @blur="validateField('cardNumber')" v-model="card" placeholder="1234 5678 9012 3456" required
                        class="payment__input" type="text" name="" id="card-number">
                    <span v-if="errors.cardNumber" class="error">{{ errors.cardNumber }}</span>
                </div>
            </label>
            <label class="col-6" for="card-expiry">Срок действия
                <div>
                    <input @blur="validateField('expiry')" placeholder="MM/YY" v-model="date" class="payment__input"
                        required type="text" id="card-expiry">
                    <span v-if="errors.expiry" class="error">{{ errors.expiry }}</span>
                </div>
            </label>
            <label class="col-6" for="cvv">CVV
                <div>
                    <input @blur="validateField('cvv')" placeholder="123" v-model="cvv" class="payment__input" required
                        type="text" id="cvv">
                    <span v-if="errors.cvv" class="error">{{ errors.cvv }}</span>
                </div>
            </label>
        </div>
        <Button :disabled="!isDisabled" @click="$emit('submit')" :variant="'dark'" :text="'Оплатить'" />
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


const errors = ref({
    cardNumber: '',
    expiry: '',
    cvv: '',
})

const card = ref('')
const date = ref('')
const cvv = ref('')

const validateField = (field) => {
    switch (field) {
        case 'cardNumber':
            errors.value.cardNumber = isValidCardNumber.value ? '' : 'Неверный формат'
            break;
        case 'expiry':
            errors.value.expiry = isValidExpiry.value ? '' : 'Неверный формат'
            break;
        case 'cvv':
            errors.value.cvv = isValidCvv.value ? '' : 'Неверный формат'
            break;
        default:
            break;
    }
}

const isValidCardNumber = computed(() => regex.cardNumber.test(card.value))
const isValidExpiry = computed(() => regex.expiry.test(date.value))
const isValidCvv = computed(() => regex.cvv.test(cvv.value))

const isDisabled = computed(() => {
    return isValidCardNumber.value && isValidExpiry.value && isValidCvv.value
})


</script>
<style scoped>
.payment__input {
    padding: 5px;
    width: 100%;
    border: 1px solid #2A254B;
    border-radius: 5px;
}

.error {
    color: red;
    font-size: 14px;
    margin-top: 5px;
    display: block;
}
</style>