import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

interface Blob {
  x: number;
  y: number;
  radius: number;
  color: string;
  phaseX: number;
  phaseY: number;
  speedX: number;
  speedY: number;
  ampX: number;
  ampY: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

@Component({
  selector: 'app-background-animation',
  templateUrl: './background-animation.component.html',
  styleUrls: ['./background-animation.component.less'],
})
export class BackgroundAnimationComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private rafId = 0;
  private startTime = 0;
  private width = 0;
  private height = 0;
  private dpr = 1;

  private mouse = { x: 0.5, y: 0.5 };
  private smoothMouse = { x: 0.5, y: 0.5 };
  private blobs: Blob[] = [];
  private particles: Particle[] = [];
  private themeObserver?: MutationObserver;

  private colors = {
    bg: '#050505',
    orb1: 'rgba(178, 31, 75, 0.52)',
    orb2: 'rgba(255, 255, 255, 0.16)',
    orb3: 'rgba(138, 21, 56, 0.34)',
    orb4: 'rgba(255, 255, 255, 0.1)',
    cursor: 'rgba(178, 31, 75, 0.45)',
    cursorAlt: 'rgba(255, 255, 255, 0.18)',
    particle: 'rgba(255, 255, 255, 0.82)',
    line: 'rgba(255, 255, 255, 0.16)',
    grid: 'rgba(255, 255, 255, 0.045)',
    ribbon1: 'rgba(178, 31, 75, 0.24)',
    ribbon2: 'rgba(255, 255, 255, 0.12)',
    bgDeep: '#000000',
  };

