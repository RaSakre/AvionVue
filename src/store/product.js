import {defineStore} from 'pinia';
import {ref, computed} from 'vue';

export const useProductsStore = defineStore('products', () => {
  const products = ref([]);
  const fetchProducts = async () => {
    const response = await fetch('https://dummyjson.com/products/category/furniture');
    const data = await response.json();
    products.value = data.products;
  };
  const getProductById = (id) => {
    return products.value.find((product) => product.id === id);
  }
  return {
    products,
    fetchProducts,
    getProductById
  };
});
