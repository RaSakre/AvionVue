import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useAuthStore } from "./auth";
import { setDoc, updateDoc, doc, getDoc, arrayUnion } from "firebase/firestore";
import { db } from '../../firebase'



export const useBasketStore = defineStore("basket", () => {
    const authStore = useAuthStore();
    const basket = ref([]);
    const boughtProducts = ref([])
    const addProduct = (prod, quantity) => {
        const product = basket.value.find((item) => item.id === prod.id);
        if (product) {
            return
        } else if (quantity > 1) {
            basket.value.push({ ...prod, newPrice: prod.price * quantity, quantity });
        } else {
            basket.value.push({ ...prod, newPrice: prod.price, quantity });
        }
    }

    const hasInBasket = (id) => {
        return basket.value.some((item) => item.id === id);
    }

    const addBoughtProductsToFirestore = async () => {
        try {
            if (!authStore.userState) {
                throw new Error('Пользователь не авторизован');
            }
            const docRef = doc(db, "users", authStore.userState.uid);
            await updateDoc(docRef, {
                boughtProducts: arrayUnion(...basket.value),
                lastUpdated: new Date(),
            })
        } catch (error) {
            console.error('Ошибка при сохранении данных:', error);
            return false;
        }
    }

    const getBoughtProducts = async () => {
        try {
            if (!authStore.userState) {
                throw new Error('Пользователь не авторизован');
            }
            const docRef = doc(db, "users", authStore.userState.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
            boughtProducts.value = docSnap.data().boughtProducts;
            
        }
    } catch(error) {
        console.error('Ошибка при получении данных:', error);
        return false;
    }
}

    const changeProductQuantity = (id, quantity) => {
        const product = basket.value.find((item) => item.id === id);
        if (product) {
            product.quantity = quantity;
            product.newPrice = product.price * quantity;
        }
    }

    const deleteProduct = (id) => {
        basket.value = basket.value.filter((item) => item.id !== id);
    }

    const totalPrice = computed(() => {
        return basket.value.reduce((total, item) => total + item.newPrice, 0);
    })
    const clearBasket = () => {
        basket.value = [];
    }
    return {
        basket,
        addProduct,
        totalPrice,
        hasInBasket,
        changeProductQuantity,
        deleteProduct,
        clearBasket,
        addBoughtProductsToFirestore,
        getBoughtProducts,
        boughtProducts
    }
})