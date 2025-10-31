import { Product } from './Common';
export interface CartItem {
  product: Product;
  quantity: number;
}
export interface Cart {
  user: string | undefined;
  products: CartItem[];
}

export interface AddProductItem {
  id: string;
  quantity: number;
}

export interface Address {}

export interface PaymentMethod {}

export interface CartState {
  cart: Cart;
  setCart: (data: any) => void;
  initialCart: (data: any) => Promise<void>;
  addProductToCart: (data: any) => Promise<void>;
  updateProductCartItem: (data: any) => Promise<void>;
  deleteProductFromCart: (data: any) => Promise<void>;
  resetCart: () => void;
}
