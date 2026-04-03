# Dandy UI

A lightweight, edge-first React UI library built on **TailwindCSS v4**.  
Optimized for Cloudflare Pages, serverless, and SSR environments.

[![npm](https://img.shields.io/npm/v/dandy-ui)](https://www.npmjs.com/package/dandy-ui)
[![license](https://img.shields.io/npm/l/dandy-ui)](LICENSE)

---

## Features

- 🎨 TailwindCSS v4 - Latest Tailwind with CSS-first configuration
- 🌙 Dark Mode - Built-in dark mode support with semantic tokens
- 📱 Mobile-First - Responsive, touch-friendly design
- 🔧 TypeScript - Full TypeScript support with strict type checking
- 🚀 Next.js Ready - Compatible with Next.js 13+ App Router
- 🌳 Tree Shakable - Only import what you need
- ♿ Accessible - WCAG 2.1 AA compliant components
- 🎯 Semantic Tokens - CSS custom properties for consistent theming

---

## Quick Start

```bash
npm install dandy-ui
```

```css
@import "tailwindcss";
@import "dandy-ui/theme.css";
@import "dandy-ui/base.css";
```

```tsx
import { ThemeProvider } from "dandy-ui";

<ThemeProvider>
  <App />
</ThemeProvider>;
```

For SSR, add `<ThemeScript />` in `<head>` to prevent flash of unstyled content.

---

## Entry Points

| Entry               | Purpose                          | Example                                                 |
| ------------------- | -------------------------------- | ------------------------------------------------------- |
| `dandy-ui`          | Core components                  | `import { Button, Dialog } from "dandy-ui"`             |
| `dandy-ui/extra`    | Heavy components (optional deps) | `import { Drawer, DatePicker } from "dandy-ui/extra"`   |
| `dandy-ui/markdown` | Markdown renderer                | `import { MarkdownViewer } from "dandy-ui/markdown"`    |
| `dandy-ui/utils`    | Pure utility functions           | `import { formatDate, debounce } from "dandy-ui/utils"` |

---

## Components

**Layout** — `Container` · `Flex` · `Grid` · `Paper` · `Section` · `Table` · `ScrollShadow`

**Typography** — `Text` · `Heading` · `Hint` · `Label` · `Divider` · `Code` · `Kbd`

**Forms** — `Button` · `IconButton` · `Input` · `TextArea` · `NumberInput` · `Select` · `CheckBox` · `Radio` · `Switch` · `Slider` · `FileInput` · `Rating` · `Icon`

**Feedback** — `Alert` · `Badge` · `Chips` · `Spinner` · `Skeleton` · `ProgressBar` · `CircularProgress`

**Overlays** — `Dialog` · `Popover` · `InfoTip` · `SnackbarProvider`

**Compound** — `Accordion`

**Extra** — `Drawer` · `DatePicker` · `DateRangePicker` · `MultiDatePicker` · `MultiSelect` · `InputOTP` · `SidebarLayout` · `SideBar`

**Markdown** — `MarkdownViewer`

---

## Peer Dependencies

**Required:**

```bash
npm install react react-dom tailwindcss @radix-ui/react-tooltip
```

**Optional** (install only what you use):

| Package                                                                         | Component                                    |
| ------------------------------------------------------------------------------- | -------------------------------------------- |
| `@radix-ui/react-dialog`                                                        | Dialog                                       |
| `@radix-ui/react-popover`                                                       | Popover                                      |
| `@radix-ui/react-select`                                                        | Select                                       |
| `vaul`                                                                          | Drawer                                       |
| `react-day-picker`                                                              | DatePicker, DateRangePicker, MultiDatePicker  |
| `input-otp`                                                                     | InputOTP                                     |
| `react-markdown` `rehype-highlight` `rehype-raw` `rehype-sanitize` `remark-gfm` | MarkdownViewer                               |

---

## Theme System

CSS custom properties defined in `theme.css`. Never hardcode colors.

**Tokens:** `primary` · `secondary` · `accent` · `background` · `foreground` · `muted` · `border` · `card` · `popover` · `success` · `warning` · `error` · `info`  
Each has a `-foreground` variant. Dark mode activates via the `dark` class.

```tsx
<div className="bg-primary text-primary-foreground" />
```

---

## License

MIT © [Nidhal Bettaibi](https://github.com/bettaibi)
