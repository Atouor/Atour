import { ChangeDetectionStrategy, AfterViewInit, ChangeDetectorRef, Component, ElementRef, NgZone, OnDestroy, ViewChild } from '@angular/core';
import { PORTFOLIO } from '../../i18n/portfolio';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-background-animation',
  templateUrl: './background-animation.component.html',
  styleUrls: ['./background-animation.component.less'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class BackgroundAnimationComponent implements AfterViewInit, OnDestroy {
  @ViewChild('stage') private stage!: ElementRef<HTMLElement>;
  @ViewChild('canvas') private canvas!: ElementRef<HTMLCanvasElement>;

  ready = false;
  paused = false;
  reducedMotion = false;

  private destroyed = false;
  private scene?: Awaited<ReturnType<typeof import('./particle-scene')['createParticleScene']>>;

  constructor(
    public i18n: LanguageService,
    private zone: NgZone,
    private changeDetector: ChangeDetectorRef,
  ) {}

  get copy() { return PORTFOLIO[this.i18n.lang]; }

  ngAfterViewInit(): void {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    this.zone.runOutsideAngular(async () => {
      try {
        const { createParticleScene } = await import('./particle-scene');
        if (this.destroyed) return;
        this.scene = createParticleScene(this.stage.nativeElement, this.canvas.nativeElement, preference, (ready) => {
          this.zone.run(() => {
            this.ready = ready;
            this.reducedMotion = preference.matches;
            this.changeDetector.markForCheck();
          });
        });
      } catch {
        // The CSS illustration remains visible if the WebGL scene cannot start.
      }
    });
  }

  toggle(): void {
    this.paused = !this.paused;
    this.scene?.setPaused(this.paused);
  }

  ngOnDestroy(): void {
    this.destroyed = true;
    this.scene?.dispose();
  }
}
