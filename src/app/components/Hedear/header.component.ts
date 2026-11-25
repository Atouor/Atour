import { Component } from '@angular/core';
import { AppLang } from '../../i18n/translations';
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

  constructor(public theme: ThemeService, public i18n: LanguageService) {}

  get skipLabel() { return PORTFOLIO[this.i18n.lang].skip; }

  setLanguage(event: Event): void {
    this.i18n.set((event.target as HTMLSelectElement).value as AppLang);
  }
}
