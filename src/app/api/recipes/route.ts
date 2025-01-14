import { NextResponse } from 'next/server';
import { generateRecipe } from '../../../lib/gemini';

export async function POST(request: Request) {
  try {
    const { ingredients } = await request.json();

    if (!ingredients || !Array.isArray(ingredients) || ingredients.length < 2) {
      return NextResponse.json(
        { error: 'En az 2 malzeme gerekli' },
        { status: 400 }
      );
    }

    try {
      const result = await generateRecipe(ingredients);
      
      if (!result.recipes || result.recipes.length === 0) {
        return NextResponse.json(
          { error: 'Tarif oluşturulamadı' },
          { status: 404 }
        );
      }

      return NextResponse.json(result);
    } catch (error: unknown) {
      console.error('Tarif oluşturma hatası:', error);
      return NextResponse.json(
        { error: (error as Error).message || 'Tarif oluşturulurken bir hata oluştu' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('API hatası:', error);
    return NextResponse.json(
      { error: 'Geçersiz istek formatı' },
      { status: 400 }
    );
  }
}