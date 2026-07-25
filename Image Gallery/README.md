<div align="center">

```
    _                              _     _     _
   | |                            (_)   | |   | |
   | |        ___  _   _  _ __ __ _  __| |   | |     ___   ___
   | |       / _ \| | | || '__/ _` |/ _` |   | |    / _ \ / __|
   | |______|  __/| |_| || | | (_| | (_| |   | |___|  __/| (__
   |_______|\___| \__,_||_|  \__,_|\__,_|   \_____/\___| \___|
```

<br/>

# **Lumina Gallery**

### _A modern, glassmorphism image gallery with zero dependencies._

<br/>

![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)
![No Dependencies](https://img.shields.io/badge/Dependencies-None-brightgreen?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

<br/>

```
 10 Images  |  3 Files  |  0 Dependencies  |  ~18KB Total
```

</div>

---

<br/>

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Demo](#demo)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Keyboard Shortcuts](#keyboard-shortcuts)
- [Architecture](#architecture)
- [Customization](#customization)
- [Browser Support](#browser-support)
- [Performance](#performance)
- [Why Vanilla?](#why-vanilla)
- [Author](#author)
- [License](#license)

<br/>

---

<br/>

## Overview

Lumina Gallery is a lightweight, production-ready image gallery built entirely with vanilla web technologies. No React. No Vue. No build tools. Just clean HTML, modern CSS, and fast JavaScript.

It features a **glassmorphism** design language with frosted glass surfaces, **dark/light mode** with persistent preferences, a fullscreen **lightbox** viewer, **keyboard and touch** navigation, and a suite of **micro-interactions** — all in under 18KB of code.

<br/>

---

<br/>

## Features

```
 UI/UX
 ├── Glassmorphism design with backdrop-filter blur
 ├── Dark / Light mode with localStorage persistence
 ├── Ken Burns zoom animation on active images
 ├── Mouse parallax tracking on hover
 ├── Staggered entrance animations
 └── Spring-physics transitions

 Navigation
 ├── Previous / Next arrow buttons
 ├── Clickable thumbnail strip with auto-scroll
 ├── Fullscreen lightbox with backdrop blur
 ├── Touch / swipe gesture support (mobile)
 └── Keyboard shortcuts for all actions

 Interactions
 ├── Like / favorite system with heart particle burst
 ├── Auto-play slideshow (3s interval, cyclic)
 ├── Progress bar with animated indicator dot
 └── Image counter with number bump animation

 Technical
 ├── Zero dependencies — no frameworks or libraries
 ├── CSS custom properties for instant theming
 ├── Semantic HTML5 with ARIA labels
 ├── Responsive across 3 breakpoints
 └── SVG favicon with gradient
```

<br/>

---

<br/>

## Demo

> **To see it in action:**
>
> 1. Clone the repository
> 2. Open `index.html` in your browser
> 3. That's it. No install. No build. Just open.

<br/>

---

<br/>

## Quick Start

### Prerequisites

| Requirement | Needed? |
|:---|:---:|
| Modern browser | Yes |
| Node.js | No |
| Build tools | No |
| Web server | No (but optional) |

### Clone & Run

```bash
git clone https://github.com/your-username/lumina-gallery.git
cd lumina-gallery
open index.html
```

Or serve locally for a proper experience:

```bash
# Pick one:

python3 -m http.server 8000      # Python
npx serve .                       # Node.js
php -S localhost:8000             # PHP
```

Then visit `http://localhost:8000`.

### Add Your Images

Replace the 10 default images in the project root:

```
image 1.jpeg  ──>  your-photo-1.jpg
image 2.jpeg  ──>  your-photo-2.jpg
     ...                ...
image 10.jpeg ──>  your-photo-10.jpg
```

The gallery automatically detects all images. Just update the `src` attributes in `index.html`.

<br/>

---

<br/>

## Project Structure

```
lumina-gallery/
│
├── index.html              Entry point — semantic HTML5 structure
├── style.css               Design system — variables, glassmorphism, animations
├── script.js               Engine — gallery logic, lightbox, keyboard, touch
├── favicon.svg             Gradient SVG favicon
├── README.md               This file
│
└── assets/
    ├── image 1.jpeg        Gallery images
    ├── image 2.jpeg
    ├── ...
    └── image 10.jpeg
```

<br/>

---

<br/>

## Keyboard Shortcuts

| Key | Where | What Happens |
|:---:|:---:|:---|
| `←` | Gallery | Previous image |
| `→` | Gallery | Next image |
| `←` `→` | Lightbox | Navigate within lightbox |
| `F` | Gallery | Open fullscreen lightbox |
| `Esc` | Lightbox | Close lightbox |
| `Space` | Gallery | Toggle auto-play slideshow |
| `L` | Gallery | Like / unlike current image |

<br/>

---

<br/>

## Architecture

### CSS Design System

Every visual token is a CSS custom property. Change once, update everywhere.

```css
:root {
    /*  Brand Colors  */
    --accent:         #6c5ce7;                        /* Primary       */
    --danger:         #ff6b6b;                        /* Heart / Like  */
    --accent-glow:    rgba(108, 92, 231, 0.35);       /* Glow effect   */

    /*  Surfaces  */
    --bg-primary:     #f0f2f5;                        /* Page bg       */
    --bg-glass:       rgba(255, 255, 255, 0.45);      /* Glass panels  */

    /*  Elevation  */
    --shadow-lg:      0 16px 64px rgba(0, 0, 0, 0.12);
    --shadow-xl:      0 24px 80px rgba(0, 0, 0, 0.16);

    /*  Motion  */
    --transition-fast: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-spring: 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

Dark mode is scoped under `[data-theme="dark"]` and persisted to `localStorage`.

### JavaScript Modules

| Module | What It Does |
|:---|:---|
| **Gallery Core** | Image switching, counter, progress bar, thumbnail sync |
| **Like System** | Per-image favorites, particle animation, aggregate count |
| **Auto-Play** | Cyclic slideshow with play / pause toggle |
| **Theme Engine** | Dark / light toggle with `localStorage` persistence |
| **Lightbox** | Fullscreen overlay with navigation and backdrop |
| **Touch Handler** | Swipe gesture detection for mobile devices |
| **Keyboard Nav** | Context-aware keyboard shortcuts (gallery vs. lightbox) |
| **Parallax** | Mouse-tracked image movement on hover |

<br/>

---

<br/>

## Customization

### Change Colors

Edit the CSS variables in `style.css`:

```css
:root {
    --accent:     #e74c3c;    /* Red accent       */
    --danger:     #e67e22;    /* Orange like btn   */
    --bg-primary: #ffffff;    /* White background  */
}
```

### Change Fonts

1. Update the Google Fonts link in `index.html`
2. Change the `font-family` in `style.css`:

```css
body {
    font-family: 'Your-Font', sans-serif;
}
```

### Change Slideshow Speed

In `script.js`:

```javascript
autoPlayInterval = setInterval(nextImage, 3000); // milliseconds
```

<br/>

---

<br/>

## Browser Support

| Browser | Version | Status |
|:---|:---:|:---:|
| Google Chrome | 76+ | Supported |
| Mozilla Firefox | 103+ | Supported |
| Apple Safari | 14+ | Supported |
| Microsoft Edge | 79+ | Supported |
| iOS Safari | 14+ | Supported |
| Android Chrome | 76+ | Supported |

**Requires:** CSS Custom Properties, `backdrop-filter`, Flexbox, ES6+

<br/>

---

<br/>

## Performance

```
 Metric                   Value
 ──────────────────────── ───────
 Total file size          ~18 KB (excl. images)
 External dependencies    0
 DOM elements             ~80
 CSS rules                ~300
 JS functions             16
 Bundle / build step      None
 Time to interactive      Instant
```

<br/>

---

<br/>

## Why Vanilla?

> _"The best code is the code you don't have to maintain."_

| Reason | Benefit |
|:---|:---|
| **No framework overhead** | 0ms bundle parse time, 0KB dependency download |
| **No build tools** | No webpack, no Vite, no transpilation — just files |
| **Instant load** | Browser parses 3 files directly from disk |
| **Easy to understand** | Any developer can read and modify the code |
| **Longevity** | Vanilla HTML/CSS/JS will work in 20 years |
| **Portfolio piece** | Shows you can build without leaning on frameworks |

<br/>

---

<br/>

## Author

<div align="center">

**Afaq Ul Islam** — COO @ Neofyx | Full-Stack & Agentic AI Developer

_Built with precision. Designed to impress._

</div>

<br/>

---

<div align="center">

**[Back to Top](#lumina-gallery)**

</div>
