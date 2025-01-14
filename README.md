# 🍳 Öğrenci Mutfağı - AI Destekli Yemek Tarifi Asistanı

<div align="center">
  <img src="public/logo.png" alt="Öğrenci Mutfağı Logo" width="200"/>
  <p><em>Elindeki malzemelerle yapabileceğin en iyi tarifler!</em></p>
</div>

## 📖 Proje Hakkında

Öğrenci Mutfağı, özellikle öğrencilerin ve yemek yapmaya yeni başlayanların mutfaktaki mevcut malzemelerle neler yapabileceklerini keşfetmelerine yardımcı olan yapay zeka destekli bir web uygulamasıdır. Google'ın Gemini AI teknolojisini kullanarak, kullanıcıların ellerindeki malzemelerle yapabilecekleri pratik, lezzetli ve ekonomik tarifleri önermektedir.

### 🎯 Temel Özellikler

- **Akıllı Tarif Önerileri**: Elinizdeki malzemelere göre özelleştirilmiş tarifler
- **Kategori Bazlı Arama**: Kahvaltı, öğle yemeği, akşam yemeği, atıştırmalık vb.
- **Süre Optimizasyonu**: Her aramada farklı pişirme sürelerine sahip 3 tarif:
  - ⚡ Hızlı Tarif (15 dk veya az)
  - ⏱️ Orta Süreli (15-30 dk arası)
  - 👨‍🍳 Detaylı Tarif (30 dk üzeri)
- **Sağlık Odaklı**: Kalori bilgisi ve özel diyet seçenekleri (Vejetaryen, Glutensiz)
- **Kullanıcı Dostu Arayüz**: Kolay malzeme ekleme ve tarif görüntüleme
- **Mobil Uyumlu**: Responsive tasarım
- **Tarif Paylaşımı**: Beğendiğiniz tarifleri arkadaşlarınızla paylaşma

## 🛠️ Teknoloji Yığını

### Frontend
- **Next.js 13**: React tabanlı modern web framework
- **TypeScript**: Tip güvenliği ve daha iyi geliştirici deneyimi
- **Tailwind CSS**: Özelleştirilebilir ve responsive tasarım
- **React Hooks**: State yönetimi ve yaşam döngüsü
- **Lucide Icons**: Modern ve şık ikonlar

### Backend
- **Next.js API Routes**: Serverless backend çözümü
- **Google Gemini AI**: Yapay zeka destekli tarif üretimi

### Diğer Araçlar
- **ESLint**: Kod kalitesi ve standartları
- **Prettier**: Kod formatlaması
- **React Hot Toast**: Kullanıcı bildirimleri

## 🏗️ Proje Yapısı

## �� Kurulum

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



