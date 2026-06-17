export function scrollToSection(id: string): void {
  const el = document.getElementById(id);
  if (!el) return;

  const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'), 10) || 64;
  const scroller = document.scrollingElement || document.documentElement;

  const run = () => {
    const top = el.getBoundingClientRect().top + scroller.scrollTop - navH - 8;
    const y = Math.max(0, top);
    scroller.scrollTo({ top: y, behavior: 'smooth' });
  };

  requestAnimationFrame(run);
  history.replaceState(null, '', `#${id}`);
}
