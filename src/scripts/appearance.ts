const storageKey = 'makchu-appearance';
const system = window.matchMedia('(prefers-color-scheme: dark)');
type Appearance = 'light' | 'dark';

function refreshControls() {
  const choice = document.documentElement.dataset.appearance;
  const dark = choice === 'dark' || (choice !== 'light' && system.matches);
  document.querySelectorAll('[data-appearance-toggle]').forEach((button) => {
    button.setAttribute('aria-checked', String(dark));
  });
}

function apply(choice: Appearance | null) {
  if (choice) document.documentElement.dataset.appearance = choice;
  else delete document.documentElement.dataset.appearance;
  refreshControls();
}

document.addEventListener('click', (event) => {
  if (!(event.target instanceof Element)) return;
  const toggle = event.target.closest('[data-appearance-toggle]');
  if (!toggle) return;
  const choice = toggle.getAttribute('aria-checked') === 'true' ? 'light' : 'dark';
  apply(choice);
  try {
    localStorage.setItem(storageKey, choice);
  } catch { /* The switch still works when storage is unavailable. */ }
});
system.addEventListener('change', refreshControls);
window.addEventListener('storage', (event) => {
  if (event.key === storageKey || event.key === null) {
    apply(event.newValue === 'dark' || event.newValue === 'light' ? event.newValue : null);
  }
});
document.addEventListener('astro:before-swap', (event) => {
  const next = (event as Event & { newDocument: Document }).newDocument.documentElement;
  const choice = document.documentElement.dataset.appearance;
  if (choice) next.dataset.appearance = choice;
  else delete next.dataset.appearance;
});
document.addEventListener('astro:page-load', refreshControls);
window.addEventListener('pageshow', refreshControls);
refreshControls();
