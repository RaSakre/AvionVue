import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth, db } from '/firebase';
import { doc, setDoc, getDoc } from "firebase/firestore";


export const useAuthStore = defineStore('auth', () => {
  const userState = ref(null);
  const userName = ref(null);
  const errorText = ref(null);
  const isAuth = computed(() => {
    return !!userState.value;
  });

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      userState.value = user;
      const userDoc = await getDoc(doc(db, "users", user.uid));
      errorText.value = null;
      if (userDoc.exists()) {
        const userData = userDoc.data();
        
        userName.value = userData.username;
        console.log("Добро пожаловать,", userData.username);
      } else {
        console.log("Добро пожаловать,", user.email);
      }
    } else {
      userState.value = null;
      userName.value = null;
    }
  });


  const register = async (email, password, username) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("Пользователь зарегистрирован:", userCredential);

      await setDoc(doc(db, "users", user.uid), {
        username: username,
        email: email,
        createdAt: new Date()
      });

    } catch (error) {
      console.error("Ошибка регистрации:", error);
      errorText.value = 'Ошибка, возможно пользователь с таким именем или почтой уже существует'
    }
  };
  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    }
    catch (error) {
      console.error("Ошибка входа:", error);
      errorText.value = 'Ошибка, возможно пользователь с таким именем или почтой не существует'
    }
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
    userName,
    errorText
  };
});
