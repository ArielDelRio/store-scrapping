import ProductService from "@/services/product.service";
import { Product } from "store-api-controller/dist/types";
import { create } from "zustand";

interface State {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export const useCartPanel = create<State>()((set) => ({
  isOpen: false,
  onToggle: () => set((state) => ({ isOpen: !state.isOpen })),
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
}));
