# Bruna Pessoa — Front-end Developer Portfolio

Live: [brunapessoa.github.io](https://brunapessoa.github.io)

Personal portfolio built without frameworks or build tools — vanilla HTML5, CSS3, and JavaScript (ES6 modules), deployed via GitHub Pages.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 (semantic elements) |
| Styling | CSS3 (custom properties, flexbox, grid) |
| Scripting | Vanilla JavaScript (ES6 modules) |
| Icons | Font Awesome 6 (CDN) |
| Typography | DM Sans — Google Fonts |
| Hosting | GitHub Pages |

No bundler. No framework. No build step.

---

## Architecture

```
├── index.html              # Single-page application entry point
├── styles/
│   ├── styles.css          # Base styles — mobile-first
│   └── media-queries.css   # Breakpoints: 760px (tablet), 993px (desktop)
├── scripts/
│   ├── content.js          # Multilingual content — exported constants (PT-BR, EN, NL)
│   ├── script.js           # Language switching — DOM injection via innerHTML
│   └── menu.js             # Hamburger menu — toggle + outside-click dismiss
└── images/
    ├── icons/              # Tech stack SVG/PNG badges
    ├── projects/           # Project thumbnails and demo video
    └── favicon/            # Multi-format favicon set
```

---

## Key Technical Decisions

### Internationalization without a library
Content in three languages (Portuguese, English, Dutch) is managed as exported constants in `content.js`. Language switching is handled by `script.js`, which replaces `innerHTML` of target elements on button click. No i18n library — zero runtime dependency.

### Mobile-first CSS
Base styles in `styles.css` target mobile. `media-queries.css` progressively enhances layout at 760px (tablet) and 993px (desktop). CSS custom properties (`--mainDarkColor`, `--colorDetail`, etc.) centralize the design tokens.

### Video as GIF for project demo
The Plan B Training card uses an autoplay video (`autoplay loop muted playsinline`) in place of a static thumbnail. The `playsinline` attribute is specifically required for iOS Safari to prevent fullscreen hijack. No JavaScript needed for playback control.

### Cross-browser link safety
All external links use `rel="noopener noreferrer"`. On iOS/Safari, `target="_blank"` without `rel="noopener"` silently falls back to same-tab navigation — this attribute resolves it and also prevents tabnapping attacks.

### Accessibility
- `aria-label` on icon-only anchor elements (LinkedIn, GitHub)
- `<abbr title="...">` on language selector buttons — tooltips update dynamically via JS when the language is switched
- Semantic HTML throughout (`<header>`, `<main>`, `<section>`, `<aside>`, `<nav>`, `<menu>`)

---

## Responsive Breakpoints

| Breakpoint | Target |
|---|---|
| Default (< 760px) | Mobile |
| 760px – 992px | Tablet |
| ≥ 993px | Desktop |

---

## Projects Featured

| Project | Stack | Notes |
|---|---|---|
| [Plan B Training](https://brunapessoa.github.io/b-plan-training/) | HTML, CSS, JS | Workout planner with localStorage persistence. Android app in closed testing on Google Play. |
| [Weatherly](https://brunapessoa.github.io/weather/) | React, Vite, Tailwind, WeatherAPI, Unsplash API | Weather SPA with geolocation, city search, and dynamic backgrounds |
| [Tasks Management](https://brunapessoa.github.io/to-do-list-react/) | React 19, React Router, Tailwind | SPA with routing, localStorage, controlled forms |
| [Login Screen](https://brunapessoa.github.io/login-project/) | HTML, CSS, JS | Login UI with dynamically injected password recovery modal |
| [Android Page](https://brunapessoa.github.io/Android-page-project/) | HTML, CSS | Responsive static page using `<picture>` with `srcset` breakpoints |

---

## Running Locally

No installation required.

```bash
git clone https://github.com/Brunapessoa/Bruna-pessoa.github.io.git
cd Bruna-pessoa.github.io
```

Open `index.html` directly in a browser, or serve with any static file server:

```bash
npx serve .
# or
python3 -m http.server 8080
```

> Note: ES6 module imports (`import`/`export`) require a server context — opening `index.html` via `file://` protocol may block module loading in some browsers.

---

## License

© Bruna Pessoa Machado. All rights reserved.
