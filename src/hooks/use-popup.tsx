import { create } from "zustand";

interface useStorePopupInterface {
  isOpen: boolean;
  onOpen: () => void;
  onclose: () => void;
}

export const useStorePopup = create<useStorePopupInterface>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onclose: () => set({ isOpen: false }),
}));
