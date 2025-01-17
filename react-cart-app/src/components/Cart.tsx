import React from 'react';
import useCart from '../hooks/useCart';
import CartItem from './CartItem';
import { CartItem as CartItemType } from '../types';

const Cart: React.FC = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h2>Seu Carrinho</h2>
      {cart.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <ul>
          {cart.map((item: CartItemType) => (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
