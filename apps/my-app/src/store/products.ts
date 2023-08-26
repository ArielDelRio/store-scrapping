import ProductService from "@/services/product.service";
import { Product } from "store-api-controller/dist/types";
import { create } from "zustand";

interface State {
  search: (param: string) => Promise<void>;
  product: Product;
  fetching: boolean;
}

const productService = new ProductService();

export const useProductsStore = create<State>()((set) => ({
  product: undefined,
  fetching: false,
  search: async (param: string) => {
    set({ fetching: true });
    const product = await productService.getProducts(param);
    set({ product, fetching: false });
  },
}));
