export interface Item {
  id: string;
  name: string;
  price: number;
  // outras propriedades que Item pode ter
}

export interface CartItem extends Item {
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  totalAmount: number;
}

export interface CartContextType {
  cart: CartState;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
}
export interface ProductType {

  id: number;

  name: string;

  price: number;

}
