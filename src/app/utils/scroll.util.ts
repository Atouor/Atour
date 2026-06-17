export function scrollToSection(id: string): void {
  const el = document.getElementById(id);
  if (!el) return;

  const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'), 10) || 64;
  const top = el.getBoundingClientRect().top + window.scrollY - navH - 8;

  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  history.replaceState(null, '', `#${id}`);
}
