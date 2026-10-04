import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AppLang, SiteTranslations, TRANSLATIONS } from '../i18n/translations';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly key = 'atour-lang';
  private _lang: AppLang = 'en';
  readonly changed$ = new Subject<AppLang>();
  readonly languages: { code: AppLang; label: string }[] = [
    { code: 'tr', label: 'Türkçe' },
    { code: 'de', label: 'Deutsch' },
    { code: 'en', label: 'English' },
    { code: 'fa', label: 'فارسی' },
    { code: 'ja', label: '日本語' },
    { code: 'ru', label: 'Русский' },
  ];

  init(): void {
    const saved = localStorage.getItem(this.key);
    const lang = this.languages.some(item => item.code === saved) ? saved as AppLang : 'en';
    this.set(lang, false);
  }

  get lang(): AppLang { return this._lang; }
  get t(): SiteTranslations { return TRANSLATIONS[this._lang]; }
  get isRtl(): boolean { return this._lang === 'fa'; }

  set(lang: AppLang, persist = true): void {
    this._lang = lang;
    const html = document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'fa' ? 'rtl' : 'ltr');
    if (persist) localStorage.setItem(this.key, lang);
    this.changed$.next(lang);
  }
}
