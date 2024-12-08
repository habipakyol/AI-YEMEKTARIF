export interface Ingredient {
    id: string;
    name: string;
    quantity?: string;
  }
  
  export interface Recipe {
    id: string;
    name: string;
    ingredients: Ingredient[];
    instructions: string[];
    cookingTime: number;
    difficulty: 'Kolay' | 'Orta' | 'Zor';
  }