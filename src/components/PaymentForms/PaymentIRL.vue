<template>
    <form action="" @submit.prevent="">
        <div class="row row-gap-3 mt-4 mb-4">
            <label class="col-6" for="name">Имя
                <div>
                    <input @blur="validateField('name')" v-model="name" required placeholder="Иван Иванов"
                        class="payment__input" type="text" id="name">
                    <span v-if="erros.name" class="error">{{ erros.name }}</span>
                </div>
            </label>
            <label class="col-6" for="surname">Фамилия
                <div>
                    <input @blur="validateField('surname')" v-model="surname" placeholder="Иванович Иванов"
                        class="payment__input" type="text" id="surname">
                    <span v-if="erros.surname" class="error">{{ erros.surname }}</span>
                </div>
            </label>
            <label class="col-6" for="number">Ваш номер
                <div>
                    <input @blur="validateField('number')" v-model="number" placeholder="+7 999 999 99 99"
                        class="payment__input" type="tel" required id="number">
                    <span v-if="erros.number" class="error">{{ erros.number }}</span>
                </div>
            </label>
        </div>
        <Button :disabled="!isDisabled" @click="$emit('submit')" :variant="'dark'" :text="'Оплатить'" />
    </form>
</template>
<script setup>
const emit = defineEmits(['submit']);
import { ref, computed } from 'vue';
import Button from '../UI/Button.vue';
const name = ref('');
const surname = ref('');
const number = ref('');

const regex = {
    name: /^[A-Za-zА-Яа-яЁё\s\-']{2,50}$/,
    phone: /^\+?[1-9]\d{0,3}[\s\-]?\(?\d{1,5}\)?[\s\-]?\d{1,5}[\s\-]?\d{1,5}[\s\-]?\d{1,5}$/
}

const erros = ref({
    name: '',
    surname: '',
    number: ''
})

const isValidFirstName = computed(() => regex.name.test(name.value))
const isValidLastName = computed(() => regex.name.test(surname.value))
const isValidPhone = computed(() => regex.phone.test(number.value))

const isDisabled = computed(() => {
    return isValidFirstName.value && isValidLastName.value && isValidPhone.value
})

const validateField = (field) => {
    switch (field) {
        case 'name':
            erros.value.name = isValidFirstName.value ? '' : 'Введите корректное имя'
            break;
        case 'surname':
            erros.value.surname = isValidLastName.value ? '' : 'Введите корректную фамилию'
            break;
        case 'number':
            erros.value.number = isValidPhone.value ? '' : 'Введите корректный номер телефона'
            break;
        default:
            break;
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

.error {
    color: red;
    font-size: 14px;
    margin-top: 5px;
    display: block;
}
</style>