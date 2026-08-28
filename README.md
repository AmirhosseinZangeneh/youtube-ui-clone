# YouTube UI Clone

A responsive, interactive YouTube-inspired video feed built with semantic HTML, CSS and vanilla JavaScript.

> This is an educational UI recreation. It is not affiliated with or endorsed by YouTube. Replace third-party branding and media assets before using the project commercially.

## Features

- Responsive desktop, tablet and mobile layouts
- Dark, light and blue themes persisted with `localStorage`
- Search and live filtering by video title or channel
- Collapsible desktop sidebar and mobile bottom navigation
- Keyboard-accessible controls and video detail dialog
- Empty search state and lightweight toast feedback
- Local image assets with lazy loading for non-critical images
- Stable first paint with an accessible animated loader and skeleton cards
- Debounced search and reserved image dimensions to reduce layout shift

## Tech stack

- HTML5 semantic elements
- CSS3 Grid, Flexbox, custom properties and media queries
- Vanilla JavaScript (separate responsibilities, DOM APIs, event delegation and debounced filtering)
- System font stack with no render-blocking third-party font dependency

## Run locally

No build step is required. Open `index.html` in a browser, or serve the folder with any static web server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Project structure

```text
.
├── index.html
├── app.js
├── themes.js
├── channel-pictures/
├── header-pictures/
├── sidebar-pictures/
├── thumbnails/
├── theme-icons/
└── style/
    ├── content.css
    ├── header.css
    ├── sidebar.css
    └── style.css
```

## Publish checklist

- Serve the folder from a static host (GitHub Pages, Netlify or Vercel)
- Replace demonstration branding/media with owned or openly licensed assets
- Run Lighthouse and check the deployed site at mobile, tablet and desktop widths

## Next improvements

- Connect the UI to a real video API
- Add a dedicated video playback page
- Add a build step for minification and hashed asset names when the project grows
