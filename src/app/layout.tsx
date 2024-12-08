import React from 'react';
import { Inter } from 'next/font/google';
import Header from '../components/layout/Header';  // Bu satırı değiştirdik
import Footer from '../components/layout/Footer';  // Bu satırı değiştirdik
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Öğrenci Mutfağı',
  description: 'Elindeki malzemelerle yapabileceğin tarifler',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow bg-background">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}