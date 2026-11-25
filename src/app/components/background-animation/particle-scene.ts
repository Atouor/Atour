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
  camera.position.z = 7.3;

  const { positions, sizes } = createBinaryRibbon();
  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new BufferAttribute(positions, 3));
  geometry.setAttribute('pointScale', new BufferAttribute(sizes, 1));
  const material = new ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: {
      time: { value: 0 },
      assembly: { value: 0 },
      density: { value: 1 },
      nearColor: { value: new Color('#d0d0d0') },
      farColor: { value: new Color('#535353') },
    },
    vertexShader: `
      uniform float time;
      uniform float assembly;
      uniform float density;
      attribute float pointScale;
      varying float glow;
      varying float signal;
      varying float digit;
      void main() {
        digit = step(.5, fract(sin(dot(position, vec3(127.1, 311.7, 74.7))) * 4375.5));
        vec3 p = position;
        p += .027 * sin(p.yzx * 3. + time * 1.5);
        vec4 viewPosition = modelViewMatrix * vec4(p, 1.);
        signal = pow(.5 + .5 * sin(time * 2.6 - position.y * 5. + abs(position.x) * 7.), 9.);
        glow = smoothstep(-8.65, -7.1, viewPosition.z);
        gl_PointSize = clamp((pointScale + signal * .35) * density * (7. / -viewPosition.z), 3., 9.);
        vec4 projected = projectionMatrix * viewPosition;
        float seed = fract(sin(dot(position, vec3(61.7, 13.9, 97.5))) * 17431.7);
        vec2 corner = vec2(position.x < 0. ? -1. : 1., position.y < 0. ? -1. : 1.);
        vec2 start = corner * vec2(.96 - seed * .24, .94 - fract(seed * 19.1) * .24);
        float progress = smoothstep(0., 1., clamp(assembly * 1.24 - seed * .24, 0., 1.));
        projected.xy = mix(start * projected.w, projected.xy, progress);
        gl_Position = projected;
      }
    `,
    fragmentShader: `
      uniform vec3 nearColor;
      uniform vec3 farColor;
      varying float glow;
      varying float signal;
      varying float digit;
      void main() {
        vec2 glyph = gl_PointCoord - .5;
        float ring = abs(length(glyph * vec2(1.5, 1.)) - .31);
        float zero = 1. - smoothstep(.045, .103, ring);
        float stem = max(abs(glyph.x) - .075, abs(glyph.y) - .33);
        float base = max(abs(glyph.x) - .19, abs(glyph.y - .31) - .06);
        float one = 1. - smoothstep(0., .07, min(stem, base));
        float ink = mix(zero, one, digit);
        vec3 color = mix(farColor, nearColor, glow);
        gl_FragColor = vec4(color, ink * (.25 + .66 * glow + .09 * signal));
        #include <colorspace_fragment>
      }
    `,
  });
  const particles = new Points(geometry, material);
  particles.rotation.x = .28;
  scene.add(particles);

  let visible = true;
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
    material.uniforms['assembly'].value = Math.min(elapsed / 2.35, 1);
    particles.rotation.x += (targetTilt - particles.rotation.x) * delta * 3;
    particles.rotation.y += (.16 * Math.sin(elapsed * .42) + targetTurn - particles.rotation.y) * delta * 3;
    draw();
    frame = requestAnimationFrame(animate);
  };
  const sync = () => {
    stop();
    if (lost || !visible || document.hidden) return;
    if (motion.matches) material.uniforms['assembly'].value = 1;
    draw();
    if (!motion.matches) frame = requestAnimationFrame(animate);
  };
  const resize = () => {
    const { clientWidth: width, clientHeight: height } = stage;
    if (!width || !height) return;
    const ratio = Math.min(window.devicePixelRatio || 1, width < 480 ? 1.4 : 1.75);
    renderer.setPixelRatio(ratio);
    renderer.setSize(width, height, false);
    material.uniforms['density'].value = ratio * (width < 480 ? 2.2 : 2.8);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    sync();
  };
  const pointer = (event: PointerEvent) => {
    if (event.pointerType === 'touch' || motion.matches) return;
    const bounds = stage.getBoundingClientRect();
    targetTurn = ((event.clientX - bounds.left) / bounds.width - .5) * .55;
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

function createBinaryRibbon() {
  const positions: number[] = [];
  const sizes: number[] = [];

  // A single tilted ribbon with a half twist, sampled in offset rows.
  for (let row = 0; row <= 12; row++) {
    const cross = (row / 12 - .5) * .94;
    for (let column = 0; column < 118; column++) {
      const angle = (column + (row % 2) * .5) * Math.PI * 2 / 118;
      const radius = 1.29 + cross * Math.cos(angle / 2);
      const x = radius * Math.cos(angle);
      const y = .79 * radius * Math.sin(angle) + cross * Math.sin(angle / 2) * .62;
      const z = .72 * Math.sin(angle) - cross * Math.sin(angle / 2) * .78;
      positions.push(x * .94 - y * .34, x * .34 + y * .94, z);
      sizes.push(2.4 + .38 * Math.cos(column * 1.9 + row));
    }
  }
  return { positions: new Float32Array(positions), sizes: new Float32Array(sizes) };
}
