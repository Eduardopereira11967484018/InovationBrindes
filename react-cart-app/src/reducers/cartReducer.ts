import { CartItem, CartState } from '../types';

export type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'CLEAR_CART' };

export const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      let updatedItems;
      if (existingItem) {
        updatedItems = state.items.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        updatedItems = [...state.items, { ...action.payload, quantity: 1 }];
      }
      const updatedTotalAmount = state.totalAmount + action.payload.price;
      return { items: updatedItems, totalAmount: updatedTotalAmount };
    case 'REMOVE_ITEM':
      const filteredItems = state.items.filter((item) => item.id !== action.payload);
      const itemToRemove = state.items.find((item) => item.id === action.payload);
      const newTotalAmount = itemToRemove ? state.totalAmount - itemToRemove.price * itemToRemove.quantity : state.totalAmount;
      return { items: filteredItems, totalAmount: newTotalAmount };
    case 'CLEAR_CART':
      return { items: [], totalAmount: 0 };
    default:
      return state;
  }
};