import { defineStore } from "pinia";
import { ref, computed } from "vue";


export const useBasketStore = defineStore("basket", () => {
    const basket = ref([]);
    const addProduct = (prod, quantity) => {
        const product = basket.value.find((item) => item.id === prod.id);
        if (product) {
            return
        } else if (quantity > 1) {
            basket.value.push({ ...prod, newPrice: prod.price * quantity, quantity});
        } else {
            basket.value.push({...prod, newPrice: prod.price, quantity});
        }
    }

    const hasInBasket = (id) => {
        return basket.value.some((item) => item.id === id);
    }

    const changeProductQuantity = (id, quantity) => {
        const product = basket.value.find((item) => item.id === id);
        if (product) {
            product.quantity = quantity;
            product.newPrice = product.price * quantity;
        }
    }

    const totalPrice = computed(() => {
        return basket.value.reduce((total, item) => total + item.newPrice, 0);
    })
    return {
        basket,
        addProduct,
        totalPrice,
        hasInBasket,
        changeProductQuantity
    }
})