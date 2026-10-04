import type { SiteTranslations } from './translations';

type AdditionalLang = 'tr' | 'de' | 'ja' | 'ru';

export const ADDITIONAL_TRANSLATIONS: Record<AdditionalLang, SiteTranslations> = {
  tr: {
    nav: { home: 'Ana səhifə', about: 'Haqqımda', experience: 'Təcrübə', skills: 'Bacarıqlar', contact: 'Əlaqə' },
    hero: {
      badge: 'Front-end proqramçı', title: 'Salam, mən', titleName: 'Əlirza',
      subtitle: 'Baş front-end proqramçı · Komanda rəhbəri',
      desc: 'Rəvan Ertebat Əsr şirkətində Angular ilə korporativ tətbiqlər hazırlayır və Kudos HR platformasının Agile komandasına rəhbərlik edirəm.',
      btnWork: 'Təcrübəyə bax →', btnContact: 'Əlaqə məlumatları', scroll: 'aşağı',
      float1Title: 'Angular', float1Sub: 'İxtisas', float2Title: 'Agile Lead', float2Sub: 'Dəqiq təcrübə',
      stats: { years: 'İl təcrübə', project: 'Əsas layihə', skills: 'Əsas bacarıq' },
    },
    about: {
      tag: 'Haqqımda', heading: 'Mən', headingAccent: 'kiməm',
      desc: 'Korporativ məhsullar üçün etibarlı və genişlənə bilən front-end sistemləri hazırlayan kompüter elmləri məzunuyam.',
      cards: {
        profile: { title: 'Profil', text: 'Əlirza Hüseyn Ağayi — 26 yaş, Ərdəbil, İran. Mühəqqiq Ərdəbili Universitetinin kompüter elmləri bakalavrı.' },
        role: { title: 'Hazırkı vəzifə', text: 'Rəvan Ertebat Əsr şirkətində komanda rəhbəri və front-end proqramçı; Kudos HR platformasının Agile çatdırılmasını və əsas UI inkişafını idarə edirəm.' },
        focus: { title: 'Texniki istiqamət', text: 'Angular və TypeScript ilə korporativ veb tətbiqlər, analitik panellər, performans optimallaşdırılması və komanda mentorluğu.' },
      },
    },
    experience: {
      tag: 'İş təcrübəsi', heading: 'İş və', headingAccent: 'təhsil',
      jobs: [{ role: 'Baş front-end proqramçı və komanda rəhbəri', company: 'Rəvan Ertebat Əsr', period: 'Mehr 1400 — indi', bullets: ['Jira ilə Agile sprintlərdə front-end komandasına rəhbərlik.', 'Kudos korporativ HR sistemində layihə rəhbərliyi və UI inkişafı.', 'Angular və TypeScript ilə analitik panellər, admin və istifadəçi modulları.', 'Performans optimallaşdırılması, kod icmalı və gənc proqramçılara mentorluq.'], tags: ['Angular', 'TypeScript', 'Agile', 'Team Lead'] }],
      education: { degree: 'Kompüter elmləri bakalavrı', school: 'Mühəqqiq Ərdəbili Universiteti', note: 'Alqoritmlər, verilənlər strukturları və kompüter elmləri nəzəriyyəsi.' },
    },
    skills: {
      tag: 'Bacarıqlar', heading: 'Nələri', headingAccent: 'bilirəm', agileTitle: 'Agile və rəhbərlik', otherTitle: 'Digər bacarıqlar', langsTitle: 'Dillər',
      agile: ['Scrum', 'Sprint planlama', 'Backlog grooming', 'Kod icmalı', 'Komanda rəhbərliyi', 'Mentorluq', 'Komandalararası əməkdaşlıq'],
      other: ['Java / Android', 'REST API', 'Figma', 'Performans', 'Komponent arxitekturası', 'Dashboard', 'Less', 'Python'],
      spoken: [{ name: 'İran Azərbaycan türkcəsi', level: 'Ana dili', flag: '🇮🇷' }, { name: 'Fars dili', level: 'Ana dili', flag: '🇮🇷' }, { name: 'İngilis dili', level: 'Orta səviyyədən yuxarı', flag: '🇬🇧' }],
    },
    contact: { tag: 'Əlaqə', heading: 'Əlaqə', headingAccent: 'məlumatları', desc: 'Peşəkar əməkdaşlıq üçün aşağıdakı kanallardan mənimlə əlaqə saxlaya bilərsiniz.', email: 'E-poçt', phone: 'Telefon', location: 'Məkan', locationVal: 'Ərdəbil, İran' },
    footer: { tagline: 'Əlirza Hüseyn Ağayi — Front-end proqramçı', copyright: 'Əlirza Hüseyn Ağayi · Angular ilə hazırlanıb' },
    theme: { light: '☀️ İşıqlı rejim', dark: '🌙 Qaranlıq rejim' }, lang: { switchTo: 'Dil' },
  },
  de: {
    nav: { home: 'Start', about: 'Über mich', experience: 'Erfahrung', skills: 'Kenntnisse', contact: 'Kontakt' },
    hero: { badge: 'Frontend-Entwickler', title: 'Hallo, ich bin', titleName: 'Alireza', subtitle: 'Lead Frontend-Entwickler · Teamleiter', desc: 'Ich entwickle Angular-Unternehmensanwendungen bei Ravan Ertebat Asr und leite das Agile-Team der HR-Plattform Kudos.', btnWork: 'Erfahrung ansehen →', btnContact: 'Kontaktdaten', scroll: 'scrollen', float1Title: 'Angular', float1Sub: 'Spezialgebiet', float2Title: 'Agile Lead', float2Sub: 'Genaue Erfahrung', stats: { years: 'Jahre', project: 'Hauptprojekt', skills: 'Kernkompetenzen' } },
    about: { tag: 'Über mich', heading: 'Wer ich', headingAccent: 'bin', desc: 'Informatikabsolvent mit Fokus auf zuverlässige, skalierbare Frontend-Systeme für Unternehmensprodukte.', cards: { profile: { title: 'Profil', text: 'Alireza Hossein Aghayee — 26, aus Ardabil, Iran. B.Sc. Informatik an der Mohaghegh Ardabili Universität.' }, role: { title: 'Aktuelle Position', text: 'Teamleiter und Frontend-Entwickler bei Ravan Ertebat Asr; verantwortlich für Agile Delivery und die zentrale UI-Entwicklung der HR-Plattform Kudos.' }, focus: { title: 'Technischer Fokus', text: 'Unternehmens-Webanwendungen mit Angular und TypeScript, Analyse-Dashboards, Performance und Team-Mentoring.' } } },
    experience: { tag: 'Erfahrung', heading: 'Beruf &', headingAccent: 'Ausbildung', jobs: [{ role: 'Lead Frontend-Entwickler & Teamleiter', company: 'Ravan Ertebat Asr', period: 'Sept. 2021 — heute', bullets: ['Leitung des Frontend-Teams in Agile-Sprints mit Jira.', 'Projektleitung und UI-Entwicklung für die HR-Plattform Kudos.', 'Entwicklung von Dashboards, Admin-Panels und Benutzermodulen.', 'Performance-Optimierung, Code-Reviews und Mentoring.'], tags: ['Angular', 'TypeScript', 'Agile', 'Team Lead'] }], education: { degree: 'B.Sc. Informatik', school: 'Mohaghegh Ardabili Universität', note: 'Algorithmen, Datenstrukturen und Grundlagen der Informatik.' } },
    skills: { tag: 'Kenntnisse', heading: 'Was ich', headingAccent: 'kann', agileTitle: 'Agile & Führung', otherTitle: 'Weitere Kenntnisse', langsTitle: 'Sprachen', agile: ['Scrum', 'Sprintplanung', 'Backlog-Pflege', 'Code-Review', 'Teamleitung', 'Mentoring', 'Teamübergreifende Zusammenarbeit'], other: ['Java / Android', 'REST APIs', 'Figma', 'Performance', 'Komponentenarchitektur', 'Dashboards', 'Less', 'Python'], spoken: [{ name: 'Iranisches Aserbaidschanisch', level: 'Muttersprache', flag: '🇮🇷' }, { name: 'Persisch', level: 'Muttersprache', flag: '🇮🇷' }, { name: 'Englisch', level: 'Gute Mittelstufe', flag: '🇬🇧' }] },
    contact: { tag: 'Kontakt', heading: 'Kontakt', headingAccent: 'aufnehmen', desc: 'Für berufliche Anfragen erreichen Sie mich über die folgenden Kanäle.', email: 'E-Mail', phone: 'Telefon', location: 'Ort', locationVal: 'Ardabil, Iran' }, footer: { tagline: 'Alireza Hossein Aghayee — Frontend-Entwickler', copyright: 'Alireza Hossein Aghayee · Erstellt mit Angular' }, theme: { light: '☀️ Heller Modus', dark: '🌙 Dunkler Modus' }, lang: { switchTo: 'Sprache' },
  },
  ja: {
    nav: { home: 'ホーム', about: '自己紹介', experience: '経歴', skills: 'スキル', contact: '連絡先' },
    hero: { badge: 'フロントエンド開発者', title: 'こんにちは、', titleName: 'Alirezaです', subtitle: 'リード・フロントエンド開発者 · チームリード', desc: 'Ravan Ertebat AsrでAngularの業務アプリを開発し、Kudos人事プラットフォームのアジャイルチームを率いています。', btnWork: '経歴を見る →', btnContact: '連絡先', scroll: 'スクロール', float1Title: 'Angular', float1Sub: '専門分野', float2Title: 'Agile Lead', float2Sub: '正確な経験期間', stats: { years: '年の経験', project: '主要プロジェクト', skills: '主要スキル' } },
    about: { tag: '自己紹介', heading: '私に', headingAccent: 'ついて', desc: '企業向けの信頼性と拡張性に優れたフロントエンドシステムを構築する情報科学専攻の卒業生です。', cards: { profile: { title: 'プロフィール', text: 'Alireza Hossein Aghayee — 26歳、イラン・アルダビール在住。Mohaghegh Ardabili大学で情報科学の学士号を取得。' }, role: { title: '現在の役割', text: 'Ravan Ertebat Asrのチームリード兼フロントエンド開発者として、Kudos人事プラットフォームの開発を担当しています。' }, focus: { title: '技術分野', text: 'AngularとTypeScriptによる業務Webアプリ、分析ダッシュボード、性能改善、チーム育成。' } } },
    experience: { tag: '職務経験', heading: '職歴と', headingAccent: '学歴', jobs: [{ role: 'リード・フロントエンド開発者／チームリード', company: 'Ravan Ertebat Asr', period: '2021年9月 — 現在', bullets: ['Jiraを用いたアジャイルスプリントでフロントエンドチームを主導。', 'Kudos人事プラットフォームのプロジェクト管理とUI開発。', '分析ダッシュボード、管理画面、ユーザーモジュールを開発。', '性能改善、コードレビュー、若手開発者の指導。'], tags: ['Angular', 'TypeScript', 'Agile', 'Team Lead'] }], education: { degree: '情報科学 学士', school: 'Mohaghegh Ardabili大学', note: 'アルゴリズム、データ構造、情報科学理論。' } },
    skills: { tag: 'スキル', heading: 'できる', headingAccent: 'こと', agileTitle: 'アジャイルとリーダーシップ', otherTitle: 'その他のスキル', langsTitle: '言語', agile: ['Scrum', 'スプリント計画', 'バックログ整理', 'コードレビュー', 'チームリード', 'メンタリング', 'チーム間連携'], other: ['Java / Android', 'REST API', 'Figma', '性能改善', 'コンポーネント設計', 'ダッシュボード', 'Less', 'Python'], spoken: [{ name: 'イラン・アゼルバイジャン語', level: '母語', flag: '🇮🇷' }, { name: 'ペルシャ語', level: '母語', flag: '🇮🇷' }, { name: '英語', level: '中上級', flag: '🇬🇧' }] },
    contact: { tag: '連絡先', heading: 'お問い合わせ', headingAccent: '情報', desc: '仕事のご相談は、以下の方法でご連絡ください。', email: 'メール', phone: '電話', location: '所在地', locationVal: 'イラン、アルダビール' }, footer: { tagline: 'Alireza Hossein Aghayee — フロントエンド開発者', copyright: 'Alireza Hossein Aghayee · Angularで制作' }, theme: { light: '☀️ ライトモード', dark: '🌙 ダークモード' }, lang: { switchTo: '言語' },
  },
  ru: {
    nav: { home: 'Главная', about: 'Обо мне', experience: 'Опыт', skills: 'Навыки', contact: 'Контакты' },
    hero: { badge: 'Frontend-разработчик', title: 'Привет, я', titleName: 'Алиреза', subtitle: 'Ведущий frontend-разработчик · Руководитель команды', desc: 'Я разрабатываю корпоративные Angular-приложения в Ravan Ertebat Asr и руковожу Agile-командой HR-платформы Kudos.', btnWork: 'Посмотреть опыт →', btnContact: 'Контакты', scroll: 'прокрутить', float1Title: 'Angular', float1Sub: 'Специализация', float2Title: 'Agile Lead', float2Sub: 'Точный стаж', stats: { years: 'Лет опыта', project: 'Главный проект', skills: 'Ключевые навыки' } },
    about: { tag: 'Обо мне', heading: 'Кто', headingAccent: 'я', desc: 'Выпускник факультета компьютерных наук, специализирующийся на надёжных и масштабируемых frontend-системах.', cards: { profile: { title: 'Профиль', text: 'Алиреза Хосейн Агаи — 26 лет, Ардебиль, Иран. Бакалавр компьютерных наук Университета Мохагег Ардебили.' }, role: { title: 'Текущая роль', text: 'Руководитель команды и frontend-разработчик в Ravan Ertebat Asr; отвечаю за Agile-разработку HR-платформы Kudos.' }, focus: { title: 'Технический фокус', text: 'Корпоративные приложения на Angular и TypeScript, аналитические панели, оптимизация и наставничество.' } } },
    experience: { tag: 'Опыт', heading: 'Работа и', headingAccent: 'образование', jobs: [{ role: 'Ведущий frontend-разработчик и руководитель команды', company: 'Ravan Ertebat Asr', period: 'Сентябрь 2021 — настоящее время', bullets: ['Руководство frontend-командой в Agile-спринтах с Jira.', 'Управление проектом и разработка UI HR-платформы Kudos.', 'Разработка аналитических панелей, админки и пользовательских модулей.', 'Оптимизация, code review и наставничество разработчиков.'], tags: ['Angular', 'TypeScript', 'Agile', 'Team Lead'] }], education: { degree: 'Бакалавр компьютерных наук', school: 'Университет Мохагег Ардебили', note: 'Алгоритмы, структуры данных и теория компьютерных наук.' } },
    skills: { tag: 'Навыки', heading: 'Что я', headingAccent: 'умею', agileTitle: 'Agile и лидерство', otherTitle: 'Другие навыки', langsTitle: 'Языки', agile: ['Scrum', 'Планирование спринтов', 'Backlog grooming', 'Code review', 'Руководство командой', 'Наставничество', 'Межкомандная работа'], other: ['Java / Android', 'REST API', 'Figma', 'Оптимизация', 'Архитектура компонентов', 'Панели данных', 'Less', 'Python'], spoken: [{ name: 'Иранский азербайджанский', level: 'Родной', flag: '🇮🇷' }, { name: 'Персидский', level: 'Родной', flag: '🇮🇷' }, { name: 'Английский', level: 'Выше среднего', flag: '🇬🇧' }] },
    contact: { tag: 'Контакты', heading: 'Связаться', headingAccent: 'со мной', desc: 'По рабочим вопросам свяжитесь со мной одним из способов ниже.', email: 'Эл. почта', phone: 'Телефон', location: 'Местоположение', locationVal: 'Ардебиль, Иран' }, footer: { tagline: 'Алиреза Хосейн Агаи — Frontend-разработчик', copyright: 'Алиреза Хосейн Агаи · Создано на Angular' }, theme: { light: '☀️ Светлая тема', dark: '🌙 Тёмная тема' }, lang: { switchTo: 'Язык' },
  },
};
