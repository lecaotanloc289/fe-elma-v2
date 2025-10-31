import { Product } from './Common';
export interface CartItem {
  _id: string;
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

// =================================================

export interface CartState {
  cart: CartItem[];

  setCart: (data: any) => void;

  initialCart: () => Promise<void>;

  addProductToCart: (data: AddProductItem) => Promise<void>;

  updateProductCartItem: (data: AddProductItem) => Promise<void>;

  deleteProductFromCart: (data: string[]) => Promise<void>;

  resetCart: () => void;

  // Id is selecting
  selected: Set<string>;

  // Select / Ignore select item
  toggleItem: (id: string, checked: boolean) => void;

  // Select / Ignore select store
  toggleStore: (storeId: string, checked: boolean) => void;

  // Select / Ignore select all items
  toggleAll: (checked: boolean) => void;

  // Checking select all
  isAllChecked: () => boolean;

  // Check store status
  storeStatus: (storeId: string) => {
    checked: boolean;
  };

  // Retrurn some total calculate
  totals: () => {
    itemCount: number;
    subtotal: number;
    grandTotal: number;
  };
}






