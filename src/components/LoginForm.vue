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
            type="text"
            name="email"
            id="email"
            placeholder="Email" />
          <span class="error" v-if="errors.email">{{ errors.email }}</span>
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
    <Button type="submit" :text="'Login'" :variant="'dark'" />
  </form>
</template>

<script setup>
  import Button from './UI/Button.vue';
  import {ref, computed} from 'vue';

  const emit = defineEmits(['submit']);

  const email = ref('');
  const password = ref('');

  const errors = ref({
    email: '',
    password: '',
  });

  const regex = {
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    password: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
  };

  const isEmailValid = computed(() => regex.email.test(email.value));
  const isPasswordValid = computed(() => regex.password.test(password.value));

  const validateField = (field) => {
    switch (field) {
      case 'email':
        if (!isEmailValid.value) {
          errors.value.email = 'Пожалуйста введите корректный email адрес';
        } else {
          errors.value.email = '';
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
    return isEmailValid.value && isPasswordValid.value && errors.value.email === '' && errors.value.password === '';
  });

  const onSubmit = () => {
    emit('submit', {email: email.value, password: password.value});
  };
</script>
