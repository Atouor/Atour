import { BufferAttribute, BufferGeometry, Color, PerspectiveCamera, Points, Scene, ShaderMaterial, WebGLRenderer } from 'three';

export function createParticleScene(
  stage: HTMLElement,
  canvas: HTMLCanvasElement,
  motion: MediaQueryList,
  onReady: (ready: boolean) => void,
) {
  const renderer = new WebGLRenderer({ canvas, alpha: true, antialias: false });
  const scene = new Scene();
  const camera = new PerspectiveCamera(37, 1, 0.1, 50);
  camera.position.z = 7;

  const count = 12000;
  const positions = new Float32Array(count * 3);
  const sizes = new Float32Array(count);
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - 2 * (i + .5) / count;
    const angle = i * goldenAngle;
    const radial = Math.sqrt(1 - y * y);
    const radius = 1.48 + .18 * Math.sin(11 * y + 3 * angle);
    positions.set([radius * radial * Math.cos(angle), radius * y, radius * radial * Math.sin(angle)], i * 3);
    sizes[i] = .65 + .75 * ((i * .61803398875) % 1);
  }

  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new BufferAttribute(positions, 3));
  geometry.setAttribute('pointScale', new BufferAttribute(sizes, 1));
  const material = new ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: {
      time: { value: 0 },
      density: { value: 1 },
      nearColor: { value: new Color('#ffa1bb') },
      farColor: { value: new Color('#b21f4b') },
    },
    vertexShader: `
      uniform float time;
      uniform float density;
      attribute float pointScale;
      varying float glow;
      void main() {
        vec3 p = position * (1. + .055 * sin(position.y * 7. + time));
        vec4 viewPosition = modelViewMatrix * vec4(p, 1.);
        glow = smoothstep(-8.6, -5.4, viewPosition.z);
        gl_PointSize = clamp(pointScale * density * (7. / -viewPosition.z), 1., 4.);
        gl_Position = projectionMatrix * viewPosition;
      }
    `,
    fragmentShader: `
      uniform vec3 nearColor;
      uniform vec3 farColor;
      varying float glow;
      void main() {
        float edge = 1. - smoothstep(.18, .5, distance(gl_PointCoord, vec2(.5)));
        gl_FragColor = vec4(mix(farColor, nearColor, glow), edge * (.25 + .66 * glow));
        #include <colorspace_fragment>
      }
    `,
  });
  const particles = new Points(geometry, material);
  particles.rotation.x = .22;
  scene.add(particles);

  let visible = true;
  let paused = false;
  let lost = false;
  let frame = 0;
  let lastTick = 0;
  let targetTilt = .22;
  let targetTurn = 0;

  const draw = () => renderer.render(scene, camera);
  const stop = () => {
    cancelAnimationFrame(frame);
    frame = 0;
    lastTick = 0;
  };
  const animate = (now: number) => {
    const delta = lastTick ? Math.min((now - lastTick) / 1000, .05) : 0;
    lastTick = now;
    const elapsed = material.uniforms['time'].value += delta;
    particles.rotation.x += (targetTilt - particles.rotation.x) * delta * 3;
    particles.rotation.y += (.23 * elapsed + targetTurn - particles.rotation.y) * delta * 3;
    draw();
    frame = requestAnimationFrame(animate);
  };
  const sync = () => {
    stop();
    if (lost || !visible || document.hidden) return;
    draw();
    if (!paused && !motion.matches) frame = requestAnimationFrame(animate);
  };
  const resize = () => {
    const { clientWidth: width, clientHeight: height } = stage;
    if (!width || !height) return;
    const ratio = Math.min(window.devicePixelRatio || 1, width < 480 ? 1.4 : 1.75);
    renderer.setPixelRatio(ratio);
    renderer.setSize(width, height, false);
    material.uniforms['density'].value = ratio * (width < 480 ? 2.2 : 2.8);
    geometry.setDrawRange(0, width < 480 ? 7200 : count);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    sync();
  };
  const pointer = (event: PointerEvent) => {
    if (event.pointerType === 'touch' || paused || motion.matches) return;
    const bounds = stage.getBoundingClientRect();
    targetTurn = ((event.clientX - bounds.left) / bounds.width - .5) * .8;
    targetTilt = .22 + ((event.clientY - bounds.top) / bounds.height - .5) * .5;
  };
  const resetPointer = () => {
    targetTilt = .22;
    targetTurn = 0;
  };
  const loseContext = (event: Event) => {
    event.preventDefault();
    lost = true;
    sync();
    onReady(false);
  };
  const restoreContext = () => {
    lost = false;
    resize();
    onReady(true);
  };
  const preferenceChanged = () => {
    sync();
    onReady(!lost);
  };

  const sizing = new ResizeObserver(resize);
  const visibility = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    sync();
  });
  sizing.observe(stage);
  visibility.observe(stage);
  stage.addEventListener('pointermove', pointer);
  stage.addEventListener('pointerleave', resetPointer);
  canvas.addEventListener('webglcontextlost', loseContext);
  canvas.addEventListener('webglcontextrestored', restoreContext);
  document.addEventListener('visibilitychange', sync);
  motion.addEventListener('change', preferenceChanged);
  resize();
  onReady(true);

  return {
    setPaused(value: boolean) {
      paused = value;
      sync();
    },
    dispose() {
      stop();
      sizing.disconnect();
      visibility.disconnect();
      stage.removeEventListener('pointermove', pointer);
      stage.removeEventListener('pointerleave', resetPointer);
      canvas.removeEventListener('webglcontextlost', loseContext);
      canvas.removeEventListener('webglcontextrestored', restoreContext);
      document.removeEventListener('visibilitychange', sync);
      motion.removeEventListener('change', preferenceChanged);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    },
  };
}
