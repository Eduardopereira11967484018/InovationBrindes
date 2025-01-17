import React from 'react';
import useCart from '../hooks/useCart';
import { CartItem as CartItemType } from '../types';

interface CartItemProps {
  id: string;
  name: string;
  price: number;
}

const CartItem: React.FC<CartItemProps> = ({ id, name, price }) => {
  const { removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <h3>{name}</h3>
      <p>Preço: R${price.toFixed(2)}</p>
      <button onClick={() => removeFromCart(id)}>Remover</button>
    </div>
  );
};

export default CartItem;
