import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, HostListener, OnDestroy } from '@angular/core';
import { PORTFOLIO } from '../../i18n/portfolio';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class DashboardComponent implements AfterViewInit, OnDestroy {
  get skillGroups() {
    return [
      { title: this.copy.role, items: this.copy.vibeSkills },
      { title: this.copy.engineering, items: [...this.skills, ...this.i18n.t.skills.other] },
      { title: this.i18n.t.skills.agileTitle, items: this.i18n.t.skills.agile },
      { title: this.i18n.t.skills.langsTitle, items: this.i18n.t.skills.spoken.map(language => language.name + ' · ' + language.level) },
    ];
  }
  get presentationChapters() {
    const ids = ['chapter-delivery', 'chapter-team', 'chapter-clients', 'chapter-product'];
    return this.copy.capabilities.map((item, index) => ({ ...item, id: ids[index] }));
  }

  @HostListener('window:keydown', ['$event'])
  navigatePresentation(event: KeyboardEvent): void {
    if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey ||
        (event.key !== 'ArrowDown' && event.key !== 'ArrowUp')) return;
    if (event.target instanceof Element && event.target.closest('button,a,input,textarea,select,[contenteditable],[role="combobox"]')) return;
    const chapters = Array.from(this.host.nativeElement.querySelectorAll<HTMLElement>('.presentation-chapter'));
    const center = window.innerHeight / 2;
    const current = chapters.findIndex(chapter => {
      const bounds = chapter.getBoundingClientRect();
      return bounds.top <= center && bounds.bottom > center;
    });
    const next = chapters[current + (event.key === 'ArrowDown' ? 1 : -1)];
    if (current < 0 || !next) return;
    event.preventDefault();
    next.scrollIntoView({ block: 'start' });
  }

  private observer?: IntersectionObserver;
  readonly skills = ['Angular', 'TypeScript', 'JavaScript', 'HTML & CSS', 'Git', 'Linux', 'RxJS'];

  constructor(public i18n: LanguageService, private host: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    this.observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        entry.target.classList.toggle('awaiting-reveal', !entry.isIntersecting);
        entry.target.classList.toggle('arrived', entry.isIntersecting);
      }
    }, { rootMargin: '-10% 0px -12% 0px' });
    this.host.nativeElement.querySelectorAll('.reveal').forEach(el => {
      el.classList.add('awaiting-reveal');
      this.observer?.observe(el);
    });
  }

  ngOnDestroy(): void { this.observer?.disconnect(); }

  words(title: string): string[] {
    return title.trim().split(/\s+/u);
  }

  get copy() { return PORTFOLIO[this.i18n.lang]; }
}
