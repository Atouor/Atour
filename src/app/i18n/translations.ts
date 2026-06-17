export type AppLang = 'en' | 'fa';

export interface SiteTranslations {
  nav: { home: string; about: string; experience: string; skills: string; contact: string };
  hero: {
    badge: string; title: string; titleName: string; subtitle: string; desc: string;
    btnWork: string; btnContact: string; scroll: string;
    float1Title: string; float1Sub: string; float2Title: string; float2Sub: string;
    stats: { years: string; project: string; skills: string };
  };
  about: {
    tag: string; heading: string; headingAccent: string; desc: string;
    cards: { profile: { title: string; text: string }; role: { title: string; text: string }; focus: { title: string; text: string } };
  };
  experience: {
    tag: string; heading: string; headingAccent: string;
    jobs: { role: string; company: string; period: string; bullets: string[]; tags: string[] }[];
    education: { degree: string; school: string; period: string; note: string };
  };
  skills: {
    tag: string; heading: string; headingAccent: string;
    agileTitle: string; otherTitle: string; langsTitle: string;
    agile: string[]; other: string[];
    spoken: { name: string; level: string; flag: string }[];
  };
  contact: {
    tag: string; heading: string; headingAccent: string; desc: string;
    email: string; phone: string; location: string; locationVal: string;
  };
  footer: { tagline: string; copyright: string };
  theme: { light: string; dark: string };
  lang: { switchTo: string };
}

