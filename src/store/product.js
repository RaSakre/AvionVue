import {defineStore} from 'pinia';
import {ref, computed} from 'vue';
import {productServices} from '@/api/services/productServices';

export const useProductsStore = defineStore('products', () => {
  const products = ref([]);
  const filteredProducts = ref([]);
  const displayFilteredProducts = ref([]);
  const limit = ref(20);
  const isMaxLimit = ref(false);
  const noFound = ref(false);
  const categorySavedUrl = ref(`https://dummyjson.com/products?limit=${limit.value}`);

  const filters = ref({
    category: 'all',
    price: 'all',
    sort: 'all',
    search: '',
    pagination: {
      limit: 20,
      page: 1,
    },
  });

  const fetchProducts = async () => {
    let data = null;
    if (filters.value.search) {
      data = await productServices.searchProducts(filters.value.search);
    } else {
      data = await productServices.getProducts(filters.value.pagination.limit);
    }

    products.value = data.products;
    filteredProducts.value = data.products;
    updateDisplayedProducts();
  };

  const filterByCategory = async (categoryUrl) => {
    try {
      if (categoryUrl === 'all') {
        filteredProducts.value = products.value;
        updateDisplayedProducts();
      } else {
        const response = await fetch(`${categoryUrl}`);
        const data = await response.json();
        filteredProducts.value = data.products;
        updateDisplayedProducts();
        categorySavedUrl.value = categoryUrl;
        if (filteredProducts.value.length < limit.value) {
          isMaxLimit.value = true;
        } else {
          isMaxLimit.value = false;
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateDisplayedProducts = () => {
    displayFilteredProducts.value = filteredProducts.value;
  };

  const loadMoreProducts = (loadValue) => {
    limit.value += loadValue;
    fetchProducts();
  };

  const filterByPrice = (minPrice, maxPrice) => {
    if (minPrice && maxPrice) {
      displayFilteredProducts.value = filteredProducts.value.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
      );
      noFound.value = false;
      if (displayFilteredProducts.value.length === 0) {
        noFound.value = true;
      }
    } else {
      filterByCategory(categorySavedUrl.value);
    }
  };
  return {
    products,
    fetchProducts,
    filterByCategory,
    filteredProducts,
    displayFilteredProducts,
    updateDisplayedProducts,
    loadMoreProducts,
    filterByPrice,
    isMaxLimit,
    noFound,
    filters,
  };
});
