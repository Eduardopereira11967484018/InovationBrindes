import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const useCart = () => {
  const { state, dispatch } = useContext(CartContext);

  const addItem = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return {
    cartItems: state.items,
    totalAmount: state.totalAmount,
    addItem,
    removeItem,
    clearCart,
  };
};

export default useCart;