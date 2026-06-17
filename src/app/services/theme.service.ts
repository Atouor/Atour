import { Injectable } from '@angular/core';

export type Theme = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly key = 'atour-theme';
  theme: Theme = 'dark';

  init(): void {
    const saved = localStorage.getItem(this.key) as Theme | null;
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    this.set(saved || (prefersLight ? 'light' : 'dark'), false);
  }

  toggle(): void {
    this.set(this.theme === 'dark' ? 'light' : 'dark');
  }

  set(theme: Theme, persist = true): void {
    this.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    if (persist) localStorage.setItem(this.key, theme);
  }
}
