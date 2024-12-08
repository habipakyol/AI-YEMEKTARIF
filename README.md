# Öğrenci Mutfağı

Öğrenci Mutfağı, elinizdeki malzemelerle yapabileceğiniz yemek tariflerini AI destekli olarak öneren bir web uygulamasıdır. Bu proje, özellikle öğrencilerin mevcut malzemelerle pratik yemekler yapabilmesini amaçlamaktadır.

## 🚀 Özellikler

- Malzeme bazlı tarif önerileri
- AI destekli tarif oluşturma
- Responsive tasarım
- Kolay kullanıcı arayüzü
- Adım adım tarif talimatları
- Pişirme süresi ve zorluk seviyesi bilgisi

## 🛠️ Teknolojiler

- Next.js 13
- TypeScript
- Tailwind CSS
- Google Gemini AI API
- React Hooks

## 📦 Kurulum

1. Repoyu klonlayın:
```bash
git clone https://github.com/your-username/AI-YEMEKTARIF.git
```

2. Proje dizinine gidin:
```bash
cd AI-YEMEKTARIF
```

3. Bağımlılıkları yükleyin:
```bash
npm install
```

4. .env.local dosyası oluşturun ve Gemini API keyinizi ekleyin:
```env
NEXT_PUBLIC_GEMINI_API_KEY=your_api_key_here
```

5. Uygulamayı başlatın:
```bash
npm run dev
```

## 🔑 Environment Variables

Uygulamanın çalışması için aşağıdaki environment variable'ların tanımlanması gerekiyor:

- `NEXT_PUBLIC_GEMINI_API_KEY`: Google Gemini AI API anahtarı

## 🖥️ Kullanım

1. Ana sayfada "Tarif Bul" butonuna tıklayın
2. Elinizde olan malzemeleri listeye ekleyin
3. "Tarif Bul" butonuna basın
4. AI tarafından önerilen tarifleri inceleyin

## 👥 Katkıda Bulunma

1. Projeyi fork edin
2. Yeni bir feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun



