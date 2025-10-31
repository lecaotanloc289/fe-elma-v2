import { AddProductItem, CartState } from '@/interfaces/Cart';
import { CartService } from '@/services/cart/CartService';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
export const useCartStore = create<CartState>()(
  devtools((set, get) => ({
    cart: [],

    setCart: (data: any) => {
      set({
        cart: data?.products,
      });
    },

    initialCart: async () => {
      try {
        const response = await CartService.initialCart();
        set({ cart: response?.data?.products });
        return response.data;
      } catch (error) {
        console.log('Failed to initial cart:', error);
      }
    },

    addProductToCart: async (data: AddProductItem) => {
      try {
        const response = await CartService.addProductToCart(data);
        set({ cart: response?.data?.products });
        return response;
      } catch (error) {
        console.log(error);
      }
    },

    updateProductCartItem: async (data: AddProductItem) => {
      try {
        //  Prevent decrementing quantity below 1
        const { id, quantity } = data;
        const cartStore = get();
        const products = cartStore.cart.find(
          product => product.product?._id === id
        );
        if (products?.quantity === quantity) {
          return;
        }
        const response = await CartService.updateProductCartItem(data);
        set({ cart: response?.data?.products });
        return response;
      } catch (error) {
        console.log('Failed to update cart item:', error);
      }
    },

    deleteProductFromCart: async (data: any) => {
      try {
        const response = await CartService.deleteProductFromCart(data);
        set({ cart: response?.data?.products });
      } catch (error) {
        console.log(error);
      }
    },

    resetCart: () => {
      set({ cart: [] });
    },

    // CART CHECKING MANAGEMENT
    selected: new Set<string>(),

    toggleItem: (id, checked) => {
      const next = new Set(get().selected);
      checked ? next.add(id) : next.delete(id);
      set({ selected: next });
    },

    toggleStore: (storeId, checked) => {
      const { cart, selected } = get();
      const next = new Set(selected);
      for (const it of cart) {
        const sId = it.product?.store?._id;
        const pId = it?.product?._id;
        if (!pId) continue;
        if (sId === storeId) {
          //&& !it.disabled
          checked ? next.add(pId) : next.delete(pId);
        }
      }
      set({ selected: next });
    },

    toggleAll: checked => {
      if (!checked) return set({ selected: new Set() });
      const next = new Set<string>();
      //if (!it.disabled)
      for (const it of get().cart) next.add(it?.product?._id);
      set({ selected: next });
    },

    isAllChecked: () => {
      const { cart, selected } = get();
      return cart.length > 0 && cart.every(i => selected.has(i.product?._id));

      // Using when implement disable product
      // const selectable = cart.filter(i => !i.disabled);
      // return selectable.length > 0 && selectable.every(i => selected.has(i.id));
    },

    storeStatus: storeId => {
      const { cart, selected } = get();
      const rows = cart.filter(i => i.product.store?._id === storeId); //&& !i.disabled
      const total = rows.length;
      if (!total) return { checked: false, indeterminate: false };
      const checkedCount = rows.reduce(
        (n, i) => n + (selected.has(i.product?._id) ? 1 : 0),
        0
      );
      return {
        checked: checkedCount === total,
        indeterminate: checkedCount > 0 && checkedCount < total,
      };
    },

    totals: () => {
      const { cart, selected } = get();
      let subtotal = 0;
      let itemCount = 0;
      const pickedStores = new Set<string>();

      for (const it of cart) {
        if (selected.has(it.product?._id)) {
          subtotal += it.product?.price * it.quantity;
          itemCount += 1;
          pickedStores.add(it.product.store?._id);
        }
      }

      // // phí ship tính 1 lần/ shop nếu có ít nhất 1 item chọn
      // let shipping = 0;
      // for (const sid of pickedStores) {
      //   const any = items.find(i => i.storeId === sid && i.shippingFee != null);
      //   shipping += any?.shippingFee ?? 0;
      // }

      return { itemCount, subtotal, grandTotal: subtotal };
    },
  }))
);

// export const useCartStore = create<CartState>()(
//   devtools(
//     persist(cartApi, {
//       name: 'cart-storage',
//     })
//   )
// );
