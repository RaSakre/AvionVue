import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from "firebase/auth";
import { 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc 
} from "firebase/firestore";

import { auth, db } from "/firebase";

export const useUserStore = defineStore("userStore", () => {
  const userState = ref(null);
  const userData = ref(null);
  const loadingUserData = ref(true);

  const isAuth = computed(() => {
    return !!userState.value; 
  });

  // Следим за состоянием авторизации
  onAuthStateChanged(auth, async (user) => {
    userState.value = user;

    if (user) {
      const userDocumentReference = doc(db, "users", userState.uid);
      const userDocumentSnapshot = await getDoc(userDocumentReference);
      userData.value = userDocumentSnapshot.exists() ? userDocumentSnapshot.data() : null;
    } else {
      userData.value = null;
    }

    loadingUserData.value = false;
  });

  // Регистрация
  const registerUser = async (email, password, firstName, lastName) => {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password);

    const userDocumentReference = doc(db, "users", userCredentials.user.uid);

    await setDoc(userDocumentReference, {
      email: email,
      firstName: firstName,
      lastName: lastName,
      cartItems: [],
      createdAt: new Date()
    });
  };

  // Логин
  const loginUser = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  // Логаут
  const logoutUser = async () => {
    await signOut(auth);
  };

  // Обновление профиля
  const updateUserData = async (newUserData) => {
    if (!user.value) return;

    const userDocumentReference = doc(db, "users", user.value.uid);

    await updateDoc(userDocumentReference, newUserData);

    userData.value = { ...userData.value, ...newUserData };
  };

  return { 
    isAuth,
    userState, 
    userData, 
    loadingUserData,
    registerUser, 
    loginUser, 
    logoutUser, 
    updateUserData 
  };
});
