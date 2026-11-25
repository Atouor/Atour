import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PORTFOLIO } from '../../i18n/portfolio';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class DashboardComponent {
  readonly skills = ['Angular', 'TypeScript', 'JavaScript', 'HTML & CSS', 'Git', 'Linux', 'RxJS'];

  constructor(public i18n: LanguageService) {}

  get copy() { return PORTFOLIO[this.i18n.lang]; }
}
