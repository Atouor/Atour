import type { AppLang } from './translations';

interface PortfolioCopy {
  name: string;
  role: string;
  headline: string;
  description: string;
  capabilitiesTitle: string;
  capabilities: { title: string; description: string }[];
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
    headline: "Project leadership and hands-on product development",
    description: "I work with clients to define priorities, lead teams through delivery, and design and build digital products from concept to launch.",
    capabilitiesTitle: "How I work",
    capabilities: [
      { title: "Project delivery", description: "Define scope, prioritize the backlog, and coordinate milestones and releases." },
      { title: "Team leadership", description: "Align developers around shared priorities, unblock work, and support code reviews and mentoring." },
      { title: "Client communication", description: "Clarify requirements and trade-offs with clients, share progress, and turn feedback into actionable work." },
      { title: "Product design and development", description: "Design and build web and mobile apps, dashboards, and internal tools with AI-assisted full-stack development." },
    ],
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
    headline: "مدیریت پروژه و توسعهٔ محصول",
    description: "با مشتری‌ها نیازها و اولویت‌ها را مشخص می‌کنم، تیم را در مسیر تحویل پروژه هدایت می‌کنم و محصول دیجیتال را از ایده تا انتشار طراحی و توسعه می‌دهم.",
    capabilitiesTitle: "حوزه‌های مسئولیت",
    capabilities: [
      { title: "مدیریت و تحویل پروژه", description: "دامنهٔ کار را مشخص می‌کنم، بک‌لاگ را اولویت‌بندی می‌کنم و تحویل هر مرحله و انتشار محصول را هماهنگ می‌کنم." },
      { title: "رهبری تیم", description: "اولویت‌ها را با تیم توسعه همسو می‌کنم، موانع را برطرف می‌کنم و در بازبینی کد و رشد اعضای تیم مشارکت دارم." },
      { title: "ارتباط با مشتری", description: "نیازها و گزینه‌ها را با مشتری روشن می‌کنم، پیشرفت را گزارش می‌دهم و بازخورد را به کار قابل اجرا تبدیل می‌کنم." },
      { title: "طراحی و توسعهٔ محصول", description: "از وب و موبایل تا داشبورد و ابزار داخلی، محصول را طراحی می‌کنم و با وایب کدنویسی فول‌استک می‌سازم." },
    ],
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
    headline: "Proje yönetimi ve ürün geliştirme",
    description: "Müşterilerle öncelikleri belirliyor, ekipleri teslimata yönlendiriyor ve dijital ürünleri fikirden yayına kadar tasarlayıp geliştiriyorum.",
    capabilitiesTitle: "Çalışma alanlarım",
    capabilities: [
      { title: "Proje teslimatı", description: "Kapsamı belirler, iş listesini önceliklendirir ve sürümleri koordine ederim." },
      { title: "Ekip liderliği", description: "Geliştiricileri ortak önceliklerde buluşturur, engelleri kaldırır ve kod incelemelerini desteklerim." },
      { title: "Müşteri iletişimi", description: "Gereksinimleri netleştirir, ilerlemeyi paylaşır ve geri bildirimi uygulanabilir işlere dönüştürürüm." },
      { title: "Ürün tasarımı ve geliştirme", description: "Yapay zekâ desteğiyle web ve mobil uygulamalar, panolar ve kurum içi araçlar tasarlayıp geliştiririm." },
    ],
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
    headline: "Projektleitung und praktische Produktentwicklung",
    description: "Ich kläre Prioritäten mit Kunden, leite Teams bei der Umsetzung und entwickle digitale Produkte von der Idee bis zur Veröffentlichung.",
    capabilitiesTitle: "Meine Verantwortungsbereiche",
    capabilities: [
      { title: "Projektsteuerung", description: "Umfang festlegen, das Backlog priorisieren und Meilensteine sowie Releases koordinieren." },
      { title: "Teamführung", description: "Entwickler auf gemeinsame Prioritäten ausrichten, Hindernisse beseitigen und Code-Reviews begleiten." },
      { title: "Kundenkommunikation", description: "Anforderungen klären, Fortschritte kommunizieren und Feedback in konkrete Aufgaben übersetzen." },
      { title: "Produktdesign und Entwicklung", description: "Web- und Mobilanwendungen, Dashboards und interne Tools mit KI-gestützter Full-Stack-Entwicklung umsetzen." },
    ],
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
    headline: "プロジェクト管理と実践的なプロダクト開発",
    description: "顧客と優先順位を整理し、チームをリードしながら、デジタルプロダクトを企画から公開まで設計・開発します。",
    capabilitiesTitle: "主な担当領域",
    capabilities: [
      { title: "プロジェクト進行", description: "スコープを明確にし、バックログの優先順位やリリースを調整します。" },
      { title: "チームリーダーシップ", description: "チームの優先順位をそろえ、課題解決、コードレビュー、メンタリングを支援します。" },
      { title: "顧客とのコミュニケーション", description: "要件を確認し、進捗を共有し、フィードバックを具体的なタスクに変えます。" },
      { title: "プロダクト設計・開発", description: "AI支援のフルスタック開発で、ウェブ、モバイル、ダッシュボード、社内ツールを構築します。" },
    ],
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
    headline: "Управление проектами и разработка продуктов",
    description: "Определяю приоритеты вместе с клиентами, руковожу командой и разрабатываю цифровые продукты от идеи до запуска.",
    capabilitiesTitle: "Мои зоны ответственности",
    capabilities: [
      { title: "Управление проектами", description: "Определяю объём работ, расставляю приоритеты бэклога и координирую релизы." },
      { title: "Руководство командой", description: "Согласую приоритеты, устраняю препятствия и участвую в ревью кода и наставничестве." },
      { title: "Работа с клиентами", description: "Уточняю требования, сообщаю о прогрессе и превращаю обратную связь в конкретные задачи." },
      { title: "Дизайн и разработка продуктов", description: "Создаю веб- и мобильные приложения, дашборды и внутренние инструменты с помощью ИИ." },
    ],
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
