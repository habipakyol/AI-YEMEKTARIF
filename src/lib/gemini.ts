import { GoogleGenerativeAI } from '@google/generative-ai';
import { mealCategories } from '../data/mealCategories';

// API anahtarını client tarafında kullanmak yerine, server-side'a taşıyalım
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function generateRecipe(ingredients: string[], selectedCategory?: string) {
  try {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error('API anahtarı eksik');
    }

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Prompt'u süre çeşitliliği için güncelleyelim
    const prompt = `Aşağıdaki malzemelerle ${selectedCategory ? mealCategories.find(c => c.id === selectedCategory)?.title.toLowerCase() : ''} tarifleri oluştur: ${ingredients.join(', ')}

Lütfen tam olarak 3 farklı tarif oluştur:
1. Hızlı tarif (15 dakika veya daha az)
2. Orta süreli tarif (15-30 dakika arası)
3. Detaylı tarif (30 dakikadan fazla)

Yanıtı tam olarak bu JSON formatında ver (başka metin ekleme):
{
  "recipes": [
    {
      "title": "Hızlı [Yemek Adı]",
      "cookingTime": 15,
      "difficulty": "Çok Kolay",
      "type": "${selectedCategory || 'general'}",
      "calories": 300,
      "ingredients": [
        "2 adet yumurta",
        "1 adet soğan"
      ],
      "instructions": [
        "1. İlk adım",
        "2. İkinci adım"
      ]
    },
    {
      "title": "Pratik [Yemek Adı]",
      "cookingTime": 25,
      "difficulty": "Orta",
      "type": "${selectedCategory || 'general'}",
      "calories": 400,
      "ingredients": [
        "malzeme ve miktarı"
      ],
      "instructions": [
        "1. İlk adım",
        "2. İkinci adım"
      ]
    },
    {
      "title": "Özel [Yemek Adı]",
      "cookingTime": 40,
      "difficulty": "Biraz Uğraştırır",
      "type": "${selectedCategory || 'general'}",
      "calories": 500,
      "ingredients": [
        "malzeme ve miktarı"
      ],
      "instructions": [
        "1. İlk adım",
        "2. İkinci adım"
      ]
    }
  ]
}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    console.log('AI Yanıtı:', text);

    try {
      const cleanText = text.replace(/```json\n?|\n?```/g, '').trim();
      const parsed = JSON.parse(cleanText);

      if (!parsed.recipes || !Array.isArray(parsed.recipes) || parsed.recipes.length !== 3) {
        throw new Error('Geçersiz veri yapısı - 3 tarif gerekli');
      }

      // Tarifleri süreye göre sırala
      parsed.recipes.sort((a, b) => a.cookingTime - b.cookingTime);

      // Her tarifi doğrula ve süre sınırlarını kontrol et
      parsed.recipes = parsed.recipes.map((recipe, index) => {
        const cookingTime = Number(recipe.cookingTime) || (index === 0 ? 15 : index === 1 ? 25 : 40);
        
        // Süre sınırlarını zorla
        const adjustedTime = index === 0 
          ? Math.min(cookingTime, 15)  // Hızlı tarif için max 15 dk
          : index === 1 
            ? Math.max(Math.min(cookingTime, 30), 16)  // Orta süre için 16-30 dk
            : Math.max(cookingTime, 31);  // Uzun tarif için min 31 dk

        return {
          title: String(recipe.title || ''),
          cookingTime: adjustedTime,
          difficulty: index === 0 
            ? 'Çok Kolay' 
            : index === 1 
              ? 'Orta' 
              : 'Biraz Uğraştırır',
          type: String(recipe.type || 'general'),
          calories: Number(recipe.calories) || 300 + (index * 100),
          ingredients: Array.isArray(recipe.ingredients) ? recipe.ingredients.map(String) : [],
          instructions: Array.isArray(recipe.instructions) ? recipe.instructions.map(String) : []
        };
      });

      return parsed;
    } catch (parseError) {
      console.error('JSON parse hatası:', parseError, '\nYanıt:', text);
      throw new Error('Tarif formatı geçersiz');
    }
  } catch (error) {
    console.error('API hatası:', error);
    throw error;
  }
}