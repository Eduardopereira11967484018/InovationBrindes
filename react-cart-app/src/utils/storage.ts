export const getCartFromStorage = () => {
  const storedCart = localStorage.getItem('cart');
  return storedCart ? JSON.parse(storedCart) : { items: [], totalAmount: 0 };
};

interface CartState {
  items: any[];
  totalAmount: number;
}

export const saveCartToStorage = (state: CartState) => {
  localStorage.setItem('cart', JSON.stringify(state));
};

