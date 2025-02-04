"use client";

import Image from 'next/image';


import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { ShoppingCart, Trash2, Plus, Minus } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function CartSheet() {
  const { state, dispatch } = useCart();

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-4 w-4" />
          {totalItems > 0 && (
            <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0">
              {totalItems}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        <div className="mt-8 space-y-4">
          {state.items.length === 0 ? (
            <p className="text-center text-muted-foreground">Your cart is empty</p>
          ) : (
            state.items.map((item) => (
              <div key={item.codigo_produto} className="flex gap-4 py-4 border-b">
                <Image
                  src={item.imagem_produto}
                  alt={item.nome}
                  width={80}
                  height={80}
                  className="object-cover rounded-md" // Garantindo que a imagem seja bem apresentada
                />
                
                <div className="flex-1">
                  <h3 className="font-medium">{item.nome}</h3>
                  <div className="flex items-center gap-2 mt-2">
                    {/* Botão para diminuir a quantidade */}
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.codigo_produto, item.quantity - 1)}
                      className="p-2"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    {/* Quantidade do item */}
                    <span className="text-lg font-semibold">{item.quantity}</span>
                    {/* Botão para aumentar a quantidade */}
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.codigo_produto, item.quantity + 1)}
                      className="p-2"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                    {/* Botão para remover o item */}
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.codigo_produto })}
                      className="p-2"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
