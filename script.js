// Basic interactivity: mobile nav toggle, set year, simple form validation, theme toggle with persistence
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');
  navToggle && navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });

  // set current year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Simple client-side email check for newsletter
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      const email = newsletterForm.querySelector('input[name="email"]');
      if (!email || !/^\S+@\S+\.\S+$/.test(email.value)) {
        e.preventDefault();
        email.focus();
        alert('Please enter a valid email address.');
      }
    });
  }

  // THEME (dark / light) TOGGLE
  const THEME_KEY = 'brightbites_theme';
  const themeButtons = document.querySelectorAll('#theme-toggle');
  const prefersDarkQuery = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      themeButtons.forEach(btn => {
        btn.setAttribute('aria-pressed', 'true');
        const icon = btn.querySelector('.theme-icon');
        if (icon) icon.textContent = '☀️';
      });
    } else if (theme === 'light') {
      document.documentElement.removeAttribute('data-theme');
      themeButtons.forEach(btn => {
        btn.setAttribute('aria-pressed', 'false');
        const icon = btn.querySelector('.theme-icon');
        if (icon) icon.textContent = '🌙';
      });
    } else {
      // system: remove explicit attribute so CSS prefers-color-scheme can apply
      document.documentElement.removeAttribute('data-theme');
      themeButtons.forEach(btn => {
        btn.setAttribute('aria-pressed', 'false');
        const icon = btn.querySelector('.theme-icon');
        if (icon) {
          icon.textContent = prefersDarkQuery && prefersDarkQuery.matches ? '☀️' : '🌙';
        }
      });
    }
  }

  // initialize theme from localStorage or system preference
  function initTheme() {
    const stored = localStorage.getItem(THEME_KEY); // 'dark' | 'light' | null
    if (stored === 'dark' || stored === 'light') {
      applyTheme(stored);
    } else {
      // follow system preference
      applyTheme(null); // null = system
    }
  }

  // toggle handler (cycles light -> dark -> system)
  function toggleTheme() {
    const currentStored = localStorage.getItem(THEME_KEY);
    if (currentStored === 'dark') {
      // switch to system (unset)
      localStorage.removeItem(THEME_KEY);
      applyTheme(null);
    } else if (currentStored === 'light') {
      // switch to dark
      localStorage.setItem(THEME_KEY, 'dark');
      applyTheme('dark');
    } else {
      // currently system, switch to light
      localStorage.setItem(THEME_KEY, 'light');
      applyTheme('light');
    }
  }

  // attach listeners to all theme toggle buttons
  themeButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleTheme();
    });
  });

  // respond to system changes when user hasn't chosen a preference
  if (prefersDarkQuery) {
    prefersDarkQuery.addEventListener('change', (e) => {
      const stored = localStorage.getItem(THEME_KEY);
      if (!stored) {
        applyTheme(null);
      }
    });
  }

  initTheme();
});