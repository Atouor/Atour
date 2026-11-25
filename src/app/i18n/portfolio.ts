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
  kudosRole: string;
  current: string;
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
    background: 'My focus was Angular until July 2026. I built enterprise interfaces with TypeScript and led Agile delivery for the Kudos HR platform. Today my focus is full-stack vibe coding.',
    engineering: 'Engineering toolkit',
    masters: 'Master’s in Scientific Computing',
    university: 'Islamic Azad University',
    studyPeriod: 'Mehr 1405 (September 2026) – present',
    angularPeriod: 'October 2021 – July 2026',
    kudosRole: 'Project Manager, Kudos', current: 'Current role',
    pause: 'Pause animation', play: 'Play animation', skip: 'Skip to main content',
  },
  fa: {
    name: 'علیرضا حسین آقایی',
    role: 'وایب کدنویسی فول‌استک',
    headline: 'از ایده تا انتشار، اپ می‌سازم.',
    description: 'هر نوع اپی می‌سازم، از وب‌سایت و اپ موبایل تا داشبورد و ابزار داخلی. با کمک هوش مصنوعی همهٔ لایه‌ها را توسعه می‌دهم، از رابط کاربری تا API و داده.',
    background: 'تا مرداد ۱۴۰۵ تمرکزم روی Angular بود. با TypeScript رابط‌های سازمانی می‌ساختم و تحویل چابک پلتفرم منابع انسانی Kudos را هدایت می‌کردم. حالا تمرکزم روی وایب کدنویسی فول‌استک است.',
    engineering: 'ابزارها و مهارت‌های فنی',
    masters: 'کارشناسی ارشد محاسبات علمی',
    university: 'دانشگاه آزاد اسلامی',
    studyPeriod: 'مهر ۱۴۰۵ تا اکنون',
    angularPeriod: 'مهر ۱۴۰۰ تا مرداد ۱۴۰۵',
    kudosRole: 'مدیر پروژهٔ Kudos', current: 'سمت فعلی',
    pause: 'توقف انیمیشن', play: 'پخش انیمیشن', skip: 'رفتن به محتوای اصلی',
  },
  tr: {
    name: 'Alireza Hossein Aghayee',
    role: 'Full-stack Vibe Coding',
    headline: 'Fikirden yayına uygulama geliştiriyorum.',
    description: 'Web siteleri, mobil uygulamalar, panolar ve kurum içi araçlar dahil her tür uygulamayı geliştiriyorum. Arayüzden API ve veri katmanına kadar yapay zekâ destekli çalışıyorum.',
    background: 'Temmuz 2026’ya kadar Angular’a odaklandım. TypeScript ile kurumsal arayüzler geliştirdim ve Kudos İK platformunun çevik teslimatına liderlik ettim. Artık odağım full-stack vibe coding.',
    engineering: 'Geliştirme araçları',
    masters: 'Bilimsel Hesaplama Yüksek Lisansı',
    university: 'İslami Azad Üniversitesi',
    studyPeriod: 'Eylül 2026’dan beri', angularPeriod: 'Ekim 2021 – Temmuz 2026',
    kudosRole: 'Kudos Proje Yöneticisi', current: 'Mevcut görev',
    pause: 'Animasyonu duraklat', play: 'Animasyonu oynat', skip: 'Ana içeriğe geç',
  },
  de: {
    name: 'Alireza Hossein Aghayee',
    role: 'Full-Stack Vibe Coding',
    headline: 'Ich entwickle Apps von der Idee bis zum Start.',
    description: 'Ich entwickle Anwendungen jeder Art, von Websites und mobilen Apps bis zu Dashboards und internen Tools. KI unterstützt meine Arbeit an Oberfläche, APIs und Daten.',
    background: 'Bis Juli 2026 lag mein Fokus auf Angular. Ich entwickelte Unternehmensoberflächen mit TypeScript und leitete die agile Umsetzung der HR-Plattform Kudos. Heute liegt mein Fokus auf Full-Stack Vibe Coding.',
    engineering: 'Technische Grundlagen',
    masters: 'Masterstudium Wissenschaftliches Rechnen',
    university: 'Islamische Azad-Universität',
    studyPeriod: 'Seit September 2026', angularPeriod: 'Oktober 2021 – Juli 2026',
    kudosRole: 'Projektleiter bei Kudos', current: 'Aktuelle Position',
    pause: 'Animation pausieren', play: 'Animation abspielen', skip: 'Zum Hauptinhalt',
  },
  ja: {
    name: 'Alireza Hossein Aghayee',
    role: 'フルスタック・バイブコーディング',
    headline: 'アイデアから公開まで、アプリを作ります。',
    description: 'ウェブサイト、モバイルアプリ、ダッシュボード、社内ツールなど、あらゆる種類のアプリを開発します。AIを活用し、UIからAPIやデータ層まで手がけます。',
    background: '2026年7月までAngularを中心に、TypeScriptで業務用UIを開発し、人事プラットフォームKudosのアジャイル開発を主導しました。現在はフルスタックのバイブコーディングに注力しています。',
    engineering: '開発スキルとツール',
    masters: '科学計算 修士課程',
    university: 'イスラム・アザド大学',
    studyPeriod: '2026年9月から在学中', angularPeriod: '2021年10月 – 2026年7月',
    kudosRole: 'Kudos プロジェクトマネージャー', current: '現在の役職',
    pause: 'アニメーションを一時停止', play: 'アニメーションを再生', skip: 'メインコンテンツへ',
  },
  ru: {
    name: 'Алиреза Хосейн Агаи',
    role: 'Фулстек-вайб-кодинг',
    headline: 'Создаю приложения от идеи до запуска.',
    description: 'Разрабатываю приложения любого типа, включая сайты, мобильные приложения, дашборды и внутренние инструменты. Использую ИИ на всех уровнях, от интерфейса до API и данных.',
    background: 'До июля 2026 года я специализировался на Angular, разрабатывал корпоративные интерфейсы на TypeScript и руководил гибкой разработкой HR-платформы Kudos. Сейчас мой фокус — фулстек-вайб-кодинг.',
    engineering: 'Инструменты и навыки',
    masters: 'Магистратура по научным вычислениям',
    university: 'Исламский университет Азад',
    studyPeriod: 'С сентября 2026 года', angularPeriod: 'Октябрь 2021 – июль 2026',
    kudosRole: 'Руководитель проекта Kudos', current: 'Текущая должность',
    pause: 'Приостановить анимацию', play: 'Запустить анимацию', skip: 'К основному содержанию',
  },
};
