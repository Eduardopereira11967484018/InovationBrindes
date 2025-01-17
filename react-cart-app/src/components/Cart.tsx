import React from 'react';
import { useCart } from '../hooks/useCart';
import CartItem from './CartItem';

const Cart: React.FC = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div>
      <h2>Seu Carrinho</h2>
      {cartItems.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} onRemove={removeFromCart} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;