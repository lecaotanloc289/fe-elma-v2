import { CartState } from '@/interfaces/Cart';
import { CartService } from '@/services/cart/CartService';
import { StateCreator, create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export const cartApi: StateCreator<CartState> = (set, get) => ({
  cart: {
    user: undefined,
    products: [],
  },
  initialCart: async (data: any) => {
    try {
      const response = await CartService.initialCart();
      set({ cart: response?.data });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  addProductToCart: async (data: any) => {},
  deleteProductFromCart: async (data: any) => {},
  resetCart: () => {
    set({ cart: { user: '', products: [] } });
  },
});

export const useCartStore = create<CartState>()(
  devtools(persist(cartApi, { name: 'cart-storage' }))
);
