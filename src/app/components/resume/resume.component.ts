import { Component } from '@angular/core';
import { PORTFOLIO } from '../../i18n/portfolio';
import { RESUME_LABELS } from '../../i18n/resume';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.less',
  standalone: true,
})
export class ResumeComponent {
  constructor(public i18n: LanguageService) {}

  get copy() { return PORTFOLIO[this.i18n.lang]; }
  get labels() { return RESUME_LABELS[this.i18n.lang]; }
  get experience() { return this.i18n.t.experience; }

  exportPdf(): void {
    window.print();
  }
}
