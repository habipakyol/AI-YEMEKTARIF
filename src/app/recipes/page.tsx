'use client';

import React, { useState } from 'react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import IngredientInput from '../../components/recipes/IngredientInput';
import IngredientList from '../../components/recipes/IngredientList';
import RecipeList from '../../components/recipes/RecipeList';
import { toast } from 'react-hot-toast';
import { mealCategories } from '../../data/mealCategories';

// Tip tanımı
interface Recipe {
  title: string;
  cookingTime: number;
  difficulty: string;
  ingredients: string[];
  instructions: string[];
}

export default function RecipesPage() {
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);
    const [recipes, setRecipes] = useState<Recipe[]>([]);
  
    const handleFindRecipes = async () => {
      setIsLoading(true);
      try {
        if (ingredients.length < 2) {
          toast.error('Lütfen en az 2 malzeme ekleyin');
          return;
        }

        const response = await fetch('/api/recipes', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            ingredients,
            category: selectedCategory 
          }),
        });

        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.error || 'Tarif oluşturulurken bir hata oluştu');
        }

        if (!data.recipes || data.recipes.length === 0) {
          toast.error('Bu malzemelerle tarif bulunamadı');
          return;
        }

        setRecipes(data.recipes);
        toast.success(`${data.recipes.length} tarif bulundu!`);
      } catch (error: unknown) {
        toast.error((error as Error).message);
      } finally {
        setIsLoading(false);
      }
    };
  
    return (
        <div className="container mx-auto px-4 py-8 bg-gray-50"> {/* bg-gray-50 ekledik */}
        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <div className="space-y-6">
                <div>
                <h1 className="text-2xl font-bold text-textDark mb-2">Tarif Bul</h1>
            <p className="text-gray-600">
              Yemek türünü seç, malzemeleri ekle, sana uygun tarifleri bulalım!
            </p>
                </div>
              <IngredientInput 
                onAddIngredient={(ingredient) => setIngredients([...ingredients, ingredient])}
                categories={mealCategories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
              <IngredientList 
                ingredients={ingredients} 
                onRemoveIngredient={(index) => setIngredients(ingredients.filter((_, i) => i !== index))}
              />
  
              {ingredients.length > 0 && (
                <div className="pt-4">
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full"
                    onClick={handleFindRecipes}
                    isLoading={isLoading}
                  >
                    {isLoading ? 'Tarifler Oluşturuluyor...' : 'Tarif Bul'}
                  </Button>
                </div>
              )}
            </div>
          </Card>
  
          {recipes.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold">
                {recipes.length} Tarif Bulundu
              </h2>
              <RecipeList recipes={recipes} />
            </div>
          )}
        </div>
      </div>
    );
  }