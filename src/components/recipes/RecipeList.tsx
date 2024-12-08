'use client';

import React from 'react';
import RecipeCard from './RecipeCard';

interface Recipe {
  title: string;
  cookingTime: number;
  difficulty: string;
  ingredients: string[];
  instructions: string[];
}

interface RecipeListProps {
  recipes: Recipe[];
}

const RecipeList = ({ recipes }: RecipeListProps) => {
  if (recipes.length === 0) {
    return (
      <div className="text-center text-gray-600 py-8">
        Henüz tarif bulunamadı.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;