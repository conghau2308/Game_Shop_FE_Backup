import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";


const cartSlice = (set) => ({
    cart: {buy: null},
    addCartBuy: (newCart) => {
        set((state) => ({ cart: {buy: newCart }}))
    },
    removeCartBuy: () => set((state) => ({ cart: {buy: null }}))
});


export const useStoreCart = create(
    persist(cartSlice, {
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage)
    })
)