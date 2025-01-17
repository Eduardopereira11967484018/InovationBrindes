import React from 'react';
import { useCart } from '../hooks/useCart';
import { CartItemProps } from '../types';

const CartItem: React.FC<CartItemProps> = ({ id, name, price }) => {
  const { removeItem } = useCart();

  return (
    <div className="cart-item">
      <h3>{name}</h3>
      <p>Preço: R${price.toFixed(2)}</p>
      <button onClick={() => removeItem(id)}>Remover</button>
    </div>
  );
};

export default CartItem;