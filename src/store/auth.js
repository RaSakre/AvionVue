import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useAuthStore = defineStore("auth", () => {
    const users = ref([]);
    const isAuth = ref(false)
    const hasEmail = ref(false)
    const hasUserName = ref(false)
    const register = (userObj) => {
        users.value.push(userObj)
    }
    const login = (userObj) => {
        
    }
    const isUserExist = (userObj) => {
        const emailExist = users.value.some(user => user.email === userObj.email)
        if (emailExist) {
            hasEmail.value = true
            return true
        } else {
            hasEmail.value = false
        }
        const userNameExist = users.value.some(user => user.userName === userObj.userName)
        if (userNameExist) {
            hasUserName.value = true
            return true
        } else {
            hasUserName.value = false
        }
        return false
    }
    return {
        users,
        isAuth,
        register,
        login,
        isUserExist,
        hasEmail,
        hasUserName
    }
})