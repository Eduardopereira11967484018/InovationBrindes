"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Package2 } from "lucide-react";

interface ProductImage {
  url: string;
  alt_image: string;
  id: number;
}

interface ProductData {
  nome: string;
  descricao: string;
  caracteristicas: string;
  dimensoes: string;
  img_produtos: ProductImage[];
  img_home_produto: string;
}

export default function Home() {
  const [product, setProduct] = useState<ProductData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("https://apihomolog.innovationbrindes.com.br/api/site/v2/produto/2484");
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-muted-foreground">Product not found</p>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <Carousel className="w-full">
            <CarouselContent>
              {product.img_produtos.map((image) => (
                <CarouselItem key={image.id}>
                  <div className="relative aspect-square">
                    <img
                      src={image.url}
                      alt={image.alt_image}
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground text-center">
                    {image.alt_image}
                  </p>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.nome}</h1>
            <Badge variant="secondary" className="mt-2">
              <Package2 className="mr-1 h-3 w-3" />
              {product.dimensoes}
            </Badge>
          </div>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-3">Descrição</h2>
            <p className="text-muted-foreground">{product.descricao}</p>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-3">Características</h2>
            <p className="text-muted-foreground">{product.caracteristicas}</p>
          </Card>
        </div>
      </div>
    </main>
  );
}