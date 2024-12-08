'use client';

import React, { useState } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';

interface IngredientInputProps {
  onAddIngredient: (ingredient: string) => void;
}

const IngredientInput = ({ onAddIngredient }: IngredientInputProps) => {
  const [ingredient, setIngredient] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (ingredient.trim()) {
      onAddIngredient(ingredient.trim());
      setIngredient('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <div className="flex-1">
        <Input
          type="text"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
          placeholder="Malzeme ekle (örn: domates, yumurta)"
          className="w-full"
        />
      </div>
      <Button type="submit" disabled={!ingredient.trim()}>
        Ekle
      </Button>
    </form>
  );
};

export default IngredientInput;