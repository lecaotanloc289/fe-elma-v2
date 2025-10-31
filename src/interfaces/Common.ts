export interface Category {
  _id: string;
  name: string;
  image?: string;
  icon?: string;
  parent?: string;
  description?: string;
}

export interface Product {
  _id: string;
  sale?: string;
  store: any;
  category: any;
  brand: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  number_reviews: number;
  rating: number;
  images: string[];
}

export interface Filter {}

export interface CommonState {
  product: string | undefined;
  store: string | undefined;
  categories: Category[];
  products: Product[];
  setProductId: (id: string) => void;
  setStoreId: (id: string) => void;
  getProducts: (data: Filter) => Promise<void>;
  getCategories: (data: Filter) => Promise<void>;
}
