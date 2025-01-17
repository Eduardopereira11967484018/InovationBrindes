import React from 'react';
import useCart from '../hooks/useCart';
import { ProductType } from '../types';

interface ProductProps {
  product: ProductType;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ ...product, id: product.id.toString(), quantity: 1 });
  };

  return (
    <div className="product">
      <h2>{product.name}</h2>
      <p>Preço: R${product.price.toFixed(2)}</p>
      <button onClick={handleAddToCart}>Adicionar ao Carrinho</button>
    </div>
  );
};

export default Product;