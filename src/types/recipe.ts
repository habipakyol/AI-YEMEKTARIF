export type MealType = 'breakfast' | 'lunch' | 'dinner' | 'snack' | 'healthy' | 'glutenFree' | 'vegetarian';

export interface MealCategory {
  id: MealType;
  title: string;
  description: string;
  sampleIngredients: string[];
}

export interface Recipe {
  title: string;
  cookingTime: number;
  difficulty: string;
  ingredients: string[];
  instructions: string[];
  type: MealType;
  calories?: number;
} 