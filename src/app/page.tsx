'use client';

import React from 'react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

export default function Home() {
  return (
    <div className="flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full my-8">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">
            Öğrenci Mutfağı
          </h1>
          <p className="text-lg text-gray-600">
            Elindeki malzemelerle yapabileceğin tarifleri keşfet!
          </p>
          <div className="space-x-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => window.location.href = '/recipes'}
            >
              Tarif Bul
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.location.href = '/how-it-works'}
            >
              Nasıl Çalışır?
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}