import api from '@/api/axiosConfig';
import { AddProductItem } from '@/interfaces/Cart';
const baseUrl = 'carts';
export const CartService = {
  initialCart: async () => {
    try {
      const response = await api.get(`${baseUrl}`);

      return response.data;
    } catch (error: any) {
      return (
        error?.response?.data ?? {
          success: false,
          data: [],
          message: 'Network error',
        }
      );
    }
  },

  addProductToCart: async (data: AddProductItem) => {
    try {
      const response = await api.post(`${baseUrl}`, data);
      return response.data;
    } catch (error: any) {
      return (
        error?.response?.data ?? {
          success: false,
          data: [],
          message: 'Network error',
        }
      );
    }
  },

  updateProductCartItem: async (data: AddProductItem) => {
    try {
      const response = await api.patch(baseUrl, data);
      return response.data;
    } catch (error: any) {
      return (
        error?.response?.data ?? {
          success: false,
          data: [],
          message: 'Network error',
        }
      );
    }
  },

  deleteProductFromCart: async (data: string[]) => {
    try {
      const response = await api.delete(`${baseUrl}`, { data });
      return response?.data ?? { success: true, data: { products: [] } };
    } catch (error: any) {
      return (
        error?.response?.data ?? {
          success: false,
          data: [],
          message: 'Network error',
        }
      );
    }
  },
};
