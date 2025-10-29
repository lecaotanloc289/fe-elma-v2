import { CommonState, Filter } from '@/interfaces/Common';
import { CommonService } from '@/services/common/CommonService';
import { StateCreator, create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export const commonApi: StateCreator<CommonState> = (set, get) => ({
  categories: [],
  products: [],
  getCategories: async (data: Filter) => {
    try {
      const { categories } = get();
      if (categories && categories.length > 0) {
        return { data: categories, cached: true };
      }
      const result = await CommonService.getCategories(data);
      set({ categories: result.data });
      return result;
    } catch (error) {
      console.log(error);
    }
  },
  getProducts: async (data: Filter) => {
    try {
      // const { products } = get();
      // if (products && products.length > 0) {
      //   return { data: products, cached: true };
      // }
      const result = await CommonService.getProducts(data);
      set({ products: result.data?.data });
      return result;
    } catch (error) {
      console.log(error);
    }
  },
});

export const useCommonStore = create<CommonState>()(
  devtools(persist(commonApi, { name: 'common-storage' }))
);
