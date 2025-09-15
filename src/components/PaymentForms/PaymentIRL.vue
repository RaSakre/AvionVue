<template>
    <form action="" @submit.prevent="">
        <div class="row row-gap-3 mt-4 mb-4">
            <label class="col-6" for="name">Имя
                <div>
                    <input v-model="name" required placeholder="Иван Иванов" class="payment__input" type="text"
                        id="name">
                </div>
            </label>
            <label class="col-6" for="surname">Фамилия
                <div>
                    <input v-model="surname" placeholder="Иванович Иванов" class="payment__input" type="text"
                        id="surname">
                </div>
            </label>
            <label class="col-6" for="number">Ваш номер
                <div>
                    <input v-model="number" placeholder="+7 999 999 99 99" class="payment__input" type="tel" required
                        id="number">
                </div>
            </label>
        </div>
        <Button :disabled="!isDisabled()" @click="$emit('submit')" :variant="'dark'" :text="'Оплатить'" />
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
const isValidFirstName = computed(() => regex.name.test(name.value))
const isValidLastName = computed(() => regex.name.test(surname.value))
const isValidPhone = computed(() => regex.phone.test(number.value))

const isDisabled = () => {
    if (isValidFirstName.value && isValidLastName.value && isValidPhone.value) {
        return true;
    } else {
        return false;
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