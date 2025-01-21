"use client";

import { Product } from '@/lib/types'; // Certifique-se de que o tipo 'Product' está importado corretamente
import { Card, CardContent, CardFooter } from './card'; // Certifique-se de que o componente Card está disponível
import { Button } from './button'; // Certifique-se de que o componente Button está disponível
import { useCart } from '@/context/CartContext'; // Contexto para gerenciar o carrinho
import { ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react'; // Ícones
import { useState } from 'react';
import Image from 'next/image'; // Imagem do Next.js para otimização

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useCart(); // Utiliza o contexto para adicionar ao carrinho
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Controla qual imagem está sendo exibida
  
  // Combina imagem principal com imagens adicionais
  const allImages = [
    { url: product.imagem_produto, alt_image: product.alt_image },
    ...product.img_produtos
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === allImages.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? allImages.length - 1 : prev - 1
    );
  };

  return (
    <Card className="max-w-lg lg:max-w-2xl w-full overflow-hidden shadow-lg">
      {/* Exibição da imagem com navegação */}
      <div className="aspect-[4/3] relative group">
        <Image
          src={allImages[currentImageIndex].url}
          alt={allImages[currentImageIndex].alt_image || product.nome}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
  
        {/* Navegação de Imagens */}
        <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            variant="secondary"
            size="icon"
            className="h-10 w-10 rounded-full bg-white/90 hover:bg-white shadow-lg"
            onClick={(e) => {
              e.preventDefault();
              previousImage();
            }}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="h-10 w-10 rounded-full bg-white/90 hover:bg-white shadow-lg"
            onClick={(e) => {
              e.preventDefault();
              nextImage();
            }}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
  
        {/* Indicadores de Imagem */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {allImages.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all ${index === currentImageIndex ? 'w-5 bg-white shadow' : 'w-2 bg-white/50'}`}
              onClick={(e) => {
                e.preventDefault();
                setCurrentImageIndex(index);
              }}
            />
          ))}
        </div>
      </div>
  
      {/* Conteúdo do Produto */}
      <CardContent className="p-8 lg:p-10">
        <h3 className="font-semibold text-xl lg:text-2xl truncate">{product.nome}</h3>
        <p className="text-sm lg:text-base text-muted-foreground line-clamp-2 mt-2">{product.descricao}</p>
        <p className="text-sm lg:text-base text-muted-foreground mt-2">{allImages[currentImageIndex].alt_image}</p>
      </CardContent>
  
      {/* Rodapé com botão para adicionar ao carrinho */}
      <CardFooter className="p-8 lg:p-10">
        <Button
          className="w-full h-14 text-base lg:text-lg font-medium"
          onClick={() => dispatch({ type: 'ADD_ITEM', payload: product })}
        >
          <ShoppingCart className="mr-2 h-6 w-6" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
