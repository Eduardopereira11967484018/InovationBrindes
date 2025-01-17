export interface ProductImage {
    url: string;
    caracteristicas: string;
    id: number;
    alt_image?: string;
  }
  
  export interface Product {
    codigo_produto: number;
    nome: string;
    descricao: string;
    imagem_produto: string;
    caracteristicas: string;
    quantidade_minima: number;
    dimensoes: string;
    img_produtos: ProductImage[];
    alt_image: string;
  }
  
  export interface CartItem extends Product {
    quantity: number;
  }
  
  export type CartAction =
    | { type: 'ADD_ITEM'; payload: Product }
    | { type: 'REMOVE_ITEM'; payload: number }
    | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } }
    | { type: 'LOAD_CART'; payload: CartItem[] };
  
  export interface CartState {
    items: CartItem[];
  }