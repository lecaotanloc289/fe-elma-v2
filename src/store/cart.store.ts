import { AddProductItem, CartState } from '@/interfaces/Cart';
import { CartService } from '@/services/cart/CartService';
import { StateCreator, create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export const cartApi: StateCreator<CartState> = (set, get) => ({
  cart: {
    user: undefined,
    products: [],
  },

  setCart: async (data: any) => {
    set({
      cart: {
        user: data?.user,
        products: data?.products,
      },
    });
  },

  initialCart: async () => {
    try {
      const response = await CartService.initialCart();
      set({ cart: response?.data });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  addProductToCart: async (data: AddProductItem) => {
    try {
      const response = await CartService.addProductToCart(data);
      set({ cart: response?.data });
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  updateProductCartItem: async (data: AddProductItem) => {
    try {
      // Check số lượng là 1 mà trừ nữa thì không call api
      const { id, quantity } = data;
      const cartStore = get();
      const products = cartStore.cart.products.find(
        product => product.product._id.toString() === id
      );
      if (products?.quantity === 1 && quantity === -1) {
        return;
      }
      const response = await CartService.updateProductCartItem(data);
      set({ cart: response?.data });
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  deleteProductFromCart: async (data: any) => {
    try {
      const response = await CartService.deleteProductFromCart(data);
      set({ cart: response?.data });
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  resetCart: () => {
    set({ cart: { user: '', products: [] } });
  },
});

export const useCartStore = create<CartState>()(
  devtools(persist(cartApi, { name: 'cart-storage' }))
);
