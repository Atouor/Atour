import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../services/language.service';
import { scrollToSection } from '../../utils/scroll.util';

interface Skill { name: string; level: number; }

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.less'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {
  skills: Skill[] = [
    { name: 'Angular', level: 95 },
    { name: 'TypeScript', level: 92 },
    { name: 'JavaScript', level: 90 },
    { name: 'HTML & CSS', level: 92 },
    { name: 'Git', level: 88 },
    { name: 'Jira / Agile', level: 90 },
    { name: 'Linux', level: 82 },
    { name: 'RxJS', level: 85 },
  ];

  stats = [
    { val: 'Kudos', key: 'project' as const },
    { val: '8+', key: 'skills' as const },
  ];

  get experienceYearsLabel(): string {
    const years = this.experienceParts.years;
    return this.localizeNumber(`${years}+`);
  }

  get experienceDuration(): string {
    const { years, months, days } = this.experienceParts;
    const values = [years, months, days].map(value => this.localizeNumber(String(value)));
    const units: Record<string, string[]> = {
      fa: ['سال', 'ماه', 'روز'], tr: ['yıl', 'ay', 'gün'], de: ['Jahre', 'Monate', 'Tage'],
      en: ['years', 'months', 'days'], ja: ['年', 'か月', '日'], ru: ['лет', 'мес.', 'дн.'],
    };
    const labels = units[this.i18n.lang];
    return this.i18n.lang === 'ja'
      ? values.map((value, i) => `${value}${labels[i]}`).join(' ')
      : values.map((value, i) => `${value} ${labels[i]}`).join('، ');
  }

  private get experienceParts(): { years: number; months: number; days: number } {
    const start = new Date(2021, 8, 23); // 1 Mehr 1400
    const end = new Date();
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();
    if (days < 0) {
      months--;
      days += new Date(end.getFullYear(), end.getMonth(), 0).getDate();
    }
    if (months < 0) { years--; months += 12; }
    return { years, months, days };
  }

  private localizeNumber(value: string): string {
    if (this.i18n.lang !== 'fa') return value;
    return value.replace(/\d/g, digit => '۰۱۲۳۴۵۶۷۸۹'[Number(digit)]);
  }

  skillsAnimated = false;
  private observer?: IntersectionObserver;
  private sub?: Subscription;

  constructor(
    public i18n: LanguageService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.sub = this.i18n.changed$.subscribe(() => {
      this.cdr.markForCheck();
      setTimeout(() => this.observeReveals(), 0);
    });
  }

  ngAfterViewInit(): void {
    this.setupObserver();
    this.observeReveals();
    setTimeout(() => this.observeReveals(), 150);
    window.addEventListener('load', this.onPageLoad);
  }

  private onPageLoad = (): void => {
    this.observeReveals();
  };

  private setupObserver(): void {
    this.observer?.disconnect();
    this.observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view');
          if (e.target.classList.contains('skills-bars')) {
            this.skillsAnimated = true;
            this.cdr.markForCheck();
          }
          this.observer?.unobserve(e.target);
        }
      }),
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );
  }

  private observeReveals(): void {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.querySelectorAll('.reveal:not(.in-view)').forEach(el => {
          const rect = el.getBoundingClientRect();
          const inViewport = rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
          if (inViewport) {
            el.classList.add('in-view');
            if (el.classList.contains('skills-bars')) {
              this.skillsAnimated = true;
              this.cdr.markForCheck();
            }
          } else {
            this.observer?.observe(el);
          }
        });
      });
    });
  }

  ngOnDestroy(): void {
    window.removeEventListener('load', this.onPageLoad);
    this.observer?.disconnect();
    this.sub?.unsubscribe();
  }

  scrollTo(id: string, e: Event): void {
    e.preventDefault();
    scrollToSection(id);
  }
}
