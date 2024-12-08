'use client';

import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo ve ana sayfa linki */}
          <Link href="/" className="flex items-center">
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
              Öğrenci Mutfağı
            </h1>
          </Link>

          {/* Navigasyon */}
          <nav className="flex items-center space-x-4">
            <Link href="/how-it-works" className="text-textDark hover:text-primary transition-colors">
              Nasıl Çalışır?
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;