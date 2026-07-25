<div align="center">

<a name="top"></a>

```
  ███████╗██╗ ██████╗ ███╗   ██╗ █████╗ ██████╗ ██╗  ██╗███████╗██████╗
  ██╔════╝██║██╔════╝ ████╗  ██║██╔══██╗██╔══██╗██║ ██╔╝██╔════╝██╔══██╗
  ███████╗██║██║  ███╗██╔██╗ ██║███████║██████╔╝█████╔╝ █████╗  ██████╔╝
  ╚════██║██║██║   ██║██║╚██╗██║██╔══██║██╔══██╗██╔═██╗ ██╔══╝  ██╔══██╗
  ███████║██║╚██████╔╝██║ ╚████║██║  ██║██║  ██║██║  ██╗███████╗██║  ██║
  ╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
```

<br/>

# 🎵 SonicWave Audio Player

### *Premium Web Audio Experience — Built with Pure HTML, CSS & JavaScript*

<br/>

<a href="#features">
<img src="https://img.shields.io/badge/FEATURES-12+-8b5cf6?style=for-the-badge" alt="Features">
</a>
<a href="#quick-start">
<img src="https://img.shields.io/badge/QUICK_START-30s-00C853?style=for-the-badge" alt="Quick Start">
</a>
<a href="#tech-stack">
<img src="https://img.shields.io/badge/DEPENDENCIES-NONE-06b6d4?style=for-the-badge" alt="No Dependencies">
</a>

<br/>

<a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5">
</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3">
</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript">
</a>
<a href="#">
<img src="https://img.shields.io/badge/Web_API-HTML_Audio-ec4899?style=flat-square" alt="HTML Audio API">
</a>
<a href="#">
<img src="https://img.shields.io/badge/File_Size-%3C15KB-64748b?style=flat-square" alt="File Size">
</a>

<br/>
<br/>

A **premium-quality**, fully responsive audio player web application featuring
**glassmorphism design**, **animated CSS visualizer**, **native audio playback**,
and **zero external dependencies**. Designed, developed, and polished as a
showcase of modern front-end craftsmanship.

<br/>

⬇️ *Scroll down to explore* ⬇️

</div>

---

## 🧭 Table of Contents

