import { Product, Image, Color, Size } from "@prisma/client";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ProductClientType } from "../../type";
import toast from "react-hot-toast";

interface CartProps {
  items: ProductClientType[];
  addItem: (data: ProductClientType) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartProps>(
    (set, get) => ({
      items: [],
      addItem: (data) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);
        if (existingItem) {
          return toast.error("Item is already in cart");
        }

        set({ items: [...get().items, data] });
        toast.success("Item added successfully");
      },
      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        toast.success("Item remove successfully");
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
