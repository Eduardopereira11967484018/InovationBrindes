"use client";

import { Product } from '@/lib/types';
import { Card, CardContent, CardFooter } from './card';
import { Button } from './button';
import { useCart } from '@/context/CartContext';
import { ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useCart();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Combine main image with additional images
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
    <Card className="overflow-hidden">
      <div className="aspect-square relative group">
        <img
          src={allImages[currentImageIndex].url}
          alt={allImages[currentImageIndex].alt_image || product.nome}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Image Navigation */}
        <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            variant="secondary"
            size="icon"
            className="h-8 w-8 rounded-full bg-white/80 hover:bg-white"
            onClick={(e) => {
              e.preventDefault();
              previousImage();
            }}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="h-8 w-8 rounded-full bg-white/80 hover:bg-white"
            onClick={(e) => {
              e.preventDefault();
              nextImage();
            }}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
          {allImages.map((_, index) => (
            <button
              key={index}
              className={`h-1.5 rounded-full transition-all ${
                index === currentImageIndex ? 'w-4 bg-white' : 'w-1.5 bg-white/50'
              }`}
              onClick={(e) => {
                e.preventDefault();
                setCurrentImageIndex(index);
              }}
            />
          ))}
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg truncate">{product.nome}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mt-2">
          {product.descricao}
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          {allImages[currentImageIndex].alt_image}
        </p>
      </CardContent>

      <CardFooter className="p-4">
        <Button 
          className="w-full"
          onClick={() => dispatch({ type: 'ADD_ITEM', payload: product })}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}