export const TRANSLATIONS: Record<AppLang, SiteTranslations> = {
  en: {
    nav: { home: 'Home', about: 'About', experience: 'Experience', skills: 'Skills', contact: 'Contact' },
    hero: {
      badge: 'Front-End Developer',
      title: "Hi, I'm",
      titleName: 'Alireza',
      subtitle: 'Lead Front-End Developer · Team Lead',
      desc: 'I design and deliver enterprise Angular applications at Ravan Ertebat Asr, leading Agile teams on the Kudos HR platform for 4+ years.',
      btnWork: 'View Experience →',
      btnContact: 'Contact Details',
      scroll: 'scroll',
      float1Title: 'Angular', float1Sub: 'Specialty',
      float2Title: 'Agile Lead', float2Sub: '4+ Years',
      stats: { years: 'Years', project: 'Main Project', skills: 'Core Skills' },
    },
    about: {
      tag: 'About Me',
      heading: 'Who I',
      headingAccent: 'am',
      desc: 'Computer Science graduate focused on building reliable, scalable front-end systems for enterprise products.',
      cards: {
        profile: {
          title: 'Profile',
          text: 'Alireza Hossein Aghayee — 26, based in Ardabil, Iran. B.Sc. in Computer Science from Mohaghegh Ardabili University.',
        },
        role: {
          title: 'Current Role',
          text: 'Team lead and front-end developer at Ravan Ertebat Asr, managing Agile delivery and core UI development for the Kudos HR platform.',
        },
        focus: {
          title: 'Technical Focus',
          text: 'Enterprise web applications with Angular and TypeScript, analytical dashboards, performance optimization, and team mentorship.',
        },
      },
    },
    experience: {
      tag: 'Experience',
      heading: 'Work &',
      headingAccent: 'education',
      jobs: [{
        role: 'Lead Front-End Developer & Team Lead',
        company: 'Ravan Ertebat Asr',
        period: 'Oct 2021 — Present',
        bullets: [
          'Lead front-end team in Agile sprints with Jira — planning, standups, and iterative delivery.',
          'Project manager & UI developer for Kudos — enterprise HR platform for employee recognition.',
          'Built analytical dashboards, admin panels, and user modules with Angular & TypeScript.',
          'Optimized client-side performance, enforced code reviews, and mentored junior developers.',
        ],
        tags: ['Angular', 'TypeScript', 'Agile', 'Team Lead'],
      }],
      education: {
        degree: 'B.Sc. Computer Science',
        school: 'Mohaghegh Ardabili University',
        period: '2019 — 2025',
        note: 'Algorithms, data structures, and computer science theory.',
      },
    },
    skills: {
      tag: 'Skills',
      heading: 'What I',
      headingAccent: 'know',
      agileTitle: 'Agile & Leadership',
      otherTitle: 'Also Proficient',
      langsTitle: 'Languages',
      agile: ['Scrum', 'Sprint Planning', 'Backlog Grooming', 'Code Review', 'Team Leadership', 'Mentoring', 'Cross-team Collaboration'],
      other: ['Java / Android', 'REST APIs', 'Figma', 'Performance Tuning', 'Component Architecture', 'Dashboard Dev', 'Less', 'Python'],
      spoken: [
        { name: 'Persian', level: 'Native', flag: '🇮🇷' },
        { name: 'Turkish', level: 'Native', flag: '🇹🇷' },
        { name: 'English', level: 'Upper Intermediate', flag: '🇬🇧' },
      ],
    },
    contact: {
      tag: 'Contact',
      heading: 'Contact',
      headingAccent: 'details',
      desc: 'For professional inquiries, you can reach me through the channels below.',
      email: 'Email', phone: 'Phone', location: 'Location', locationVal: 'Ardabil, Iran',
    },
    footer: {
      tagline: 'Alireza Hossein Aghayee — Front-End Developer',
      copyright: 'Alireza Hossein Aghayee · Built with Angular',
    },
    theme: { light: '☀️ Light Mode', dark: '🌙 Dark Mode' },
    lang: { switchTo: 'فارسی' },
  },
  fa: {
    nav: { home: 'خانه', about: 'درباره من', experience: 'تجربه', skills: 'مهارت‌ها', contact: 'تماس' },
    hero: {
      badge: 'توسعه‌دهنده فرانت‌اند',
      title: 'سلام، من',
      titleName: 'علیرضا',
      subtitle: 'توسعه‌دهنده ارشد فرانت‌اند · لید تیم',
      desc: 'طراحی و توسعه اپلیکیشن‌های سازمانی با Angular در شرکت روان ارتباط عصر — بیش از ۴ سال لید تیم اجایل روی پلتفرم HR به نام Kudos.',
      btnWork: 'مشاهده سوابق ←',
      btnContact: 'اطلاعات تماس',
      scroll: 'اسکرول',
      float1Title: 'Angular', float1Sub: 'تخصص اصلی',
      float2Title: 'Agile Lead', float2Sub: '۴+ سال',
      stats: { years: 'سال تجربه', project: 'پروژه اصلی', skills: 'مهارت کلیدی' },
    },
    about: {
      tag: 'درباره من',
      heading: 'من',
      headingAccent: 'کیستم',
      desc: 'فارغ‌التحصیل علوم کامپیوتر با تمرکز بر توسعه سیستم‌های فرانت‌اند پایدار و مقیاس‌پذیر برای محصولات سازمانی.',
      cards: {
        profile: {
          title: 'پروفایل',
          text: 'علیرضا حسین آقایی — ۲۶ ساله، اردبیل. کارشناسی علوم کامپیوتر از دانشگاه محقق اردبیلی.',
        },
        role: {
          title: 'شغل فعلی',
          text: 'لید تیم و توسعه‌دهنده فرانت‌اند در شرکت روان ارتباط عصر؛ مدیریت تحویل اجایل و توسعه رابط کاربری پلتفرم HR به نام Kudos.',
        },
        focus: {
          title: 'تمرکز فنی',
          text: 'اپلیکیشن‌های وب سازمانی با Angular و TypeScript، داشبوردهای تحلیلی، بهینه‌سازی عملکرد و منتورینگ تیم.',
        },
      },
    },
    experience: {
      tag: 'تجربه کاری',
      heading: 'سوابق',
      headingAccent: 'کاری و تحصیلی',
      jobs: [{
        role: 'توسعه‌دهنده ارشد فرانت‌اند و لید تیم',
        company: 'روان ارتباط عصر',
        period: 'مهر ۱۴۰۰ — اکنون',
        bullets: [
          'لید تیم فرانت‌اند در محیط اجایل با Jira — برنامه‌ریزی اسپرینت، استندآپ روزانه و تحویل تکراری.',
          'مدیر پروژه و توسعه‌دهنده UI سیستم Kudos — پلتفرم HR سازمانی برای قدردانی از کارکنان.',
          'طراحی و توسعه داشبوردهای تحلیلی، پنل ادمین و ماژول‌های کاربری با Angular و TypeScript.',
          'بهینه‌سازی عملکرد سمت کلاینت، بازبینی کد و منتورینگ توسعه‌دهندگان جونیور.',
        ],
        tags: ['Angular', 'TypeScript', 'Agile', 'Team Lead'],
      }],
      education: {
        degree: 'کارشناسی علوم کامپیوتر',
        school: 'دانشگاه محقق اردبیلی',
        period: '۱۳۹۸ — ۱۴۰۴',
        note: 'پایه قوی در ریاضیات، الگوریتم‌ها و ساختمان داده.',
      },
    },
    skills: {
      tag: 'مهارت‌ها',
      heading: 'چیزهایی که',
      headingAccent: 'بلدم',
      agileTitle: 'اجایل و رهبری',
      otherTitle: 'سایر مهارت‌ها',
      langsTitle: 'زبان‌ها',
      agile: ['اسکرام', 'برنامه‌ریزی اسپرینت', 'گروومینگ بک‌لاگ', 'بازبینی کد', 'رهبری تیم', 'منتورینگ', 'همکاری بین‌تیمی'],
      other: ['Java / Android', 'REST API', 'Figma', 'بهینه‌سازی عملکرد', 'معماری کامپوننت', 'توسعه داشبورد', 'Less', 'Python'],
      spoken: [
        { name: 'فارسی', level: 'زبان مادری', flag: '🇮🇷' },
        { name: 'ترکی', level: 'زبان مادری', flag: '🇹🇷' },
        { name: 'انگلیسی', level: 'بالاتر از متوسط', flag: '🇬🇧' },
      ],
    },
    contact: {
      tag: 'تماس',
      heading: 'اطلاعات',
      headingAccent: 'تماس',
      desc: 'برای ارتباط حرفه‌ای می‌توانید از راه‌های زیر استفاده کنید.',
      email: 'ایمیل', phone: 'تلفن', location: 'موقعیت', locationVal: 'اردبیل، ایران',
    },
    footer: {
      tagline: 'علیرضا حسین آقایی — توسعه‌دهنده فرانت‌اند',
      copyright: 'علیرضا حسین آقایی · ساخته‌شده با Angular',
    },
    theme: { light: '☀️ حالت روشن', dark: '🌙 حالت تیره' },
    lang: { switchTo: 'English' },
  },
};
