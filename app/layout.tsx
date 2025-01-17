import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { CartProvider } from '../context/CartContext';
import { CartSheet } from '../components/ui/cart-sheet';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Innovation Brindes - Shopping Cart',
  description: 'Shop for promotional products',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <div className="min-h-screen">
            <header className="bg-green-300 border-b" >
              <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">Innovation Brindes</h1>
                <CartSheet />
              </div>
            </header>
            {children}
          </div>
        </CartProvider>
      </body>
    </html>
  );
}