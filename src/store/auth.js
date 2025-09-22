import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, 
  reauthenticateWithCredential, 
  updateEmail, 
  EmailAuthProvider, 
  sendEmailVerification } from 'firebase/auth';
import { auth, db } from '/firebase';
import { doc, setDoc, getDoc, updateDoc, deleteField } from "firebase/firestore";


export const useAuthStore = defineStore('auth', () => {
  const userState = ref(null);
  const userInfo = ref(null)
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
        userInfo.value = userDoc.data();
        console.log("Добро пожаловать,", userInfo.value.username);
      } else {
        console.log("Добро пожаловать,", user.email);
      }
    } else {
      userState.value = null;
      userInfo.value = null;
    }
  });


  const register = async (email, password, username) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      // await sendEmailVerification(user);
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

  const updateUserField = async ({field, value}) => {
    try {
      if (!userState.value) {
        throw new Error('Пользователь не авторизован');
      }
      const uid = userState.value.uid;
      const userRef = doc(db, 'users', uid);
      await updateDoc(userRef, {
        [field]: value,
        updatedAt: new Date(),
      })
      if (userInfo.value) {
        userInfo.value[field] = value;
      }

    } catch(error) {
      console.error('Ошибка обновления данных пользователя:', error);
      alert('Пользователь не авторизован')
    }
  }

  const updateEmailData = async (newEmail, password) => { // troubles
    try {
      const user = userState.value;
      if (!user) {
        throw new Error('Пользователь не авторизован');
      }
      const credential = EmailAuthProvider.credential(user.email, password);
      await reauthenticateWithCredential(user, credential);
      await updateEmail(user, newEmail);
      await sendEmailVerification(user);
      await updateDoc(doc(db, 'users', user.uid),{
        email: newEmail,
        updatedAt: new Date(),
      })
      if (userInfo.value) {
        userInfo.value.email = newEmail;
      }
    } catch (error) {
      console.error('Ошибка смены email:', error);
    }
  }

  const deleteUserField = async (field) => {
    try {
      if (!userState.value) {
        throw new Error('Пользователь не авторизован');
      }
      const uid = userState.value.uid;
      const userRef = doc(db, 'users', uid);
      await updateDoc(userRef, {
        [field]: deleteField(),
        updatedAt: new Date(),
      })
      const {[field] : deletedValue, ...rest} = userInfo.value;
      userInfo.value = rest;

    } catch(error) {
      console.error('Ошибка обновления данных пользователя:', error);
    }
  }
  return {
    userState,
    isAuth,
    register,
    login,
    logout,
    userInfo,
    errorText,
    updateUserField,
    deleteUserField,
    updateEmailData,
  };
});
