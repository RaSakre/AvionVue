<template>
    <Teleport to="body">
        <Transition name="modal-auth">
            <div v-if="isOpen" class="modal-overlay" @click.self="close">
                <div class="modal-auth-content">
                    <div v-if="isRegisterModal">
                        <h2 class="modal-auth-logo">Avion</h2>
                        <div class="modal-auth-greetings">
                            <h3>Welcome to Avion!</h3>
                            <p>Already have an account? <button @click="isRegisterModal = !isRegisterModal" style="text-decoration: underline;">Log in</button></p>
                        </div>
                        <form @submit.prevent="handleRegisterSubmit" action="" class="modal-auth-form">
                            <div class="row row-gap-3 mb-4">
                                <label class="col-12" for="email">Email
                                    <div>
                                        <input @blur="validateField('email')" v-model="email" required
                                            class="auth-input" type="email" name="email" id="email" placeholder="Email">
                                        <span class="error" v-if="errors.email">{{ errors.email }}</span>
                                    </div>
                                </label>
                                <label class="col-12" for="username">Username
                                    <div>
                                        <input @blur="validateField('userName')" v-model="userName" required
                                            class="auth-input" type="text" name="username" id="username"
                                            placeholder="Username">
                                        <span class="error" v-if="errors.userName">{{ errors.userName }}</span>
                                    </div>
                                </label>
                                <label class="col-12" for="password">Password
                                    <div>
                                        <input @blur="validateField('password')" v-model="password" required
                                            class="auth-input" type="password" name="password" id="password"
                                            placeholder="Password">
                                        <span class="error" v-if="errors.password">{{ errors.password }}</span>
                                    </div>
                                </label>
                            </div>
                            <Button :disabled="!isValid" type="submit" :text="'Create an account'" :variant="'dark'" />
                        </form>
                        <div>
                            <button @click="close">Закрыть</button>
                        </div>
                    </div>
                    <div v-if="!isRegisterModal">
                        <h2 class="modal-auth-logo">Avion</h2>
                        <div class="modal-auth-greetings">
                            <h3>Welcome to Avion!</h3>
                        </div>
                        <form @submit.prevent="handleLoginSubmit" action="" class="modal-auth-form">
                            <div class="row row-gap-3 mb-4">
                                <label class="col-12" for="username">Username
                                    <div>
                                        <input @blur="validateField('userName')" v-model="userName" required
                                            class="auth-input" type="text" name="username" id="username"
                                            placeholder="Username">
                                        <span class="error" v-if="errors.userName">{{ errors.userName }}</span>
                                    </div>
                                </label>
                                <label class="col-12" for="password">Password
                                    <div>
                                        <input @blur="validateField('password')" v-model="password" required
                                            class="auth-input" type="password" name="password" id="password"
                                            placeholder="Password">
                                        <span class="error" v-if="errors.password">{{ errors.password }}</span>
                                    </div>
                                </label>
                            </div>
                            <Button :disabled="!isLoginValid" type="submit" :text="'Login'" :variant="'dark'" />
                        </form>
                        <div style="display: flex; gap: 10px;">
                            <button @click="close">Закрыть</button>
                            <button @click="isRegisterModal = true">Назад</button>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>
<script setup>
import { useAuthStore } from '../../store/auth'
import { computed, ref } from 'vue'
const isRegisterModal = ref(true)
const authStore = useAuthStore()
const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false
    }
})
import Button from './Button.vue'
const email = ref('')
const userName = ref('')
const password = ref('')

const errors = ref({
    email: '',
    userName: '',
    password: ''
})

const regex = {
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    userName: /^[a-zA-Z0-9_-]{3,20}$/,
    password: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
}


const isEmailValid = computed(() => regex.email.test(email.value))
const isUserNameValid = computed(() => regex.userName.test(userName.value))
const isPasswordValid = computed(() => regex.password.test(password.value))

const validateField = (field) => {
    switch (field) {
        case 'email':
            if (!isEmailValid.value) {
                errors.value.email = 'Пожалуйста введите корректный email адрес'
            } else {
                errors.value.email = ''
            }
            break
        case 'userName':
            if (!isUserNameValid.value) {
                errors.value.userName = "Имя пользователя может содержать только буквы, цифры и символы подчеркивания"
            } else {
                errors.value.userName = ''
            }
            break
        case 'password':
            if (!isPasswordValid.value) {
                errors.value.password = 'Пароль некорректен'
            } else {
                errors.value.password = ''
            }
            break
        default:
            break
    }
}

const isValid = computed(() => {
    return isEmailValid.value && isUserNameValid.value && isPasswordValid.value
        && errors.value.email === '' && errors.value.userName === '' && errors.value.password === ''
})

const isLoginValid = computed(() => {
    return isUserNameValid.value && isPasswordValid.value &&
        errors.value.userName === '' && errors.value.password === ''
})

const emit = defineEmits(['close'])
const close = () => {
    emit('close')
}

const handleRegisterSubmit = () => {
    const user = { email: email.value, userName: userName.value, password: password.value }
    if (authStore.isUserExist(user)) {
        if (authStore.hasEmail) {
            errors.value.email = 'Пользователь с таким email уже существует'
        }
        if (authStore.hasUserName) {
            errors.value.userName = 'Пользователь с таким именем уже существует'
        }
        return
    }
    authStore.register(user)
    isRegisterModal.value = false
    console.log(authStore.users);
}

const handleLoginSubmit = () => {
    // const user = { userName: userName.value, password: password.value }
    // authStore.login(user)
    // localStorage.setItem('user', JSON.stringify(user))
}

</script>
<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-auth-enter-active,
.modal-auth-leave-active {
    transition: opacity 0.3s ease;
}

.modal-auth-enter-from,
.modal-auth-leave-to {
    opacity: 0;
}

.modal-auth-enter-active .modal-auth-content,
.modal-auth-leave-active .modal-auth-content {
    transition: transform 0.3s ease;
}

.modal-auth-enter-from .modal-auth-content,
.modal-auth-leave-to .modal-auth-content {
    transform: scale(0.7);
}

.modal-auth-content {
    background: #ece8ef;
    padding: 20px;
    border-radius: 8px;
    max-width: 650px;
}

.modal-auth-logo {
    font-family: 'Clash-Display';
    font-weight: 400;
    font-size: 24px;
    line-height: 100%;
    color: var(--mainColor);
}

.modal-auth-greetings h3 {
    font-family: 'Satoshi';
    font-weight: 500;
    font-size: 32px;
    line-height: 48px;
}

.modal-auth-greetings {
    margin-bottom: 15px;
}

.modal-auth-form {
    margin-bottom: 15px;
}

.auth-input {
    width: 100%;
    border: 1px solid #666666;
    border-radius: 12px;
    padding: 15px 25px;
    font-size: 20px;
}

.error {
    color: red;
    font-size: 14px;
    margin-top: 5px;
}
</style>