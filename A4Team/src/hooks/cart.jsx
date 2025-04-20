import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";


const useStoreCart = create(
  persist((set) => ({
    cart: { buy: [] },
    totalOriginalPrice: 0,
    totalDiscountPrice: 0,
    totalFinalPrice: 0,


    addCartBuy: (newCart) => {
      set((state) => {
        const updatedCart = [...state.cart.buy, newCart];
        
        const totalOriginalPrice = parseFloat(
          updatedCart.reduce((sum, item) => sum + item.original_price, 0).toFixed(2)
        );
        const totalDiscountPrice = parseFloat(
          updatedCart.reduce((sum, item) => sum + (item.original_price - item.finalPrice), 0).toFixed(2)
        );
        const totalFinalPrice = parseFloat(
          updatedCart.reduce((sum, item) => sum + item.finalPrice, 0).toFixed(2)
        );

        return {
          cart: { buy: updatedCart },
          totalOriginalPrice,
          totalDiscountPrice,
          totalFinalPrice
        };
      });
    },

    removeCartBuy: (productId) => {
      set((state) => {
        const updatedCart = state.cart.buy.filter((product) => product.id !== productId);

        const totalOriginalPrice = parseFloat(
          updatedCart.reduce((sum, item) => sum + item.original_price, 0).toFixed(2)
        );
        const totalDiscountPrice = parseFloat(
          updatedCart.reduce((sum, item) => sum + (item.original_price - item.finalPrice), 0).toFixed(2)
        );
        const totalFinalPrice = parseFloat(
          updatedCart.reduce((sum, item) => sum + item.finalPrice, 0).toFixed(2)
        );

        return {
          cart: { buy: updatedCart },
          totalOriginalPrice,
          totalDiscountPrice,
          totalFinalPrice
        };
      });
    },


    setCartCaculation: (totalOriginalPrice, totalDiscountPrice, totalFinalPrice) => {
      set({
        totalOriginalPrice: parseFloat(totalOriginalPrice.toFixed(2)),
        totalDiscountPrice: parseFloat(totalDiscountPrice.toFixed(2)),
        totalFinalPrice: parseFloat(totalFinalPrice.toFixed(2))
      });
    }
  }), {
    name: "cart-storage",
    storage: createJSONStorage(() => localStorage),
  })
);

export default useStoreCart;