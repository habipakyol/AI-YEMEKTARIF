import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo ve açıklama */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-primary">Öğrenci Mutfağı</h2>
            <p className="text-gray-600">
              Elindeki malzemelerle yapabileceğin lezzetli tarifler.
            </p>
          </div>

          {/* Hızlı linkler */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/recipes" className="text-gray-600 hover:text-gray-900">
                  Tarifler
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-gray-600 hover:text-gray-900">
                  Nasıl Çalışır?
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">İletişim</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">
                <a href="mailto:info@ogrencimutfagi.com" className="hover:text-gray-900">
                  info@ogrencimutfagi.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Telif hakkı */}
        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          <p>© {new Date().getFullYear()} Öğrenci Mutfağı. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;