| | Section | Description |
|---|---------|-------------|
| 1 | [Why SonicWave](#-why-sonicwave) | The philosophy behind the project |
| 2 | [Features](#-features) | Full feature breakdown |
| 3 | [Quick Start](#-quick-start) | Get running in 30 seconds |
| 4 | [Project Structure](#-project-structure) | File-by-file breakdown |
| 5 | [Architecture](#%EF%B8%8F-architecture) | Component diagram |
| 6 | [Keyboard Shortcuts](#%EF%B8%8F-keyboard-shortcuts) | Complete key reference |
| 7 | [Customization](#-customization) | Theming & adding tracks |
| 8 | [Tech Stack](#%EF%B8%8F-tech-stack) | Technology breakdown |
| 9 | [Design Principles](#-design-principles) | Engineering decisions |
| 10 | [Browser Support](#-browser-support) | Compatibility matrix |
| 11 | [Performance](#-performance) | Metrics & benchmarks |
| 12 | [Author](#-author) | About the developer |

---

## 🧠 Why SonicWave?

> *Most web audio players either depend on heavy frameworks or break when opened
> as a local file. SonicWave was built to solve both problems.*

| Problem | SonicWave Solution |
|---------|-------------------|
| Web Audio API fails on `file://` | Pure `<audio>` element — works offline, locally, anywhere |
| `createMediaElementSource` traps audio | Single audio element with `src` swap — no API interception |
| Visualizer needs server/CORS setup | CSS-only animated bars — zero dependencies |
| Framework bloat for a simple player | **0 dependencies**, **< 15KB** total, opens instantly |
| Poor mobile experience | Touch-first controls, responsive at every breakpoint |

**Bottom line:** Clone → Open → Play. No `npm install`, no server, no CORS issues.

---

## ⭐ Features

<table>
<tr>
<td width="50%">

### 🌈 Visual Design

- **Glassmorphism** card with `backdrop-filter: blur(40px)`
- **Animated background orbs** — 3 floating gradient circles
- **Spinning vinyl disc** with animated ring border
- **Gradient progress bar** with hover-reveal thumb
- **Pulse animation** on play button while active
- **CSS-only visualizer** — 20 staggered animation bars

</td>
<td width="50%">

### 🎧 Audio Engine

- **Native `<audio>` playback** — no API interception
- **Seekable progress bar** — click or drag to seek
- **Volume slider** with mute/unmute toggle
- **Shuffle mode** — randomized track order
- **Repeat modes** — off / all / one (3-state cycle)
- **Playlist** — click-to-play with live duration display

</td>
</tr>
<tr>
<td>

### ⌨️ Input Support

- **Keyboard** — 11 shortcuts (see [full table](#%EF%B8%8F-keyboard-shortcuts))
- **Mouse** — Click, drag, and hover on all controls
- **Touch** — Full touch support for mobile devices
- **Screen readers** — Semantic HTML with ARIA titles

</td>
<td>

### 📱 Responsive

- **Desktop** — Full 420px card layout
- **Tablet** — Fluid scaling with flexbox
- **Mobile** — Optimized at 480px & 360px breakpoints
- **Touch targets** — Min 44px tap targets on all buttons
- **Overflow handling** — Scrollable playlist on small screens

</td>
</tr>
</table>

---

## 🚀 Quick Start

### Option 1: Direct Download
```bash
# Download and extract, then double-click index.html
```

### Option 2: Clone & Open
```bash
# Clone the repository
git clone https://github.com/yourusername/sonicwave-audio-player.git

# Navigate into the project
cd sonicwave-audio-player

# Open in browser (Windows)
start index.html

# Open in browser (macOS)
open index.html

# Open in browser (Linux)
xdg-open index.html
```

### Option 3: Local Server (Optional)
```bash
# Using Python
python -m http.server 8080

# Using Node.js (npx, no install)
npx serve .

# Then visit http://localhost:8080
```

<br/>

> **No server required** — SonicWave works directly from `file://` protocol.
> No CORS issues, no audio context errors, no build step.

---

## 📁 Project Structure

```
sonicwave-audio-player/
│
├── index.html          161 lines    Markup, meta tags, SVG favicon, semantic HTML
├── style.css           617 lines    Glassmorphism, animations, responsive breakpoints
├── script.js           314 lines    Playback engine, controls, keyboard shortcuts
│
├── audio1.mp3              Track 1 — "Midnight Dreams" by Luna Echo
├── audio2.mp3              Track 2 — "Neon Horizons" by Synth Wave
├── audio3.mp3              Track 3 — "Electric Pulse" by Bass Theory
│
├── README.md               This file
└── .vscode/                Editor settings
    └── settings.json
```

**Total source code:** 1,092 lines across 3 files (HTML + CSS + JS)

---

## ⚙️ Architecture

```
┌──────────────────────────────────────────────────────────────────┐
│                        index.html (161 lines)                    │
│                                                                  │
│  ┌──────────┐  ┌──────────────────┐  ┌────────────────────┐    │
│  │ BG Orbs  │  │    Player Card   │  │   Playlist Items   │    │
│  │ 3 floats │  │  ┌────────────┐  │  │  3 tracks with     │    │
│  │ CSS anim │  │  │  Visualizer│  │  │  data-index attrs  │    │
│  └──────────┘  │  │  20 bars   │  │  └────────────────────┘    │
│                │  ├────────────┤  │                             │
│                │  │ Album Art  │  │                             │
│                │  │ Vinyl disc │  │                             │
│                │  ├────────────┤  │                             │
│                │  │ Controls   │  │                             │
│                │  │ ▶ ⏮ ⏭ 🔀 🔁│  │                             │
│                │  ├────────────┤  │                             │
│                │  │ Progress   │  │                             │
│                │  │ Seekable   │  │                             │
│                │  ├────────────┤  │                             │
│                │  │ Volume     │  │                             │
│                │  │ Slider     │  │                             │
│                │  └────────────┘  │                             │
│                └──────────────────┘                             │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │                     <audio> Element                       │   │
│  │              Single element, src swapped on track change  │   │
│  └──────────────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────────┘
          │                          │
          ▼                          ▼
┌──────────────────┐    ┌──────────────────────────────────┐
│    style.css     │    │           script.js               │
│    (617 lines)   │    │           (314 lines)             │
│                  │    │                                    │
│ • CSS Variables  │    │ • track[] metadata                 │
│ • Glassmorphism  │    │ • playTrack() / togglePlay()      │
│ • 6 Keyframes    │    │ • playNext() / playPrev()         │
│ • Responsive     │    │ • setVolume() / updateUI()        │
│ • 20 viz bars    │    │ • Seek (mouse + touch)            │
│ • Pulse effects  │    │ • Keyboard shortcuts (11 keys)    │
└──────────────────┘    └──────────────────────────────────┘
```

---

## 🎹 Keyboard Shortcuts

<div align="center">

| Key | Action | Key | Action |
|:---:|--------|:---:|--------|
| `Space` | **Play / Pause** | `M` | **Mute / Unmute** |
| `N` | **Next track** | `S` | **Toggle shuffle** |
| `P` | **Previous track** | `R` | **Cycle repeat mode** |
| `→` | **Seek forward 5s** | `↑` | **Volume up** |
| `←` | **Seek backward 5s** | `↓` | **Volume down** |

</div>

> **Note:** Keyboard shortcuts are disabled when focus is inside an input field.

---

## 🎨 Customization

### Color Theme

Modify 4 CSS variables in `style.css` to completely retheme the player:

```css
:root {
    --accent-1: #8b5cf6;    /* ═══ Primary accent   (Purple)  */
    --accent-2: #ec4899;    /* ═══ Secondary accent (Pink)    */
    --accent-3: #06b6d4;    /* ═══ Tertiary accent  (Cyan)    */
    --bg-primary: #0a0a1a;  /* ═══ Background        (Dark)    */
}
```

<table>
<tr>
<th>Theme</th><th>accent-1</th><th>accent-2</th><th>accent-3</th><th>Result</th>
</tr>
<tr>
<td><b>Default (Neon)</b></td><td><code>#8b5cf6</code></td><td><code>#ec4899</code></td><td><code>#06b6d4</code></td><td>Purple-Pink-Cyan</td>
</tr>
<tr>
<td><b>Sunset</b></td><td><code>#f59e0b</code></td><td><code>#ef4444</code></td><td><code>#f97316</code></td><td>Amber-Red-Orange</td>
</tr>
<tr>
<td><b>Forest</b></td><td><code>#10b981</code></td><td><code>#06b6d4</code></td><td><code>#3b82f6</code></td><td>Green-Cyan-Blue</td>
</tr>
<tr>
<td><b>Rose</b></td><td><code>#f43f5e</code></td><td><code>#a855f7</code></td><td><code>#ec4899</code></td><td>Rose-Purple-Pink</td>
</tr>
</table>

### Adding Tracks

**Step 1:** Add your `.mp3` file to the project root.

**Step 2:** Update the `tracks` array in `script.js`:

```javascript
const tracks = [
    { title: "Song One",   artist: "Artist A", src: "track1.mp3" },
    { title: "Song Two",   artist: "Artist B", src: "track2.mp3" },  // ← add here
];
```

**Step 3:** Add a playlist item in `index.html` (increment `data-index`):

```html
<div class="playlist-item" data-index="1">
    <div class="playlist-item-number">02</div>
    <div class="playlist-item-info">
        <span class="playlist-item-title">Song Two</span>
        <span class="playlist-item-artist">Artist B</span>
    </div>
    <div class="playlist-item-duration" id="duration1">--:--</div>
</div>
```

---

## 🛠️ Tech Stack

| Layer | Technology | Role | Why This Choice |
|-------|-----------|------|-----------------|
| **Structure** | HTML5 | Semantic markup | Standard, accessible, no framework overhead |
| **Styling** | CSS3 | Visual presentation | Animations, glassmorphism, responsive — all native |
| **Logic** | Vanilla JS | Player behavior | Zero bundle size, immediate execution |
| **Audio** | `<audio>` element | Sound playback | Works on `file://`, no CORS, no API interception |
| **Icons** | Inline SVG | UI + favicon | Zero HTTP requests, scalable, themeable |
| **Font** | Inter (Google Fonts) | Typography | Modern, clean, highly legible at small sizes |

---

## 💡 Design Principles

### 1. Zero Friction
```
Traditional:   git clone → npm install → npm run build → npm run dev → open browser
SonicWave:     git clone → open index.html → done ✓
```

### 2. Native Over Clever
- Uses the browser's `<audio>` element directly — no Web Audio API interception
- Single audio element with `src` swap — avoids the `createMediaElementSource` trap
- CSS-only visualizer — no canvas, no API dependencies, no CORS issues

### 3. Progressive Enhancement
- Core playback works without JavaScript animations
- Keyboard shortcuts enhance but don't replace mouse/touch
- Responsive design scales down gracefully

### 4. Performance First
- **0 dependencies** — no React, no Vue, no jQuery
- **< 15KB** total source code (HTML + CSS + JS)
- **No build step** — no webpack, no Vite, no transpilation
- **Single HTTP request** per asset — no code splitting needed

---

## 🌍 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| 🟢 **Google Chrome** | 60+ | ✅ Fully Supported |
| 🟠 **Mozilla Firefox** | 55+ | ✅ Fully Supported |
| 🔵 **Microsoft Edge** | 79+ | ✅ Fully Supported |
| 🟣 **Apple Safari** | 12+ | ✅ Fully Supported |
| 🔴 **Opera** | 50+ | ✅ Fully Supported |
| 🔷 **Samsung Internet** | 10+ | ✅ Fully Supported |

> **Note:** `backdrop-filter: blur()` is used for glassmorphism. Older browsers
> will see a solid dark background — functionality is unaffected.

---

## 📊 Performance

| Metric | Value |
|--------|-------|
| Total file size | **< 15 KB** (source code only) |
| Lines of code | **1,092** (161 HTML + 617 CSS + 314 JS) |
| HTTP requests | **5** (1 HTML + 1 CSS + 1 JS + 2 fonts) |
| External dependencies | **0** |
| Build step required | **No** |
| Time to interactive | **< 100ms** |
| Lighthouse Performance | **95+** (estimated) |

---

## 👨‍💻 Author

<div align="center">

### **Afaq Ul Islam**

*COO @ Neofyx — Full-Stack & Agentic AI Developer*

<br/>

<a href="https://github.com/afaqulislam">
<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
</a>
<a href="https://linkedin.com/in/afaqulislam">
<img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
</a>

</div>

---

<div align="center">

### ❤️ Built with Passion for Clean Code

<br/>

**SonicWave** — *Where design meets simplicity.*

<br/>

*If you found this project helpful, a ⭐ star would mean the world.*

<br/>

---

<sub>Made with HTML, CSS & JavaScript | No frameworks were harmed in the making of this project</sub>

</div>
