import { Component, OnInit } from '@angular/core';
import { LanguageService } from './services/language.service';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  constructor(
    private theme: ThemeService,
    private language: LanguageService,
  ) {}

  ngOnInit(): void {
    this.theme.init();
    this.language.init();
  }
}
