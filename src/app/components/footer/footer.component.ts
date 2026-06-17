import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-Footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit, OnDestroy {
  year = new Date().getFullYear();
  private sub?: Subscription;

  socials: { label: string; url: string; icon?: string; svg?: boolean }[] = [
    { label: 'Instagram', url: 'https://instagram.com/atouor?igshid=YmMyMTA2M2Y=', icon: 'assets/images/insta.png' },
    { label: 'X', url: 'https://twitter.com/atouor?t=j08dkb_AbZENUey2fMJN5Q&s=09', svg: true },
    { label: 'Telegram', url: 'https://t.me/Atouor', icon: 'assets/images/telegram.png' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/alireza-hosein-aghaie-5685a0290/', icon: 'assets/images/linkin.jpeg' },
  ];

  constructor(
    public i18n: LanguageService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.sub = this.i18n.changed$.subscribe(() => this.cdr.markForCheck());
  }

  ngOnDestroy(): void { this.sub?.unsubscribe(); }

  goTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
