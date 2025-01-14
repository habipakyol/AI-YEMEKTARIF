'use client';

import React from 'react';
import Card from '../common/Card';
import { Clock, ChefHat, ChevronDown, ChevronUp, Utensils, List } from 'lucide-react';

interface RecipeCardProps {
  recipe: {
    title: string;
    cookingTime: number;
    difficulty: string;
    ingredients: string[];
    instructions: string[];
    calories?: number;
  };
  className?: string;
}

const RecipeCard = ({ recipe, className }: RecipeCardProps) => {
  const [showInstructions, setShowInstructions] = React.useState(false);
  const [showIngredients, setShowIngredients] = React.useState(false);

  const getDifficultyColor = (time: number) => {
    if (time <= 15) return 'text-green-600';
    if (time <= 30) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getTimeLabel = (time: number) => {
    if (time <= 15) return '⚡ Hızlı Tarif';
    if (time <= 30) return '⏱️ Orta Süre';
    return '👨‍🍳 Detaylı Tarif';
  };

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
      <div className="p-6 space-y-4">
        {/* Başlık ve Süre */}
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-gray-900">{recipe.title}</h3>
          <span className={`${getDifficultyColor(recipe.cookingTime)} font-medium`}>
            {getTimeLabel(recipe.cookingTime)}
          </span>
        </div>

        {/* Bilgi Kartları */}
        <div className="grid grid-cols-3 gap-2 py-2">
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-4 h-4" />
            <span>{recipe.cookingTime} dk</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <ChefHat className="w-4 h-4" />
            <span>{recipe.difficulty}</span>
          </div>
          {recipe.calories && (
            <div className="flex items-center gap-2 text-gray-600">
              <Utensils className="w-4 h-4" />
              <span>{recipe.calories} kcal</span>
            </div>
          )}
        </div>

        {/* Malzemeler Bölümü */}
        <div className="border-t pt-4">
          <button
            onClick={() => setShowIngredients(!showIngredients)}
            className="flex items-center justify-between w-full text-left text-gray-900 font-medium"
          >
            <div className="flex items-center gap-2">
              <List className="w-5 h-5" />
              <span>Malzemeler</span>
            </div>
            {showIngredients ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
          
          {showIngredients && (
            <ul className="mt-3 space-y-2 text-gray-600">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  {ingredient}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Yapılış Bölümü */}
        <div className="border-t pt-4">
          <button
            onClick={() => setShowInstructions(!showInstructions)}
            className="flex items-center justify-between w-full text-left text-gray-900 font-medium"
          >
            <div className="flex items-center gap-2">
              <ChefHat className="w-5 h-5" />
              <span>Nasıl Yapılır?</span>
            </div>
            {showInstructions ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
          
          {showInstructions && (
            <ol className="mt-3 space-y-3 text-gray-600 list-decimal list-inside">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="pl-2">
                  {instruction.replace(/^\d+\.\s*/, '')} {/* Başındaki numarayı kaldır */}
                </li>
              ))}
            </ol>
          )}
        </div>

        {/* Paylaş/Kaydet Butonları */}
        <div className="border-t pt-4 flex justify-end gap-2">
          <button 
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: recipe.title,
                  text: `${recipe.title} tarifi - ${recipe.cookingTime} dakika`,
                  url: window.location.href
                });
              }
            }}
            className="text-sm text-gray-600 hover:text-primary transition-colors"
          >
            Paylaş
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;