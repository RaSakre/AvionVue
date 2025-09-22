import api from '../api';

export const productServices = {
  getProducts: async (limit) => {
    const response = await api.get('/products', {
        params: {
            limit,
        },
    });
    return response.data;
  },
  getCategories: async () => {
    const response = await api.get('/products/categories');
    return response.data;
  },
  getProductById: async (id) => {
    const response = await api.get(`/products/${id}`);
    return response.data;
  },
  searchProducts: async (query) => {
    const response = await api.get('/products/search', {
      params: {
        q: query,
      },
    });
    return response.data;
  },
};
