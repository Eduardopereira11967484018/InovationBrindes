import React from 'react';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
import Product from './components/Product';

const App = () => {
  return (
    <CartProvider>
      <div>
        <h1>Loja de Produtos</h1>
        <Product product={{ id: 1, name: 'Sample Product', price: 100 }} />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;