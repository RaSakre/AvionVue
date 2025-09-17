<template>
    <div class="container">
        <div class="profile__wrapper">
                <div class="profile__usernames">
                    <h2>Hello {{ authStore.userInfo?.username }}!</h2>
                    <p>{{ authStore.userState?.email }}</p>
                </div>
                <hr>
                <div class="profile__content">
                    <div class="profile__data">
                        <ProfileData :inputs="inputs" :toggleInput="toggleInput" :title="'Username'" :text="getName" :placeholder="getName" @update="update" />
                        <ProfileData :inputs="inputs" :toggleInput="toggleInput" :title="'Email'" :text="getEmail" :placeholder="getEmail" @update="updateEmail"/>
                        <ProfileData :inputs="inputs" :toggleInput="toggleInput" :title="'Number'" :text="getNumber" :placeholder="getNumber" @update="update" @delete="deleteField" />
                        <ProfileData :inputs="inputs" :toggleInput="toggleInput" :title="'Location'" :text="getLocation" :placeholder="getLocation" @update="update" @delete="deleteField" />
                    </div>
                <h3>Все ваши купленные товары:</h3>
                <BasketProduct v-for="product in basketStore.boughtProducts" :key="product.id" :product="product"
                    :required-description="false" :imgSize="'200px'" :requiredDelete="false" />
            </div>
                <Modal :isOpen="isOpen" @close="isOpen = false">
                    <h3>Подтвердите действие</h3>
                    <p>Для смены email требуется ваш текущий пароль</p>
                    <input v-model="password" type="password" placeholder="Текущий пароль" @keypress.enter="confirm">
                    <div class="d-flex gap-3">
                        <button @click="isOpen = false">Отмена</button>
                        <button @click="confirm" :disabled="!password">Подтвердить</button>
                    </div>
                </Modal>
        </div>
    </div>
</template>
<script setup>
import { useAuthStore } from '../store/auth';
import { useBasketStore } from '../store/basket';
import { ref, computed, onMounted, watch } from 'vue';
import ProfileData from '../components/UI/ProfileData.vue';
import BasketProduct from '../components/BasketItems/BasketProduct.vue';
import Modal from '../components/UI/Modal.vue';

const authStore = useAuthStore()
const basketStore = useBasketStore()

watch(() => authStore.userState, (user) => {
    if (user) {
        basketStore.getBoughtProducts()
    }
})
const isOpen = ref(false)

console.log(basketStore.boughtProducts)
const password = ref('')
let email = null
const getName = computed(() => {
    return authStore.userInfo?.username ? authStore.userInfo.username : 'Your name'
})
const getEmail = computed(() => {
    return authStore.userInfo?.email ? authStore.userInfo.email : 'Your Email'
})
const getNumber = computed(() => {
    return authStore.userInfo?.number ? authStore.userInfo.number : 'Your number'
})
const getLocation = computed(() => {
    return authStore.userInfo?.location ? authStore.userInfo.location : 'Your location'
})
const inputs = ref({
    username: false,
    email: false,
    number: false,
    location: false,
})

const toggleInput = (inputName) => {
    inputs.value[inputName] = !inputs.value[inputName]
}

const update = (profileData) => {
    authStore.updateUserField(profileData)
}

const updateEmail = ({field, value}) => {
    if (field === 'email') {
        email = value
        isOpen.value = true
    }
}

const confirm = async () => {
    try {
    await authStore.updateEmailData(email, password.value)
    isOpen.value = false
    password.value = ''
    toggleInput('email')
    }
    catch(error) {
        console.error('Ошибка смены email:', error);
        alert('Неверный пароль или ошибка смены email');
    }
}


const deleteField = (fieldName) => {
    authStore.deleteUserField(fieldName)
}
</script>
<style scoped>
.profile__usernames h2 {
    font-family: 'Satoshi';
    font-weight: 400;
    line-height: 100%;
    font-size: 30px;
}

.profile__usernames p {
    font-family: 'Satoshi';
    font-weight: 400;
    line-height: 100%;
    font-size: 20px;
}

.profile__data {
    display: flex;
    flex-direction: column;
    gap: 30px;
    max-width: 600px;
    width: 100%;
    padding: 15px 25px;
    background-color: #f0f5f9;
    font-size: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
}

</style>