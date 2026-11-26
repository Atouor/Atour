import type { AppLang } from './translations';

interface ResumeLabels {
  title: string;
  exportPdf: string;
  summary: string;
  projects: string;
  education: string;
  campus: string;
  thesis: string;
  employment: string;
  angular: string;
  bachelorStatus: string;
}

export const RESUME_LABELS: Record<AppLang, ResumeLabels> = {
  en: {
    title: 'Resume', exportPdf: 'Export PDF', summary: 'Professional summary', projects: 'Selected projects', education: 'Education',
    campus: 'Electronic Branch', thesis: 'Intended thesis area: artificial intelligence.',
    employment: 'Oct 2021 – Present', angular: 'Angular development focus through March 2026.',
    bachelorStatus: 'Started 2019 · Completed',
  },
  fa: {
    title: 'رزومه', exportPdf: 'خروجی PDF', summary: 'خلاصهٔ حرفه‌ای', projects: 'پروژه‌های منتخب', education: 'تحصیلات',
    campus: 'واحد الکترونیکی', thesis: 'حوزهٔ مدنظر برای پایان‌نامه: هوش مصنوعی.',
    employment: 'اکتبر ۲۰۲۱ تا اکنون', angular: 'تمرکز توسعه بر Angular تا مارس ۲۰۲۶.',
    bachelorStatus: 'شروع ۲۰۱۹ · فارغ‌التحصیل',
  },
  tr: {
    title: 'Özgeçmiş', exportPdf: 'PDF olarak kaydet', summary: 'Profesyonel özet', projects: 'Seçili projeler', education: 'Eğitim',
    campus: 'Elektronik Şube', thesis: 'Planlanan tez alanı: yapay zekâ.',
    employment: 'Ekim 2021 – günümüz', angular: 'Mart 2026’ya kadar Angular odaklı geliştirme.',
    bachelorStatus: 'Başlangıç 2019 · Mezun',
  },
  de: {
    title: 'Lebenslauf', exportPdf: 'PDF exportieren', summary: 'Kurzprofil', projects: 'Ausgewählte Projekte', education: 'Ausbildung',
    campus: 'Online-Campus', thesis: 'Geplanter Themenbereich der Masterarbeit: künstliche Intelligenz.',
    employment: 'Okt. 2021 – heute', angular: 'Entwicklungsschwerpunkt Angular bis März 2026.',
    bachelorStatus: 'Beginn 2019 · Abgeschlossen',
  },
  ja: {
    title: '職務経歴書', exportPdf: 'PDFとして保存', summary: '職務要約', projects: '主なプロジェクト', education: '学歴',
    campus: 'オンライン部門', thesis: '修士論文で取り組みたい分野：人工知能。',
    employment: '2021年10月～現在', angular: '2026年3月までAngularを中心に開発。',
    bachelorStatus: '2019年入学・卒業',
  },
  ru: {
    title: 'Резюме', exportPdf: 'Экспорт в PDF', summary: 'Профессиональный профиль', projects: 'Избранные проекты', education: 'Образование',
    campus: 'Электронный филиал', thesis: 'Планируемая область магистерской работы: искусственный интеллект.',
    employment: 'Октябрь 2021 – настоящее время', angular: 'До марта 2026 года основным инструментом разработки был Angular.',
    bachelorStatus: 'Начало в 2019 г. · Окончено',
  },
};
