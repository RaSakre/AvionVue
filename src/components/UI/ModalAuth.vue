<template>
  <Teleport to="body">
    <Transition name="modal-auth">
      <div v-if="isOpen" class="modal-overlay" @click="close">
        <div class="modal-auth-content">
          <div v-if="isRegisterModal">
            <h2 class="modal-auth-logo">Avion</h2>
            <div class="modal-auth-greetings">
              <h3>Welcome to Avion!</h3>
            </div>
            <RegisterForm @submit="handleRegisterSubmit" />
            <p>
              Already have an account?
              <button @click="toggleModal" style="text-decoration: underline">Log in</button>
            </p>
            <div>
              <button @click="close">Закрыть</button>
            </div>
          </div>
          <div v-else>
            <h2 class="modal-auth-logo">Avion</h2>
            <div class="modal-auth-greetings">
              <h3>Welcome to Avion!</h3>
            </div>
            <LoginForm @submit="handleLoginSubmit" />
            <div style="display: flex; gap: 10px">
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
  import {useAuthStore} from '../../store/auth';
  import {ref} from 'vue';
  import LoginForm from '../LoginForm.vue';
  import RegisterForm from '../RegisterForm.vue';
  import {auth} from '/firebase';
  import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';

  const isRegisterModal = ref(true);
  const authStore = useAuthStore();
  const props = defineProps({
    isOpen: {
      type: Boolean,
      default: false,
    },
  });

  const toggleModal = () => {
    isRegisterModal.value = !isRegisterModal.value;
  };

  const emit = defineEmits(['close']);

  const close = () => {
    emit('close');
  };

  const handleRegisterSubmit = (registerData) => {
    authStore.register(registerData.email, registerData.password);
  };

  const handleLoginSubmit = (loginData) => {
    authStore.login(loginData.email, loginData.password);
  };
</script>
<style>
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
