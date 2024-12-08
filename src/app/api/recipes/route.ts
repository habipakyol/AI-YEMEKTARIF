import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY!);

async function generateRecipe(ingredients: string[]) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `
    Verilen malzemelerle yapılabilecek bir tarif oluştur: ${ingredients.join(', ')}

    Yanıtı tam olarak aşağıdaki formatta JSON olarak ver:
    {
      "recipes": [
        {
          "title": "Tarif adı",
          "cookingTime": 20,
          "difficulty": "Kolay",
          "ingredients": [
            "2 yumurta",
            "1 domates"
          ],
          "instructions": [
            "1. Domatesleri doğrayın",
            "2. Yumurtaları kırın"
          ]
        }
      ]
    }

    ÖNEMLİ: 
    - Yanıtı sadece JSON formatında ver
    - Başka açıklama ekleme
    - JSON formatına kesinlikle uy
    - Türkçe karakterler kullan
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    console.log('AI Response:', text); // Debug için

    // JSON parsing'den önce basic temizlik
    const cleanedText = text.trim().replace(/```json\n?|\n?```/g, '');
    
    const parsed = JSON.parse(cleanedText);

    // Veri yapısını kontrol et
    if (!parsed.recipes || !Array.isArray(parsed.recipes)) {
      throw new Error('Invalid response format');
    }

    return parsed;
  } catch (error) {
    console.error('Parse error:', error);
    // Fallback response
    return {
      recipes: [{
        title: `${ingredients.join(', ')} ile Pratik Tarif`,
        cookingTime: 15,
        difficulty: "Kolay",
        ingredients: ingredients.map(ing => `${ing} - miktar tercihe göre`),
        instructions: [
          "1. Tüm malzemeleri hazırlayın",
          "2. Malzemeleri tercihinize göre birleştirin",
          "3. Damak zevkinize göre pişirin"
        ]
      }]
    };
  }
}

export async function POST(request: Request) {
  try {
    const { ingredients } = await request.json();

    if (!ingredients || !Array.isArray(ingredients) || ingredients.length === 0) {
      return NextResponse.json(
        { error: 'Lütfen en az bir malzeme ekleyin.' },
        { status: 400 }
      );
    }

    const recipeData = await generateRecipe(ingredients);
    return NextResponse.json(recipeData);
  } catch (error) {
    console.error('Recipe generation error:', error);
    return NextResponse.json(
      { 
        error: 'Bir hata oluştu, lütfen tekrar deneyin.' 
      },
      { status: 500 }
    );
  }
}