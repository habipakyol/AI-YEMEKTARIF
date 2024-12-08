import { GoogleGenerativeAI } from '@google/generative-ai';

// API key'i process.env'den alırken NEXT_PUBLIC_ prefix'ini kullanıyoruz
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY!);

export async function generateRecipe(ingredients: string[]) {
  try {
    // API key'in varlığını kontrol edelim
    if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
      throw new Error('API key is missing');
    }

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `
      Bu malzemelerle yapılabilecek pratik bir öğrenci yemeği tarifi oluştur: ${ingredients.join(', ')}

      Lütfen tarifi aşağıdaki formatta JSON olarak ver:
      {
        "title": "Yemek adı",
        "cookingTime": süre (dakika olarak),
        "difficulty": "Kolay, Orta veya Zor",
        "ingredients": ["malzeme ve miktarı"],
        "instructions": ["adım adım yapılış"]
      }
      
      Önemli: 
      - Sadece verilen malzemeleri kullan
      - Basit tarifler oluştur
      - Yanıtı kesinlikle JSON formatında ver, başka açıklama ekleme
    `;

    console.log('Sending request to Gemini API...'); // Debug için log

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    console.log('Received response:', text); // Debug için log

    return JSON.parse(text);
  } catch (error) {
    console.error('Detailed error:', error); // Detaylı hata logu
    throw error;
  }
}