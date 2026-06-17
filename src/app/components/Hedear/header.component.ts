import { ChangeDetectorRef, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/services/language.service';
import { ThemeService } from 'src/app/services/theme.service';
import { scrollToSection } from 'src/app/utils/scroll.util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit, OnDestroy {
  menuOption = 'Home';
  isScrolled = false;
  mobileOpen = false;
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
      { id: 'Home', label: n.home, href: '#home' },
      { id: 'About', label: n.about, href: '#about' },
      { id: 'Experience', label: n.experience, href: '#experience' },
      { id: 'Skills', label: n.skills, href: '#skills' },
      { id: 'Contact', label: n.contact, href: '#contact' },
    ];
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

  navigate(id: string, e: Event): void {
    e.preventDefault();
    this.menuOption = id;
    this.mobileOpen = false;
    document.body.style.overflow = '';
    scrollToSection(id.toLowerCase());
  }

  toggleMobile(): void {
    this.mobileOpen = !this.mobileOpen;
    document.body.style.overflow = this.mobileOpen ? 'hidden' : '';
  }

  toggleTheme(): void { this.theme.toggle(); }
  toggleLang(): void { this.i18n.toggle(); }

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
