import type { AppLang } from './translations';

interface PortfolioCopy {
  name: string;
  role: string;
  headline: string;
  description: string;
  background: string;
  engineering: string;
  masters: string;
  university: string;
  studyPeriod: string;
  angularPeriod: string;
  employmentPeriod: string;
  previousFocus: string;
  vibeSkills: string[];
  kudosRole: string;
  pause: string;
  play: string;
  skip: string;
}

export const PORTFOLIO: Record<AppLang, PortfolioCopy> = {
  en: {
    name: 'Alireza Hossein Aghayee',
    role: 'Full-stack Vibe Coding',
    headline: 'I build apps from idea to launch.',
    description: 'I build any kind of app, from websites and mobile apps to dashboards and internal tools. I use AI-assisted development across the stack, from the interface to APIs and data.',
    background: 'I work at Ravan Ertebat Asr as the project manager for Kudos and actively develop software. I worked with Angular through March 2026, the end of Iranian year 1404. My development focus is now full-stack vibe coding.',
    engineering: 'Engineering toolkit',
    masters: 'Master’s in Scientific Computing',
    university: 'Islamic Azad University',
    studyPeriod: 'Mehr 1405 (September 2026) – present',
    angularPeriod: 'Angular through March 2026',
    employmentPeriod: 'October 2021 – present', previousFocus: 'Previous development focus',
    kudosRole: 'Project Manager, Kudos',
    vibeSkills: [
      'AI-assisted development',
      'Writing prompts and providing project context',
      'Rapid prototyping',
      'Full-stack architecture',
      'API integration and data modeling',
      'AI-generated code review',
      'Debugging and testing',
      'Git and deployment',
    ],
    pause: 'Pause animation', play: 'Play animation', skip: 'Skip to main content',
  },
  fa: {
    name: 'علیرضا حسین آقایی',
    role: 'وایب کدنویسی فول‌استک',
    headline: 'از ایده تا انتشار، اپ می‌سازم.',
    description: 'هر نوع اپی می‌سازم، از وب‌سایت و اپ موبایل تا داشبورد و ابزار داخلی. با کمک هوش مصنوعی همهٔ لایه‌ها را توسعه می‌دهم، از رابط کاربری تا API و داده.',
    background: 'در شرکت روان ارتباط عصر مدیر پروژهٔ Kudos هستم و همچنان کد می‌زنم. تا اسفند ۱۴۰۴ با Angular کار می‌کردم و اکنون تمرکزم بر وایب کدنویسی فول‌استک است.',
    engineering: 'ابزارها و مهارت‌های فنی',
    masters: 'کارشناسی ارشد محاسبات علمی',
    university: 'دانشگاه آزاد اسلامی',
    studyPeriod: 'مهر ۱۴۰۵ تا اکنون',
    angularPeriod: 'Angular تا اسفند ۱۴۰۴',
    employmentPeriod: 'مهر ۱۴۰۰ تا اکنون', previousFocus: 'تمرکز فنی پیشین',
    kudosRole: 'مدیر پروژهٔ Kudos',
    vibeSkills: [
      'توسعه با کمک هوش مصنوعی',
      'پرامپت‌نویسی و ارائهٔ زمینهٔ پروژه',
      'نمونه‌سازی سریع',
      'معماری فول‌استک',
      'یکپارچه‌سازی API و مدل‌سازی داده',
      'بازبینی کد تولیدشده با هوش مصنوعی',
      'اشکال‌زدایی و تست',
      'کنترل نسخه با Git و انتشار',
    ],
    pause: 'توقف انیمیشن', play: 'پخش انیمیشن', skip: 'رفتن به محتوای اصلی',
  },
  tr: {
    name: 'Alireza Hossein Aghayee',
    role: 'Full-stack Vibe Coding',
    headline: 'Fikirden yayına uygulama geliştiriyorum.',
    description: 'Web siteleri, mobil uygulamalar, panolar ve kurum içi araçlar dahil her tür uygulamayı geliştiriyorum. Arayüzden API ve veri katmanına kadar yapay zekâ destekli çalışıyorum.',
    background: 'Ravan Ertebat Asr’da Kudos proje yöneticisiyim ve aktif olarak yazılım geliştiriyorum. Mart 2026’ya kadar Angular ile çalıştım. Şimdi full-stack vibe coding’e odaklanıyorum.',
    engineering: 'Geliştirme araçları',
    masters: 'Bilimsel Hesaplama Yüksek Lisansı',
    university: 'İslami Azad Üniversitesi',
    studyPeriod: 'Eylül 2026’dan beri', angularPeriod: 'Mart 2026’ya kadar Angular',
    employmentPeriod: 'Ekim 2021 – günümüz', previousFocus: 'Önceki geliştirme odağı',
    kudosRole: 'Kudos Proje Yöneticisi',
    vibeSkills: [
      'Yapay zekâ destekli geliştirme',
      'İstem yazımı ve proje bağlamı',
      'Hızlı prototipleme',
      'Full-stack mimari',
      'API entegrasyonu ve veri modelleme',
      'Yapay zekâ kodunun incelenmesi',
      'Hata ayıklama ve test',
      'Git ve dağıtım',
    ],
    pause: 'Animasyonu duraklat', play: 'Animasyonu oynat', skip: 'Ana içeriğe geç',
  },
  de: {
    name: 'Alireza Hossein Aghayee',
    role: 'Full-Stack Vibe Coding',
    headline: 'Ich entwickle Apps von der Idee bis zum Start.',
    description: 'Ich entwickle Anwendungen jeder Art, von Websites und mobilen Apps bis zu Dashboards und internen Tools. KI unterstützt meine Arbeit an Oberfläche, APIs und Daten.',
    background: 'Bei Ravan Ertebat Asr leite ich das Projekt Kudos und entwickle weiterhin Software. Bis März 2026 arbeitete ich mit Angular. Heute liegt mein Entwicklungsfokus auf Full-Stack Vibe Coding.',
    engineering: 'Technische Grundlagen',
    masters: 'Masterstudium Wissenschaftliches Rechnen',
    university: 'Islamische Azad-Universität',
    studyPeriod: 'Seit September 2026', angularPeriod: 'Angular bis März 2026',
    employmentPeriod: 'Oktober 2021 – heute', previousFocus: 'Früherer Entwicklungsschwerpunkt',
    kudosRole: 'Projektleiter bei Kudos',
    vibeSkills: [
      'KI-gestützte Entwicklung',
      'Prompts und Projektkontext',
      'Schnelles Prototyping',
      'Full-Stack-Architektur',
      'API-Integration und Datenmodellierung',
      'Review von KI-generiertem Code',
      'Debugging und Tests',
      'Git und Deployment',
    ],
    pause: 'Animation pausieren', play: 'Animation abspielen', skip: 'Zum Hauptinhalt',
  },
  ja: {
    name: 'Alireza Hossein Aghayee',
    role: 'フルスタック・バイブコーディング',
    headline: 'アイデアから公開まで、アプリを作ります。',
    description: 'ウェブサイト、モバイルアプリ、ダッシュボード、社内ツールなど、あらゆる種類のアプリを開発します。AIを活用し、UIからAPIやデータ層まで手がけます。',
    background: 'Ravan Ertebat AsrでKudosのプロジェクトを管理し、現在も開発を担当しています。2026年3月まではAngularを使っていました。現在はフルスタックのバイブコーディングに注力しています。',
    engineering: '開発スキルとツール',
    masters: '科学計算 修士課程',
    university: 'イスラム・アザド大学',
    studyPeriod: '2026年9月から在学中', angularPeriod: '2026年3月までAngularを使用',
    employmentPeriod: '2021年10月 – 現在', previousFocus: '以前の開発分野',
    kudosRole: 'Kudos プロジェクトマネージャー',
    vibeSkills: [
      'AI支援開発',
      'プロンプト作成とプロジェクト情報の整理',
      '迅速なプロトタイピング',
      'フルスタック設計',
      'API連携とデータモデリング',
      'AI生成コードのレビュー',
      'デバッグとテスト',
      'Gitとデプロイ',
    ],
    pause: 'アニメーションを一時停止', play: 'アニメーションを再生', skip: 'メインコンテンツへ',
  },
  ru: {
    name: 'Алиреза Хосейн Агаи',
    role: 'Фулстек-вайб-кодинг',
    headline: 'Создаю приложения от идеи до запуска.',
    description: 'Разрабатываю приложения любого типа, включая сайты, мобильные приложения, дашборды и внутренние инструменты. Использую ИИ на всех уровнях, от интерфейса до API и данных.',
    background: 'Я работаю в Ravan Ertebat Asr, руковожу проектом Kudos и продолжаю писать код. До марта 2026 года я работал с Angular. Сейчас мой фокус в разработке — фулстек-вайб-кодинг.',
    engineering: 'Инструменты и навыки',
    masters: 'Магистратура по научным вычислениям',
    university: 'Исламский университет Азад',
    studyPeriod: 'С сентября 2026 года', angularPeriod: 'Angular до марта 2026 года',
    employmentPeriod: 'Октябрь 2021 – настоящее время', previousFocus: 'Предыдущее направление разработки',
    kudosRole: 'Руководитель проекта Kudos',
    vibeSkills: [
      'Разработка с помощью ИИ',
      'Промпты и контекст проекта',
      'Быстрое прототипирование',
      'Фулстек-архитектура',
      'Интеграция API и моделирование данных',
      'Ревью кода, созданного ИИ',
      'Отладка и тестирование',
      'Git и развёртывание',
    ],
    pause: 'Приостановить анимацию', play: 'Запустить анимацию', skip: 'К основному содержанию',
  },
};
