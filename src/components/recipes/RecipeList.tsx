'use client';

import React from 'react';
import RecipeCard from './RecipeCard';
import { Recipe } from '@/types/recipe';

interface RecipeListProps {
  recipes: Recipe[];
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {recipes.map((recipe, index) => (
        <RecipeCard 
          key={index} 
          recipe={recipe}
          className="h-full"
        />
      ))}
    </div>
  );
};

export default RecipeList;