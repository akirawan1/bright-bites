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
});