import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AppLang, SiteTranslations, TRANSLATIONS } from '../i18n/translations';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly key = 'atour-lang';
  private _lang: AppLang = 'en';
  readonly changed$ = new Subject<AppLang>();

  init(): void {
    const saved = localStorage.getItem(this.key) as AppLang | null;
    this.set(saved || 'en', false);
  }

  get lang(): AppLang { return this._lang; }
  get t(): SiteTranslations { return TRANSLATIONS[this._lang]; }
  get isRtl(): boolean { return this._lang === 'fa'; }

  toggle(): void {
    this.set(this._lang === 'en' ? 'fa' : 'en');
  }

  set(lang: AppLang, persist = true): void {
    this._lang = lang;
    const html = document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'fa' ? 'rtl' : 'ltr');
    if (persist) localStorage.setItem(this.key, lang);
    this.changed$.next(lang);
  }
}
