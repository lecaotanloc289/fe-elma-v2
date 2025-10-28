import api from '@/api/axiosConfig';
import { Filter } from '@/interfaces';
const baseProductUrl = 'products';
const baseCategoriesUrl = 'categories';
export const CommonService = {
  getProducts: async (data: Filter) => {
    try {
      const response = await api.post(`${baseProductUrl}/all`, data);
      return response.data;
    } catch (error: any) {
      return (
        error?.response?.data ?? { success: false, message: 'Network error' }
      );
    }
  },

  getCategories: async (data: Filter) => {
    try {
      const response = await api.get(`${baseCategoriesUrl}`, data);
      return response.data;
    } catch (error: any) {
      return (
        error?.response?.data ?? { success: false, message: 'Network error' }
      );
    }
  },

  //   logOut: async () => {
  //     return { success: true };
  //   },

  //   getProfile: async () => {
  //     console.log('Fetching user profile (token is auto-attached)');
  //     // apiClient will automatically add the token
  //     const response = await apiClient.get('/users/1');
  //     return response.data;
  //   },
};
