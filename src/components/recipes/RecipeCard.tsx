'use client';

import React from 'react';
import Card from '../common/Card';
import { Clock, ChefHat, ChevronDown, ChevronUp } from 'lucide-react';

interface RecipeCardProps {
  recipe: {
    title: string;
    cookingTime: number;
    difficulty: string;
    ingredients: string[];
    instructions: string[];
  };
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const [showInstructions, setShowInstructions] = React.useState(false);

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <div className="space-y-4">
        {/* Başlık ve Meta Bilgiler */}
        <div className="border-b pb-4">
        <h3 className="text-xl font-bold text-textDark mb-3">
            {recipe.title}
          </h3>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{recipe.cookingTime} dakika</span>
            </div>
            <div className="flex items-center gap-1">
              <ChefHat className="w-4 h-4" />
              <span>{recipe.difficulty}</span>
            </div>
          </div>
        </div>

        {/* Malzemeler */}
        <div>
        <h4 className="font-medium text-textDark mb-2 flex items-center gap-2">
    <span className="bg-primary/10 p-1 rounded">Malzemeler</span>
  </h4>
  <ul className="list-none space-y-1">
    {recipe.ingredients.map((ingredient, index) => (
      <li key={index} className="flex items-center gap-2 text-textDark">
        <span className="w-2 h-2 bg-primary/60 rounded-full"></span>
        {ingredient}
      </li>
            ))}
          </ul>
        </div>

        {/* Yapılış */}
        <div className="space-y-4">
          <button
            onClick={() => setShowInstructions(!showInstructions)}
            className="flex items-center justify-between w-full px-4 py-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <span className="font-medium text-gray-900">Yapılışı</span>
            {showInstructions ? (
              <ChevronUp className="w-5 h-5 text-gray-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-600" />
            )}
          </button>

          {showInstructions && (
            <div className="pl-4 space-y-3 animate-fadeIn">
              {recipe.instructions.map((step, index) => (
                <div key={index} className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-sm text-primary">
                    {index + 1}
                  </span>
                  <p className="text-gray-600">{step}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default RecipeCard;