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

  getProductDetail: async (id: string) => {
    try {
      const response = await api.get(`${baseProductUrl}/${id}`);
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
};
