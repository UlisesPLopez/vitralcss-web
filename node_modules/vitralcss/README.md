# 🔮 VitralCSS

**VitralCSS** is a lightweight visual micro-framework inspired by **Frutiger Aero** aesthetics and Apple's **Liquid Glass** design language. It offers animated visual components based on the **essential elements of nature**: Water, Ice, Fog, Fire, and Glass.

All in a single `.css` and `.js` file — ready to use!

---

## ✨ Features

- **Nature-Inspired Effects** — Water, Ice, Fog, Fire, and Glass visual themes
- **Frutiger Aero Revival** — Transparent, glossy aesthetics with depth and realism
- **No Dependencies** — Pure CSS & vanilla JavaScript
- **Smooth Animations** — Fluid transitions and hover effects built-in
- **Easy Hover Toggle** — Add `with-hover` class for interactive states
- **Panel Components** — Rectangular containers with `<element>-Panel-#` classes
- **Custom Shapes** — Animated organic forms with `<element>-Cu-#` classes
- **Dark Mode Ready** — Use `.dark-style &` modifier for dark themes
- **Lightweight** — Minimal footprint, maximum visual impact

---

## 🚀 Quick Start

### NPM

```bash
npm install vitracss
```

### CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vitracss/dist/VitraCss.min.css">
<script src="https://cdn.jsdelivr.net/npm/vitracss/dist/VitraCss.min.js" defer></script>
```

---

## 📦 Available Classes

### Panels

```html
<div class="Glass-Panel-1">...</div>
<div class="Water-Panel-5">...</div>
<div class="Ice-Panel-10">...</div>
```

Elements: `glass`, `water`, `ice`, `fog`, `fire`  
Variants: 1-10

### Custom Shapes

```html
<div class="Glass-Cu-1">...</div>
<div class="Fire-Cu-5">...</div>
<div class="Fog-Cu-10">...</div>
```

### Interactive Hover

Add `with-hover` to any component:

```html
<div class="Glass-Panel-5 with-hover">Hover me!</div>
```

### Dark Style

Wrap components with `.dark-style` for dark themes:

```html
<div class="dark-style">
  <div class="Glass-Panel-5">Dark mode ready!</div>
</div>
```

---

## 🎨 Example

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vitracss/dist/VitraCss.min.css">
</head>
<body>
  <div class="Glass-Panel-5 with-hover" style="padding: 2rem; text-align: center;">
    <h1>Hello VitralCSS!</h1>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/vitracss/dist/VitraCss.min.js" defer></script>
</body>
</html>
```

---

## 📁 Project Structure

- **Source code:** [vitralcss-dev](https://github.com/UlisesPLopez/vitralcss-dev) (private)
- **Website & Docs:** [vitralcss-web](https://github.com/UlisesPLopez/vitralcss-web)

---

## 📄 License

MIT License © Ulises López
