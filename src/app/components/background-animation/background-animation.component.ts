import { ChangeDetectionStrategy, AfterViewInit, ChangeDetectorRef, Component, ElementRef, NgZone, OnDestroy, ViewChild } from '@angular/core';

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

  private destroyed = false;
  private scene?: Awaited<ReturnType<typeof import('./particle-scene')['createParticleScene']>>;

  constructor(
    private zone: NgZone,
    private changeDetector: ChangeDetectorRef,
  ) {}

  ngAfterViewInit(): void {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    this.zone.runOutsideAngular(async () => {
      try {
        const { createParticleScene } = await import('./particle-scene');
        if (this.destroyed) return;
        this.scene = createParticleScene(this.stage.nativeElement, this.canvas.nativeElement, preference, (ready) => {
          this.zone.run(() => {
            this.ready = ready;
            this.changeDetector.markForCheck();
          });
        });
      } catch {
        // The decorative canvas stays hidden if the WebGL scene cannot start.
      }
    });
  }

  ngOnDestroy(): void {
    this.destroyed = true;
    this.scene?.dispose();
  }
}
