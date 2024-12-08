'use client';

import React from 'react';

interface IngredientListProps {
  ingredients: string[];
  onRemoveIngredient: (index: number) => void;
}

const IngredientList = ({ ingredients, onRemoveIngredient }: IngredientListProps) => {
  if (ingredients.length === 0) {
    return null;
  }

  return (
    <div className="mt-4">
      <h3 className="text-lg font-medium mb-2 text-textDark">Eklenen Malzemeler:</h3>
      <div className="flex flex-wrap gap-2">
        {ingredients.map((ingredient, index) => (
          <span
            key={index}
            className="bg-white border border-gray-200 px-3 py-1 rounded-full text-textDark flex items-center group"
          >
            {ingredient}
            <button
              onClick={() => onRemoveIngredient(index)}
              className="ml-2 text-gray-400 hover:text-secondary focus:outline-none"
            >
              ×
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default IngredientList;