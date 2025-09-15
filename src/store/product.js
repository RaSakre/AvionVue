import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useProductsStore = defineStore('products', () => {
  const products = ref([]);
  const filteredProducts = ref([])
  const displayFilteredProducts = ref([])
  const limit = ref(20);
  const isMaxLimit = ref(false)

  const fetchProducts = async () => {
    const response = await fetch(`https://dummyjson.com/products?limit=${limit.value}`);
    const data = await response.json();
    products.value = data.products;
    filteredProducts.value = data.products;
    updateDisplayedProducts()
  };

  const filterByCategory = async (categoryUrl) => {
    try {
      if (categoryUrl === 'all') {
        filteredProducts.value = products.value;
        updateDisplayedProducts()
      } else {
        const response = await fetch(`${categoryUrl}`);
        const data = await response.json();
        filteredProducts.value = data.products;
        updateDisplayedProducts()
        if (filteredProducts.value.length < limit.value) {
          isMaxLimit.value = true;
        }
        else {
          isMaxLimit.value = false;
        }
      }
    }
    catch (error) {
      console.log(error);
    }
  }


  const updateDisplayedProducts = () => {
    displayFilteredProducts.value = filteredProducts.value;
  };

  const loadMoreProducts = () => {
    limit.value += 20;
    fetchProducts();
  }

  const filterByPrice = (minPrice, maxPrice) => {
    if (minPrice && maxPrice) {
      filteredProducts.value = products.value.filter(product => product.price >= minPrice && product.price <= maxPrice);
      updateDisplayedProducts()
    } else {
      filteredProducts.value = products.value;
      updateDisplayedProducts()
    }
  }
  return {
    products,
    fetchProducts,
    filterByCategory,
    filteredProducts,
    displayFilteredProducts,
    updateDisplayedProducts,
    loadMoreProducts,
    filterByPrice,
    isMaxLimit
  };
});
