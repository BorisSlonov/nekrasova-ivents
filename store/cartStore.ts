// cartStore.ts
import create from 'zustand';

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  img: string;
}

interface CartState {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  updateQuantity: (id: number, quantity: number) => void;
}

const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (item) => set((state) => ({
    cart: [...state.cart, { ...item, quantity: 1 }]
  })),
  removeFromCart: (id) => set((state) => ({
    cart: state.cart.filter((item) => item.id !== id)
  })),
  clearCart: () => set({ cart: [] }),
  updateQuantity: (id, quantity) => set((state) => ({
    cart: state.cart.map((item) =>
      item.id === id ? { ...item, quantity } : item
    ),
  })),
}));

export default useCartStore;
