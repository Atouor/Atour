import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnDestroy } from '@angular/core';
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
  paused = false;
  selectedGroup = 0;
  get skillGroups() {
    return [
      { title: this.copy.role, items: this.copy.vibeSkills },
      { title: this.copy.engineering, items: [...this.skills, ...this.i18n.t.skills.other] },
      { title: this.i18n.t.skills.agileTitle, items: this.i18n.t.skills.agile },
      { title: this.i18n.t.skills.langsTitle, items: this.i18n.t.skills.spoken.map(language => language.name + ' · ' + language.level) },
    ];
  }
  private observer?: IntersectionObserver;
  readonly skills = ['Angular', 'TypeScript', 'JavaScript', 'HTML & CSS', 'Git', 'Linux', 'RxJS'];

  constructor(public i18n: LanguageService, private host: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    if (!('IntersectionObserver' in window)) return;
    this.observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('arrived');
        this.observer?.unobserve(entry.target);
      }
    }, { threshold: 0.04 });
    this.host.nativeElement.querySelectorAll('.reveal').forEach(el => this.observer?.observe(el));
  }

  ngOnDestroy(): void { this.observer?.disconnect(); }

  get copy() { return PORTFOLIO[this.i18n.lang]; }
}
