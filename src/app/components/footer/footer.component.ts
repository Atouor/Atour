import { Component } from '@angular/core';

@Component({
  selector: 'app-Footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less'],
  standalone: false,
})
export class FooterComponent {
  readonly year = new Date().getFullYear();
  readonly socials = [
    { label: 'GitHub', url: 'https://github.com/Atouor' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/alireza-hosein-aghaie-5685a0290/' },
    { label: 'Instagram', url: 'https://instagram.com/atouor' },
    { label: 'X', url: 'https://twitter.com/atouor' },
    { label: 'Telegram', url: 'https://t.me/Atouor' },
  ];
}
