import React, { createContext, useReducer, useEffect } from 'react';
import { cartReducer } from '../reducers/cartReducer';
import { getCartFromStorage, saveCartToStorage } from '../utils/storage';
import { CartItem, CartState } from '../types';

interface CartContextType {
  cart: CartItem[];
  totalAmount: number;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const initialState: CartState = getCartFromStorage();
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    saveCartToStorage(cart);
  }, [cart]);

  const addToCart = (item: CartItem) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeFromCart = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  return (
    <CartContext.Provider value={{ cart: cart.items, totalAmount: cart.totalAmount, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = React.useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartContext, CartProvider, useCart };