  ngOnInit(): void {
    this.themeObserver = new MutationObserver(() => this.readThemeColors());
    this.themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.rafId);
    this.themeObserver?.disconnect();
  }

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.readThemeColors();
    this.initScene();
    this.resize();
    this.startTime = performance.now();
    this.animate();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.resize();
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    this.mouse.x = this.width ? e.clientX / this.width : 0.5;
    this.mouse.y = this.height ? e.clientY / this.height : 0.5;
  }

  @HostListener('window:mouseleave')
  onMouseLeave(): void {
    this.mouse.x = 0.5;
    this.mouse.y = 0.5;
  }

  private readThemeColors(): void {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    this.colors = {
      bg: isLight ? '#ffffff' : '#050505',
      orb1: isLight ? 'rgba(138, 21, 56, 0.38)' : 'rgba(178, 31, 75, 0.52)',
      orb2: isLight ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.16)',
      orb3: isLight ? 'rgba(138, 21, 56, 0.24)' : 'rgba(138, 21, 56, 0.34)',
      orb4: isLight ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.1)',
      cursor: isLight ? 'rgba(138, 21, 56, 0.34)' : 'rgba(178, 31, 75, 0.45)',
      cursorAlt: isLight ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.18)',
      particle: isLight ? 'rgba(0, 0, 0, 0.64)' : 'rgba(255, 255, 255, 0.82)',
      line: isLight ? 'rgba(0, 0, 0, 0.14)' : 'rgba(255, 255, 255, 0.16)',
      grid: isLight ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.045)',
      ribbon1: isLight ? 'rgba(138, 21, 56, 0.16)' : 'rgba(178, 31, 75, 0.24)',
      ribbon2: isLight ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.12)',
      bgDeep: isLight ? '#ffffff' : '#000000',
    };

    if (this.blobs.length >= 5) {
      this.blobs[0].color = this.colors.orb1;
      this.blobs[1].color = this.colors.orb2;
      this.blobs[2].color = this.colors.orb3;
      this.blobs[3].color = this.colors.orb4;
      this.blobs[4].color = this.colors.orb1;
    }
  }

  private initScene(): void {
    this.blobs = [
      { x: 0.8, y: 0.18, radius: 0.42, color: this.colors.orb1, phaseX: 0, phaseY: 1.2, speedX: 0.38, speedY: 0.28, ampX: 0.16, ampY: 0.13 },
      { x: 0.14, y: 0.76, radius: 0.36, color: this.colors.orb2, phaseX: 2.1, phaseY: 0.5, speedX: 0.32, speedY: 0.4, ampX: 0.18, ampY: 0.15 },
      { x: 0.52, y: 0.5, radius: 0.34, color: this.colors.orb3, phaseX: 4.2, phaseY: 3.1, speedX: 0.25, speedY: 0.34, ampX: 0.13, ampY: 0.17 },
      { x: 0.9, y: 0.66, radius: 0.28, color: this.colors.orb4, phaseX: 1.5, phaseY: 2.8, speedX: 0.44, speedY: 0.22, ampX: 0.1, ampY: 0.12 },
      { x: 0.28, y: 0.28, radius: 0.26, color: this.colors.orb1, phaseX: 3.7, phaseY: 1.9, speedX: 0.36, speedY: 0.38, ampX: 0.12, ampY: 0.13 },
    ];

    const count = Math.min(115, Math.floor((window.innerWidth * window.innerHeight) / 9500));
    this.particles = Array.from({ length: count }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.00035,
      vy: (Math.random() - 0.5) * 0.00035,
      size: Math.random() * 2.1 + 0.7,
    }));
  }

  private resize(): void {
    const canvas = this.canvasRef.nativeElement;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    canvas.width = this.width * this.dpr;
    canvas.height = this.height * this.dpr;
    canvas.style.width = `${this.width}px`;
    canvas.style.height = `${this.height}px`;
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
  }

  private animate = (): void => {
    this.rafId = requestAnimationFrame(this.animate);
    const t = (performance.now() - this.startTime) / 1000;

    this.smoothMouse.x += (this.mouse.x - this.smoothMouse.x) * 0.12;
    this.smoothMouse.y += (this.mouse.y - this.smoothMouse.y) * 0.12;

    this.draw(t);
  };

  private draw(t: number): void {
    const { ctx, width, height } = this;

    this.drawBaseGradient(t);
    this.drawGrid(t);
    this.drawRibbons(t);
    this.drawBlobs(t);
    this.drawCursorSpotlight(t);
    this.drawParticles(t);
  }

  private drawBaseGradient(t: number): void {
    const { ctx, width, height } = this;
    const shiftX = (Math.sin(t * 0.12) + this.smoothMouse.x - 0.5) * width * 0.18;
    const shiftY = (Math.cos(t * 0.1) + this.smoothMouse.y - 0.5) * height * 0.16;
    const grad = ctx.createRadialGradient(
      width * 0.48 + shiftX,
      height * 0.42 + shiftY,
      0,
      width * 0.5,
      height * 0.5,
      Math.max(width, height),
    );

    grad.addColorStop(0, this.colors.orb3);
    grad.addColorStop(0.34, this.colors.bg);
    grad.addColorStop(0.72, this.colors.bgDeep);
    grad.addColorStop(1, this.colors.bg);

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);
  }

  private drawGrid(t: number): void {
    const { ctx, width, height } = this;
    const size = 52;
    const offsetX = (Math.sin(t * 0.18) * 18) + (this.smoothMouse.x - 0.5) * 90;
    const offsetY = (Math.cos(t * 0.16) * 18) + (this.smoothMouse.y - 0.5) * 90;

    ctx.strokeStyle = this.colors.grid;
    ctx.lineWidth = 1;
    ctx.beginPath();

    const startX = ((offsetX % size) + size) % size - size;
    const startY = ((offsetY % size) + size) % size - size;

    for (let x = startX; x < width + size; x += size) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
    }
    for (let y = startY; y < height + size; y += size) {
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
    }
    ctx.stroke();

    const cx = width * 0.5;
    const cy = height * 0.45;
    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(width, height) * 0.65);
    grad.addColorStop(0, 'rgba(0,0,0,0)');
    grad.addColorStop(1, this.colors.bg);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);
  }

  private drawRibbons(t: number): void {
    const { ctx, width, height } = this;
    const mousePull = (this.smoothMouse.y - 0.5) * height * 0.22;

    ctx.save();
    ctx.globalCompositeOperation = 'screen';
    ctx.lineCap = 'round';

    for (let i = 0; i < 4; i++) {
      ctx.beginPath();
      const yBase = height * (0.22 + i * 0.18) + mousePull * (i % 2 === 0 ? 1 : -0.7);
      const color = i % 2 === 0 ? this.colors.ribbon1 : this.colors.ribbon2;

      for (let x = -80; x <= width + 80; x += 28) {
        const wave = Math.sin(x * 0.008 + t * (0.9 + i * 0.14) + i) * 42;
        const mouseWave = Math.sin((x / width + this.smoothMouse.x) * Math.PI * 2) * 34;
        const y = yBase + wave + mouseWave;

        if (x === -80) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.strokeStyle = color;
      ctx.lineWidth = 22 - i * 3;
      ctx.globalAlpha = 0.55 - i * 0.08;
      ctx.stroke();
    }

    ctx.restore();
  }

  private drawBlobs(t: number): void {
    const { ctx, width, height } = this;
    const mx = (this.smoothMouse.x - 0.5) * 0.32;
    const my = (this.smoothMouse.y - 0.5) * 0.32;

    for (const blob of this.blobs) {
      const autoX = Math.sin(t * blob.speedX + blob.phaseX) * blob.ampX;
      const autoY = Math.cos(t * blob.speedY + blob.phaseY) * blob.ampY;
      const px = (blob.x + autoX + mx) * width;
      const py = (blob.y + autoY + my) * height;
      const r = blob.radius * Math.max(width, height);

      const grad = ctx.createRadialGradient(px, py, 0, px, py, r);
      grad.addColorStop(0, blob.color);
      grad.addColorStop(1, 'rgba(0,0,0,0)');

      ctx.globalCompositeOperation = 'screen';
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(px, py, r, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.globalCompositeOperation = 'source-over';
  }

  private drawCursorSpotlight(t: number): void {
    const { ctx, width, height } = this;
    const x = this.smoothMouse.x * width;
    const y = this.smoothMouse.y * height;
    const pulse = 1 + Math.sin(t * 3.2) * 0.08;
    const radius = Math.max(width, height) * 0.28 * pulse;

    ctx.save();
    ctx.globalCompositeOperation = 'screen';

    const glow = ctx.createRadialGradient(x, y, 0, x, y, radius);
    glow.addColorStop(0, this.colors.cursor);
    glow.addColorStop(0.35, this.colors.cursorAlt);
    glow.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = this.colors.cursor;
    ctx.lineWidth = 1.2;
    ctx.globalAlpha = 0.42;
    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.arc(x, y, 36 + i * 26 + Math.sin(t * 2 + i) * 6, 0, Math.PI * 2);
      ctx.stroke();
    }

    ctx.restore();
  }

  private drawParticles(t: number): void {
    const { ctx, width, height } = this;
    const mx = this.smoothMouse.x * width;
    const my = this.smoothMouse.y * height;
    const connectDist = Math.min(width, height) * 0.18;

    for (const p of this.particles) {
      p.x += p.vx + Math.sin(t * 0.8 + p.y * 12) * 0.00012;
      p.y += p.vy + Math.cos(t * 0.7 + p.x * 12) * 0.00012;

      const dx = mx / width - p.x;
      const dy = my / height - p.y;
      const dist = Math.hypot(dx, dy);
      const pull = Math.max(0, 0.22 - dist) * 0.018;
      p.x += dx * pull;
      p.y += dy * pull;

      if (p.x < 0) p.x = 1;
      if (p.x > 1) p.x = 0;
      if (p.y < 0) p.y = 1;
      if (p.y > 1) p.y = 0;
    }

    const positions = this.particles.map(p => ({ x: p.x * width, y: p.y * height }));

    ctx.strokeStyle = this.colors.line;
    ctx.lineWidth = 0.9;
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        const dx = positions[i].x - positions[j].x;
        const dy = positions[i].y - positions[j].y;
        const dist = Math.hypot(dx, dy);
        if (dist < connectDist) {
          ctx.globalAlpha = (1 - dist / connectDist) * 0.78;
          ctx.beginPath();
          ctx.moveTo(positions[i].x, positions[i].y);
          ctx.lineTo(positions[j].x, positions[j].y);
          ctx.stroke();
        }
      }

      const dm = Math.hypot(positions[i].x - mx, positions[i].y - my);
      if (dm < connectDist * 1.7) {
        ctx.globalAlpha = (1 - dm / (connectDist * 1.7)) * 0.9;
        ctx.beginPath();
        ctx.moveTo(positions[i].x, positions[i].y);
        ctx.lineTo(mx, my);
        ctx.stroke();
      }
    }

    ctx.globalAlpha = 1;
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      const px = p.x * width;
      const py = p.y * height;
      ctx.fillStyle = this.colors.particle;
      ctx.globalAlpha = 0.55 + Math.sin(t * 3 + i) * 0.25;
      ctx.beginPath();
      ctx.arc(px, py, p.size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }
}
