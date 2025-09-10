import {defineStore} from 'pinia';
import {ref, computed} from 'vue';

export const useProductsStore = defineStore('products', () => {
  const products = ref([]);

  const fetchProducts = async () => {
    const response = await fetch('https://dummyjson.com/products/category/furniture');
    const data = await response.json();
    products.value = data.products;
  };

  return {
    products,
    fetchProducts,
  };
});
