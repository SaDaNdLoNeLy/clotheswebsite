import { create } from "zustand";

interface useStorePopupInterface {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useStorePopup = create<useStorePopupInterface>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
