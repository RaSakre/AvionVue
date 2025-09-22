import api from '../api';

export const authServices = {
  login: async (email, password) => {
    const response = await api.post('/auth/login', {email, password});
    return response.data;
  },
  register: async (email, password, username) => {
    const response = await api.post('/auth/register', {email, password, username});
    return response.data;
  },
  userInfo: async () => {
    const response = await api.get('/auth/user');
    return response.data;
  },
};
