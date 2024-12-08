'use client';

import React from 'react';
import Card from '../../components/common/Card';

export default function HowItWorks() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-textDark text-center mb-8">
          Nasıl Çalışır?
        </h1>

        <div className="space-y-6">
          <Card>
            <h2 className="text-xl font-semibold text-textDark mb-4 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
              1. Malzemeleri Gir
            </h2>
            <p className="text-textDark">
              Mutfağınızda bulunan malzemeleri listeye ekleyin. Ne kadar çok malzeme eklerseniz, o kadar çeşitli tarif önerileri alabilirsiniz.
            </p>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold text-textDark mb-4 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
              2. Tarif Bul
            </h2>
            <p className="text-textDark">
              Malzemeleri girdikten sonra &quot;Tarif Bul&quot; butonuna tıklayın. Yapay zeka sistemimiz, girdiğiniz malzemelerle yapabileceğiniz en uygun tarifleri oluşturacak.
            </p>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold text-textDark mb-4 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
              3. Tarifleri İncele
            </h2>
            <p className="text-textDark">
              Size özel oluşturulan tarifleri inceleyin. Her tarif için malzeme listesi, hazırlama süresi, zorluk derecesi ve adım adım yapılış talimatları bulunmaktadır.
            </p>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold mb-4">İpuçları</h2>
            <ul className="list-disc list-inside space-y-2 text-textDark">
              <li>En az 3 malzeme girmeye çalışın</li>
              <li>Temel malzemeleri (tuz, karabiber gibi) eklemenize gerek yok</li>
              <li>Malzemelerin miktarını belirtmenize gerek yok</li>
              <li>Eğer spesifik bir yemek türü istiyorsanız (kahvaltı, akşam yemeği gibi), bunu malzeme olarak ekleyebilirsiniz</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}