<a id="top"></a>

<div align="center">

```
   ██████╗ ███████╗ ██████╗██╗  ██╗██████╗ ███████╗██████╗ 
  ██╔════╝ ██╔════╝██╔════╝██║  ██║██╔══██╗██╔════╝██╔══██╗
  ╚█████╗  █████╗  ██║     ███████║██████╔╝█████╗  ██████╔╝
   ╚═══██╗ ██╔══╝  ██║     ██╔══██║██╔═══╝ ██╔══╝  ██╔══██╗
  ██████╔╝ ███████╗╚██████╗██║  ██║██║     ███████╗██║  ██║
  ╚═════╝  ╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝     ╚══════╝╚═╝  ╚═╝
                        ◆  P R O  ◆
```

<br/>

![Version](https://img.shields.io/badge/version-1.0.0-8b5cf6?style=for-the-badge&labelColor=1a1a2e)
![License](https://img.shields.io/badge/license-MIT-22d3ee?style=for-the-badge&labelColor=1a1a2e)
![Size](https://img.shields.io/badge/size-~12KB-f472b6?style=for-the-badge&labelColor=1a1a2e)
![Dependencies](https://img.shields.io/badge/dependencies-0-fb923c?style=for-the-badge&labelColor=1a1a2e)

<br/>

### *Where elegant design meets secure engineering.*

A **premium calculator** built with glassmorphism UI, buttery-smooth animations, and a military-grade safe math engine — zero dependencies, zero compromises.

<br/>

[✨ Features](#-features) &nbsp;&nbsp;|&nbsp;&nbsp; [🚀 Quick Start](#-quick-start) &nbsp;&nbsp;|&nbsp;&nbsp; [⌨️ Shortcuts](#%EF%B8%8F-keyboard-shortcuts) &nbsp;&nbsp;|&nbsp;&nbsp; [🧠 Architecture](#-architecture) &nbsp;&nbsp;|&nbsp;&nbsp; [🎨 Customization](#-customization)

</div>

---

## ✨ Features

<div align="center">

> *Every pixel crafted. Every interaction considered.*

</div>

<br/>

<table>
<tr>
<td width="50%" valign="top">

#### 🎨 Design

| Feature | Detail |
|:--------|:-------|
| **Glassmorphism UI** | `backdrop-filter: blur(60px)` frosted glass panels |
| **Animated BG** | 3 floating color orbs — purple, cyan, pink |
| **Dark + Light** | One-click toggle, persisted in `localStorage` |
| **Micro-interactions** | Hover lift, press scale, slide-in items |
| **Gradient Accents** | Purple → Cyan → Pink display divider |
| **Error Animation** | Smooth shake on invalid input |
| **Brand Typography** | Space Grotesk + JetBrains Mono |

</td>
<td width="50%" valign="top">

#### ⚡ Engineering

| Feature | Detail |
|:--------|:-------|
| **Safe Math Engine** | Shunting-yard algorithm — zero `eval()` |
| **Calc History** | Last 20 results, click to reuse |
| **Full Keyboard** | 12+ shortcuts for power users |
| **Responsive** | Mobile → Tablet → Desktop |
| **PWA Ready** | Installable via `site.webmanifest` |
| **Accessible** | `prefers-reduced-motion` fallback |
| **Zero Deps** | Pure vanilla HTML + CSS + JS |

</td>
</tr>
</table>

---

## 🏗️ Project Structure

```
calc-x-pro/
│
├── 📄 index.html           →  Semantic HTML5 markup          (99 lines)
├── 🎨 style.css            →  Glassmorphism + dual themes   (642 lines)
├── ⚙️ script.js            →  Safe calculator engine        (195 lines)
├── 🎯 favicon.svg          →  SVG gradient calculator icon
├── 📋 site.webmanifest     →  PWA install manifest
│
└── 📊 Total                →  936 lines | 0 dependencies | ~12 KB
```

---

## 🚀 Quick Start

<br/>

**Option A — Clone & Run**
```bash
git clone https://github.com/your-username/calc-x-pro.git
cd calc-x-pro
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux
```

**Option B — Download & Open**
```
1. Download all 6 files into a single folder
2. Open index.html in any modern browser
3. That's it. No build step. No server. No hassle.
```

<br/>

> 💡 **Pro tip:** Use a local server (`npx serve .`) for full PWA and manifest support.

---

## ⌨️ Keyboard Shortcuts

<table>
<tr>
<td width="50%">

| Key | Action |
|:---:|:-------|
| `0` — `9` | Input digits |
| `.` | Decimal point |
| `+` `-` `*` `/` | Operators |
| `%` | Calculate percentage |

</td>
<td width="50%">

| Key | Action |
|:---:|:-------|
| `Enter` / `=` | Calculate result |
| `Backspace` | Delete last character |
| `Escape` | Clear everything |
| `H` | Toggle history panel |
| `D` | Toggle dark / light theme |

</td>
</tr>
</table>

---

## 🧠 Architecture

### Why No `eval()`?

Most calculators use `eval()` to compute results. **We don't.**

`eval()` executes **arbitrary JavaScript** — a critical security vulnerability. CalcX Pro uses the **Shunting-yard algorithm** instead:

```
┌─────────────────────────────────────────────────────────┐
│                    CALCULATION PIPELINE                  │
├─────────────────────────────────────────────────────────┤
│                                                         │
│   "3 + 4 × 2"                                          │
│       │                                                 │
│       ▼                                                 │
│   ┌───────────┐                                         │
│   │ TOKENIZER │  → ["3", "+", "4", "×", "2"]           │
│   └─────┬─────┘                                         │
│         ▼                                               │
│   ┌──────────────────┐                                  │
│   │ INFIX → POSTFIX  │  → [3, 4, 2, ×, +]             │
│   │  (Shunting-yard) │                                  │
│   └────────┬─────────┘                                  │
│            ▼                                            │
│   ┌────────────────┐                                    │
│   │ POSTFIX EVAL   │  → Stack-based evaluation          │
│   └────────┬───────┘                                    │
│            ▼                                            │
│         ══════                                          │
│          = 11   ✅  (correct: 3 + (4×2) = 11)          │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Benefits:**
- ✅ No arbitrary code execution
- ✅ Correct operator precedence (`×` before `+`)
- ✅ Graceful division-by-zero handling
- ✅ Floating-point precision control (10 decimal places)

---

### 🎨 Theme System

```css
/* 20+ CSS custom properties power both themes */
:root {
    --bg-primary: #080818;
    --glass-bg: rgba(18, 18, 40, 0.95);
    --text-primary: #ffffff;
    --accent-purple: #8b5cf6;
    --btn-num-bg: rgba(255, 255, 255, 0.08);
}

[data-theme="light"] {
    --bg-primary: #e8eaf0;
    --glass-bg: rgba(255, 255, 255, 0.95);
    --text-primary: #111827;
    --accent-purple: #6d28d9;
    --btn-num-bg: rgba(0, 0, 0, 0.06);
}
```

One attribute. **Zero JavaScript class toggling.** Pure CSS magic.

---

## 🎨 Customization

<table>
<tr>
<td width="50%" valign="top">

#### Change Brand Colors

Edit `:root` variables in `style.css`:

```css
:root {
    --accent-purple: #8b5cf6;  /* Primary */
    --accent-pink: #f472b6;    /* Error */
    /* Your brand colors here */
}
```

</td>
<td width="50%" valign="top">

#### Change Fonts

Replace the Google Fonts import:

```css
@import url('https://fonts.googleapis.com/css2?
  family=YOUR_FONT&display=swap');

body {
    font-family: 'YOUR_FONT', sans-serif;
}
```

</td>
</tr>
</table>

#### Adjust History Limit

```javascript
// script.js — line 125
if (history.length > 20) history.pop();
//                        ↑ Change 20 to your preferred limit
```

---

## ⚡ Performance

<table>
<tr>
<td width="33%" align="center">

### ~12 KB
**Total Size**<br/>
<sub>uncompressed, all files</sub>

</td>
<td width="33%" align="center">

### 0
**Dependencies**<br/>
<sub>pure vanilla code</sub>

</td>
<td width="33%" align="center">

### 936
**Lines of Code**<br/>
<sub>clean & minimal</sub>

</td>
</tr>
<tr>
<td align="center">

### ~40
**DOM Elements**<br/>
<sub>lightweight render</sub>

</td>
<td align="center">

### GPU
**Animations**<br/>
<sub>transform-only</sub>

</td>
<td align="center">

### 60fps
**Smooth**<br/>
<sub>no jank</sub>

</td>
</tr>
</table>

---

## 🌐 Browser Support

| Browser | Version | Status |
|:--------|:--------|:------:|
| ![Chrome](https://img.shields.io/badge/Chrome-76%2B-4285F4?logo=googlechrome&logoColor=white&style=flat-square) | 76+ | ✅ |
| ![Firefox](https://img.shields.io/badge/Firefox-103%2B-FF7139?logo=firefoxbrowser&logoColor=white&style=flat-square) | 103+ | ✅ |
| ![Safari](https://img.shields.io/badge/Safari-14%2B-006CFF?logo=safari&logoColor=white&style=flat-square) | 14+ | ✅ |
| ![Edge](https://img.shields.io/badge/Edge-79%2B-0078D4?logo=microsoftedge&logoColor=white&style=flat-square) | 79+ | ✅ |
| ![Safari iOS](https://img.shields.io/badge/Safari%20iOS-14%2B-000000?logo=apple&logoColor=white&style=flat-square) | 14+ | ✅ |
| ![Chrome Android](https://img.shields.io/badge/Chrome%20Android-Latest-4285F4?logo=android&logoColor=white&style=flat-square) | Latest | ✅ |

> `-webkit-backdrop-filter` prefix included for full Safari compatibility.

---

## 📁 File Breakdown

<table>
<tr>
<th>File</th>
<th>Purpose</th>
<th>Key Techniques</th>
</tr>
<tr>
<td><code>index.html</code></td>
<td>semantic markup, SVG icons</td>
<td>ARIA titles, data-theme, manifest link</td>
</tr>
<tr>
<td><code>style.css</code></td>
<td>glassmorphism, themes, animations</td>
<td>CSS vars, backdrop-filter, @keyframes, Grid</td>
</tr>
<tr>
<td><code>script.js</code></td>
<td>calculator engine, UI logic</td>
<td>Shunting-yard, localStorage, keyboard events</td>
</tr>
<tr>
<td><code>favicon.svg</code></td>
<td>gradient calculator icon</td>
<td>SVG gradients, rounded rect, circles</td>
</tr>
<tr>
<td><code>site.webmanifest</code></td>
<td>PWA install support</td>
<td>icons, theme_color, display: standalone</td>
</tr>
</table>

---

## 📜 License

```
MIT License — feel free to use, modify, and distribute.
Just give credit where it's due. ✌️
```

---

<div align="center">

### Built by **Afaq Ul Islam** — COO @ Neofyx | Full-Stack & Agentic AI Developer

*Crafted with precision. Designed for delight.*

<br/>

**[⬆ Back to Top](#top)**

</div>
