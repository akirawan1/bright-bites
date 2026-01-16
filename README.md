# Bright Bites — Website Template

A lightweight, accessible static website template for the Bright Bites nonprofit. Includes homepage, about, donate, contact, CSS, and small JS for interactivity — now with accessible dark mode.

## Files
- `index.html` — Homepage
- `styles.css` — Main styles (CSS variables, responsive)
- `script.js` — Mobile nav, theme toggle, and small behaviors
- `about.html` — About page
- `donate.html` — Donate page
- `contact.html` — Contact and volunteer info
- `LICENSE` — MIT license

## Quick start
1. Create a new repository on GitHub named `bright-bites-site` under your account (or an organization).
2. Clone the repo or create the directory locally and copy these files into it.
3. From the project root run:

   ```
   git init
   git add .
   git commit -m "Initial commit: Bright Bites website"
   git branch -M main
   git remote add origin https://github.com/akirawan1/bright-bites-site.git
   git push -u origin main
   ```

4. (Optional) Enable GitHub Pages: go to the repository Settings → Pages and set the source to the `main` branch, folder `/ (root)`. Save and wait a few minutes.

## Customization
- Replace placeholder images and the logo.
- Update Formspree or your backend endpoints for newsletter/contact forms.
- Integrate a donation processor (Stripe, Donorbox, PayPal).
- For a CMS, adapt to a static site generator (Eleventy/Hugo) or headless CMS.

## Accessibility & best practices included
- Skip link for keyboard users
- Semantic HTML and headings
- Responsive design
- Dark mode with persistence and system preference

License: MIT