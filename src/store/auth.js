import {defineStore} from 'pinia';
import {ref, computed} from 'vue';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth';
import {auth} from '/firebase';

export const useAuthStore = defineStore('auth', () => {
  const userState = ref(null);

  const isAuth = computed(() => {
    return !!userState.value;
  });

  onAuthStateChanged(auth, (user) => {
    userState.value = user;
  });

  const register = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    signOut(auth);
  };

  return {
    userState,
    isAuth,
    register,
    login,
    logout,
  };
});
