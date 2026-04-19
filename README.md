# Sharif Computer Solutions

A responsive, mobile-first small-business website for custom PC planning, build guidance, upgrades, and troubleshooting.

## Tech stack

- Static HTML
- Modern CSS
- Vanilla JavaScript with ES modules

This setup is intentionally lightweight, production-ready, and easy to maintain without a build step.

## Project structure

```text
Sharif/
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── images/
│   │   └── og-card.svg
│   └── js/
│       ├── components.js
│       ├── content.js
│       └── main.js
├── index.html
├── robots.txt
├── sitemap.xml
└── README.md
```

## Run locally

Because the site uses ES modules, serve it from a local web server instead of opening `index.html` directly.

### Option 1: Python

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

### Option 2: Any static server

You can also serve the folder with Nginx, Apache, Netlify CLI, Vercel CLI, or any other static file server.

## Deploy

This site can be deployed to any static hosting provider.

### Netlify

1. Create a new site from this folder or Git repository.
2. Leave the build command empty.
3. Set the publish directory to `/`.

### Vercel

1. Import the project.
2. Choose the `Other` framework preset if prompted.
3. Leave the build command empty.
4. Set the output directory to `.` if needed.

### GitHub Pages

1. Push the project to a GitHub repository.
2. Enable GitHub Pages in repository settings.
3. Publish from the root directory or default branch, depending on your setup.

## Files to edit later

### Text and section content

- `assets/js/content.js`
- `index.html`

### Pricing

- `assets/js/content.js`

### Contact info

- `index.html`
- `assets/js/components.js`

### Styling and branding

- `assets/css/styles.css`

## Notes

- The contact form currently uses front-end validation and a placeholder success state.
- To make the form live, connect it to a backend endpoint or a service like Netlify Forms, Formspree, or a custom API.
- Update the Open Graph URL and image in `index.html` before launch.
- Replace the placeholder domain values in `index.html`, `robots.txt`, and `sitemap.xml` with the final live domain before launch.
