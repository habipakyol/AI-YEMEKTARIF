'use client';

import React, { useState } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';
import { MealCategory } from '@/types/recipe';

interface IngredientInputProps {
  onAddIngredient: (ingredient: string) => void;
  categories: MealCategory[];
  selectedCategory?: string;
  onCategoryChange: (category: string) => void;
}

const IngredientInput = ({ 
  onAddIngredient, 
  categories,
  selectedCategory,
  onCategoryChange
}: IngredientInputProps) => {
  const [ingredient, setIngredient] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const currentCategory = categories.find(c => c.id === selectedCategory);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedIngredient = ingredient.trim().toLowerCase();
    
    if (trimmedIngredient) {
      const formattedIngredient = trimmedIngredient.charAt(0).toUpperCase() + trimmedIngredient.slice(1);
      onAddIngredient(formattedIngredient);
      setIngredient('');
    }
  };

  return (
    <div className="space-y-4">
      {/* Kategori Seçimi */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? 'primary' : 'outline'}
            size="sm"
            onClick={() => onCategoryChange(category.id)}
            className="w-full"
          >
            {category.title}
          </Button>
        ))}
      </div>

      {/* Seçili Kategori Bilgisi */}
      {currentCategory && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium text-gray-700 mb-2">{currentCategory.description}</h3>
          <div className="flex flex-wrap gap-2">
            {currentCategory.sampleIngredients.map((sample, index) => (
              <button
                key={index}
                onClick={() => onAddIngredient(sample)}
                className="text-sm bg-white px-3 py-1 rounded-full border hover:border-primary hover:text-primary transition-colors"
              >
                {sample}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Malzeme Giriş Formu */}
      <form onSubmit={handleSubmit} className="flex gap-2">
        <div className="flex-1">
          <Input
            type="text"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
            placeholder="Malzeme ekle veya yukarıdan seç"
            className="w-full"
            maxLength={50}
            required
          />
        </div>
        <Button type="submit" disabled={!ingredient.trim()}>
          Ekle
        </Button>
      </form>
    </div>
  );
};

export default IngredientInput;