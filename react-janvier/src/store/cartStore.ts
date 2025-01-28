import { create } from "zustand";

interface CartItem {
  id: number;
  name: string;
  price: number;
}

interface cartState {
  totalPrice: number;
  items: CartItem[];
  numberItems: number;
  removeItem: (id: number) => void;
  emptyCart: () => void;
}

export const useCartStore = create<cartState>((set) => ({
  totalPrice: 0,
  items: [],
  numberItems: 0,
  removeItem: (id) =>
    set((state) => {
      const updatedItems = state.items.filter((item) => item.id !== id);
      const updatedTotalPrice = updatedItems.reduce(
        (sum, item) => sum + item.price,
        0
      );
      return {
        items: updatedItems,
        totalPrice: updatedTotalPrice,
        numberItems: updatedItems.length,
      };
    }),
  emptyCart: () =>
    set(() => ({
      items: [],
      totalPrice: 0,
      numberItems: 0,
    })),
}));
