import { ChangeDetectorRef, Component, HostListener, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../services/language.service';
import { AppLang } from '../../i18n/translations';
import { ThemeService } from '../../services/theme.service';
import { scrollToSection } from '../../utils/scroll.util';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class HeaderComponent implements OnInit, OnDestroy {
  menuOption = 'Home';
  isScrolled = false;
  mobileOpen = false;
  languageOpen = false;
  private sub?: Subscription;

  private readonly sectionMap: Record<string, string> = {
    home: 'Home', about: 'About',
    experience: 'Experience', skills: 'Skills', contact: 'Contact'
  };

  constructor(
    public theme: ThemeService,
    public i18n: LanguageService,
    private cdr: ChangeDetectorRef,
  ) {}

  get navItems() {
    const n = this.i18n.t.nav;
    return [
      { id: 'Home', sectionId: 'home', label: n.home, href: '#home' },
      { id: 'About', sectionId: 'about', label: n.about, href: '#about' },
      { id: 'Experience', sectionId: 'experience', label: n.experience, href: '#experience' },
      { id: 'Skills', sectionId: 'skills', label: n.skills, href: '#skills' },
      { id: 'Contact', sectionId: 'contact', label: n.contact, href: '#contact' },
    ];
  }

  get activeLanguageLabel(): string {
    return this.i18n.languages.find(language => language.code === this.i18n.lang)?.label ?? 'English';
  }

  ngOnInit(): void {
    this.syncSection();
    this.sub = this.i18n.changed$.subscribe(() => {
      this.syncSection();
      this.cdr.markForCheck();
    });
  }

  ngOnDestroy(): void { this.sub?.unsubscribe(); }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 20;
    this.syncSection();
  }

  @HostListener('document:click')
  closeLanguageMenu(): void {
    this.languageOpen = false;
  }

  @HostListener('document:keydown.escape')
  closeLanguageMenuOnEscape(): void {
    this.languageOpen = false;
  }

  navigate(id: string, sectionId: string, e: Event): void {
    e.preventDefault();
    e.stopPropagation();
    this.menuOption = id;
    this.mobileOpen = false;
    document.body.style.overflow = '';
    scrollToSection(sectionId);
    this.cdr.markForCheck();
  }

  toggleMobile(): void {
    this.languageOpen = false;
    this.mobileOpen = !this.mobileOpen;
    document.body.style.overflow = this.mobileOpen ? 'hidden' : '';
  }

  toggleTheme(): void { this.theme.toggle(); }
  toggleLanguageMenu(): void {
    this.languageOpen = !this.languageOpen;
  }

  selectLang(lang: AppLang): void {
    this.i18n.set(lang);
    this.languageOpen = false;
  }

  private syncSection(): void {
    const y = window.scrollY + 120;
    let cur = 'Home';
    for (const [id, label] of Object.entries(this.sectionMap)) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= y) cur = label;
    }
    this.menuOption = cur;
  }
}
