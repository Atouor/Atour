import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import type { AppLang } from '../../i18n/translations';
import { PORTFOLIO } from '../../i18n/portfolio';
import { LanguageService } from '../../services/language.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  standalone: false,
})
export class HeaderComponent {
  readonly sections = ['about', 'experience', 'skills', 'contact'] as const;

  languageOpen = false;
  activeIndex = 0;
  @ViewChild('picker') private picker!: ElementRef<HTMLElement>;

  constructor(public theme: ThemeService, public i18n: LanguageService) {}

  get skipLabel() { return PORTFOLIO[this.i18n.lang].skip; }

  get selectedLanguage() {
    return this.i18n.languages.find(language => language.code === this.i18n.lang) ?? this.i18n.languages[0];
  }

  toggleLanguage(): void {
    if (!this.languageOpen) this.activeIndex = this.i18n.languages.indexOf(this.selectedLanguage);
    this.languageOpen = !this.languageOpen;
    this.revealActiveLanguage();
  }

  chooseLanguage(code: AppLang): void {
    this.i18n.set(code);
    this.languageOpen = false;
  }

  @HostListener('document:pointerdown', ['$event'])
  closeLanguageOutside(event: PointerEvent): void {
    if (this.languageOpen && !event.composedPath().includes(this.picker.nativeElement)) {
      this.languageOpen = false;
    }
  }

  private revealActiveLanguage(): void {
    if (!this.languageOpen) return;
    requestAnimationFrame(() => {
      const option = this.picker.nativeElement.querySelector<HTMLElement>('.highlighted');
      const list = option?.parentElement;
      if (!option || !list) return;
      const top = option.offsetTop;
      const bottom = top + option.offsetHeight;
      if (top < list.scrollTop) list.scrollTop = top;
      if (bottom > list.scrollTop + list.clientHeight) list.scrollTop = bottom - list.clientHeight;
    });
  }

  onLanguageKey(event: KeyboardEvent): void {
    const lastIndex = this.i18n.languages.length - 1;
    switch (event.key) {
      case 'Escape':
        if (!this.languageOpen) return;
        event.stopPropagation();
        this.languageOpen = false;
        break;
      case 'ArrowDown':
      case 'ArrowUp':
        if (!this.languageOpen) {
          this.toggleLanguage();
        } else {
          const step = event.key === 'ArrowDown' ? 1 : -1;
          this.activeIndex = Math.max(0, Math.min(lastIndex, this.activeIndex + step));
        }
        break;
      case 'Home':
      case 'End':
        if (!this.languageOpen) return;
        this.activeIndex = event.key === 'Home' ? 0 : lastIndex;
        break;
      case 'Enter':
      case ' ':
        if (!this.languageOpen) return;
        this.chooseLanguage(this.i18n.languages[this.activeIndex].code);
        break;
      default:
        return;
    }
    event.preventDefault();
    this.revealActiveLanguage();
  }
}
