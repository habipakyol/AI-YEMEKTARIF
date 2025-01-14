import { MealCategory } from '../types/recipe';

export const mealCategories: MealCategory[] = [
  {
    id: 'breakfast',
    title: 'Kahvaltılık',
    description: 'Güne enerjik başlamak için kahvaltı tarifleri',
    sampleIngredients: ['yumurta', 'ekmek', 'peynir', 'domates', 'zeytin', 'bal', 'reçel', 'tereyağı']
  },
  {
    id: 'lunch',
    title: 'Öğle Yemeği',
    description: 'Pratik ve doyurucu öğle yemeği tarifleri',
    sampleIngredients: ['makarna', 'pirinç', 'kıyma', 'tavuk', 'ton balığı', 'nohut']
  },
  {
    id: 'dinner',
    title: 'Akşam Yemeği',
    description: 'Besleyici ve lezzetli akşam yemeği tarifleri',
    sampleIngredients: ['patates', 'soğan', 'sarımsak', 'havuç', 'biber', 'domates']
  },
  {
    id: 'snack',
    title: 'Aperatif',
    description: 'Hızlı ve pratik atıştırmalıklar',
    sampleIngredients: ['mısır', 'peynir', 'yumurta', 'un', 'süt', 'yoğurt']
  },
  {
    id: 'healthy',
    title: 'Sağlıklı',
    description: 'Düşük kalorili ve besleyici tarifler',
    sampleIngredients: ['yulaf', 'muz', 'süt', 'yoğurt', 'bal', 'kuruyemiş']
  },
  {
    id: 'glutenFree',
    title: 'Glutensiz',
    description: 'Gluten içermeyen özel tarifler',
    sampleIngredients: ['pirinç', 'kinoa', 'mısır unu', 'patates', 'yumurta']
  },
  {
    id: 'vegetarian',
    title: 'Vejetaryen',
    description: 'Et içermeyen bitkisel tarifler',
    sampleIngredients: ['mercimek', 'nohut', 'fasulye', 'mantar', 'patlıcan']
  }
]; 