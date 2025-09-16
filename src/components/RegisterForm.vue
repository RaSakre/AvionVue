<template>
  <form @submit.prevent="onSubmit" action="" class="modal-auth-form">
    <div class="row row-gap-3 mb-4">
      <label class="col-12" for="email">
        Email
        <div>
          <input
            @blur="validateField('email')"
            v-model="email"
            class="auth-input"
            type="email"
            name="email"
            id="email"
            placeholder="Email" />
          <span class="error" v-if="errors.email">{{ errors.email }}</span>
        </div>
      </label>
      <label class="col-12" for="username">
        Username
        <div>
          <input
            @blur="validateField('userName')"
            v-model="userName"
            class="auth-input"
            type="text"
            name="username"
            id="username"
            placeholder="Username" />
          <span class="error" v-if="errors.userName">{{ errors.userName }}</span>
        </div>
      </label>
      <label class="col-12" for="password">
        Password
        <div>
          <input
            @blur="validateField('password')"
            v-model="password"
            class="auth-input"
            type="password"
            name="password"
            id="password"
            placeholder="Password" />
          <span class="error" v-if="errors.password">{{ errors.password }}</span>
        </div>
      </label>
    </div>
    <Button :disabled="!isValid" type="submit" :text="'Create an account'" :variant="'dark'" style="margin-bottom: 10px" />
    <p style="color: red;">{{ authStore.errorText }}</p>
  </form>
</template>

<script setup>
  import {ref, computed} from 'vue';
  import Button from './UI/Button.vue';
  import { useAuthStore } from '../store/auth';
  const authStore = useAuthStore();
  const emit = defineEmits(['submit']);

  const email = ref('');
  const userName = ref('');
  const password = ref('');

  const errors = ref({
    email: '',
    userName: '',
    password: '',
  });

  const regex = {
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    password: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
    userName: /^[a-zA-Z0-9_-]{3,20}$/,
  };

  const isEmailValid = computed(() => regex.email.test(email.value));
  const isPasswordValid = computed(() => regex.password.test(password.value));
  const isUserNameValid = computed(() => regex.userName.test(userName.value));

  const validateField = (field) => {
    switch (field) {
      case 'email':
        if (!isEmailValid.value) {
          errors.value.email = 'Пожалуйста введите корректный email адрес';
        } else {
          errors.value.email = '';
        }
        break;
      case 'userName':
        if (!isUserNameValid.value) {
          errors.value.userName = 'Имя пользователя может содержать только буквы, цифры и символы подчеркивания';
        } else {
          errors.value.userName = '';
        }
        break;
      case 'password':
        if (!isPasswordValid.value) {
          errors.value.password = 'Пароль некорректен';
        } else {
          errors.value.password = '';
        }
        break;
      default:
        break;
    }
  };

  const isValid = computed(() => {
    return (
      isEmailValid.value &&
      isUserNameValid.value &&
      isPasswordValid.value &&
      errors.value.email === '' &&
      errors.value.userName === '' &&
      errors.value.password === ''
    );
  });

  const onSubmit = () => {
    emit('submit', {email: email.value, userName: userName.value, password: password.value});
  };
</script>
