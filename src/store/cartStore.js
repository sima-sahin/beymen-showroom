import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { shallow } from "zustand/shallow";

const useCartStore = create(   
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product) =>
        set((state) => {
          const existingItem = state.cart.find(
            (item) => item.id === product.id && item.size === product.size
          );

          const discountedPrice = product.discountRate >= 10
            ? (product.price / 100) * (100 - product.discountRate) 
            : product.price;

          if (existingItem) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id && item.size === product.size
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          } else {
            return {
              cart: [
                ...state.cart,
                { ...product, quantity: 1, discountedPrice: discountedPrice },
              ],
            };
          }
        }),

      removeFromCart: (id, size) =>
        set((state) => ({
          cart: state.cart.filter((item) => !(item.id === id && item.selectedSize === size)),
        })),

      clearCart: () => set({ cart: [] }),

      increment: (id, size) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id && item.size === size
              ? item.quantity < 5
                ? { ...item, quantity: item.quantity + 1 }
                : item
              : item
          ),
        })),

      decrement: (id, size) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id && item.size === size && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        })),

      wishlist: [],
      addToWishlist: (product) =>
        set((state) => {
          const exists = state.wishlist.some((item) => item.id === product.id);
          return exists ? state : { wishlist: [...state.wishlist, product] };
        }),

      removeFromWishlist: (id) =>
        set((state) => ({
          wishlist: state.wishlist.filter((item) => item.id !== id),
        })),

      moveToCart: (product, selectedSize) =>
        set((state) => {
          const sizeToAdd = selectedSize || (product.size.length > 0 ? product.size[0] : null);
          if (!sizeToAdd) return state; // Eğer beden yoksa işlem yapma.

          return {
            wishlist: state.wishlist.filter((item) => item.id !== product.id),
            cart: [...state.cart, { ...product, selectedSize: sizeToAdd }],
          };
        }),

      clearWishlist: () => set({ wishlist: [] }),

      saveForLater: (productId) =>
        set((state) => {
          const itemToSave = state.cart.find((item) => item.id === productId);
          if (!itemToSave) return {};

          const isExistInWishlist = state.wishlist.some(
            (wishItem) => wishItem.id === productId
          );

          let updatedWishlist = state.wishlist;
          if (!isExistInWishlist) {
            updatedWishlist = [...state.wishlist, itemToSave];
          }

          const updatedCart = state.cart.filter((cartItem) => cartItem.id !== productId);

          return {
            wishlist: updatedWishlist,
            cart: updatedCart,
          };
        }),
        isExistInWishlist: (productId) =>
          get().wishlist.some((item) => item.id === productId),
    }),
    {
      name: "cart-storage-beymen",
      storage: createJSONStorage(() => localStorage),
      version: 2, // Sürüm kontrol
      migrate: (persistedState, version) => {
        if (version < 2) {
          return { cart: [], wishlist: [] }; 
        }
        return persistedState;
      },
    }
  )
);

// Selectors
export const useCartCount = () =>
  useCartStore((state) => state.cart?.reduce((total, item) => total + (item.quantity || 0), 0) || 0, shallow);

export const useWishlistCount = () =>
  useCartStore((state) => state.wishlist.length);

export const useTotalPrice = () =>
  useCartStore((state) =>
    state.cart.reduce((total, item) => total + item.price * item.quantity, 0)
  );

export const useDiscountedPrice = () =>
  useCartStore((state) =>
    state.cart.reduce((total, item) => total + item.discountedPrice * item.quantity, 0)
  );

export const useShippingCost = () => {
  const discountedPrice = useDiscountedPrice();
  return discountedPrice >= 1500 ? 0 : 100;
};

export default useCartStore;