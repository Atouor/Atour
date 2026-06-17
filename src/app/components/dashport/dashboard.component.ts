import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/services/language.service';
import { scrollToSection } from 'src/app/utils/scroll.util';

interface Skill { name: string; level: number; }

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
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
    { val: '4.5+', key: 'years' as const },
    { val: 'Kudos', key: 'project' as const },
    { val: '8+', key: 'skills' as const },
  ];

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
