type Store = {
  storeId: string;
  name: string;
  rank?: number;
  isMall?: boolean;
};

type Product = {
  id: number;
  name: string;
  images: [string];
  quantity: number;
  price: number;
  priceAfterDiscount: number;
  finalPrice: number;
};

export type Order = {
  order_id: string;
  store: Partial<Store>;
  status: string;
  statusDescription: string;
  products: [Partial<Product>];
  totalAmount: number;
};
