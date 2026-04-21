# dandy-ui

A lightweight, edge-first React UI component library built on TailwindCSS v4. Optimized for Cloudflare Pages, serverless, and SSR environments.

## Setup

```bash
npm install dandy-ui
```

```tsx
// app.css or global styles
import "dandy-ui/theme.css";
import "dandy-ui/base.css";
```

```tsx
// Root layout
import { ThemeProvider, ThemeScript } from "dandy-ui";

<ThemeProvider>
  <App />
</ThemeProvider>;

// For SSR (Next.js app router, Remix, Astro), add ThemeScript to prevent FOUC:
<html>
  <head>
    <ThemeScript />
  </head>
  <body>...</body>
</html>;
```

### Peer Dependencies

Core (required):

```bash
npm install @radix-ui/react-tooltip tailwindcss react react-dom
```

Optional (for `dandy-ui` overlays/forms — install only what you use):

- `@radix-ui/react-dialog` — Dialog
- `@radix-ui/react-popover` — Popover
- `@radix-ui/react-select` — Select

Optional (for `dandy-ui/extra`):

- `react-day-picker` — DatePicker, DateRangePicker, MultiDatePicker
- `input-otp` — InputOTP
- `vaul` — Drawer

Optional (for `dandy-ui/markdown`):

- `react-markdown rehype-highlight rehype-raw rehype-sanitize remark-gfm` — MarkdownViewer

---

## Edge & Serverless Optimizations

| Optimization             | Detail                                                                                                   |
| ------------------------ | -------------------------------------------------------------------------------------------------------- |
| **Tree-shaking**         | `"sideEffects": false` — bundlers eliminate all unused code                                              |
| **Code-split entries**   | 4 entry points: `dandy-ui`, `dandy-ui/extra`, `dandy-ui/markdown`, `dandy-ui/utils`                      |
| **ESM-only**             | `"type": "module"` — native ES modules, no CJS fallback                                                  |
| **Minimal runtime deps** | Only `clsx` + `tailwind-merge`                                                                           |
| **SSR-safe theming**     | `ThemeProvider` uses `useSyncExternalStore` — no hydration mismatch                                      |
| **FOUC prevention**      | `ThemeScript` injects inline script — works without client JS                                            |
| **Optional peer deps**   | Radix overlay/form deps (`react-dialog`, `react-popover`, `react-select`) and heavy deps (`vaul`, `react-day-picker`, `input-otp`, `react-markdown`) all optional via `peerDependenciesMeta` |
| **CSS-only animations**  | Animations via `data-state` attributes — no JS animation runtime                                         |
| **Modern target**        | `es2020` — no unnecessary transpilation for edge runtimes                                                |

---

## Entry Points

### `dandy-ui` — Core components (lightweight, no heavy deps)

```tsx
import { Button, Dialog, Flex, Input, SnackbarProvider } from "dandy-ui";
```

### `dandy-ui/extra` — Heavy components (optional peer deps)

```tsx
import { Drawer, DatePicker, MultiSelect, SidebarLayout } from "dandy-ui/extra";
```

### `dandy-ui/markdown` — Markdown renderer (isolated)

```tsx
import { MarkdownViewer } from "dandy-ui/markdown";
```

### `dandy-ui/utils` — Pure utility functions (no React)

```tsx
import { formatDate, debounce, cn } from "dandy-ui/utils";
```

---

## Component Categories

| Category       | Entry Point         | Components                                                                                                                                   |
| -------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **Layout**     | `dandy-ui`          | `Container`, `Flex`, `Grid`, `Paper`, `Section`, `Table`, `ScrollShadow`                                                                     |
| **Typography** | `dandy-ui`          | `Text`, `Heading`, `Hint`, `Label`, `Divider`, `Code`, `Kbd`                                                                                 |
| **Forms**      | `dandy-ui`          | `Button`, `IconButton`, `Input`, `TextArea`, `NumberInput`, `Select`, `CheckBox`, `Radio`, `Switch`, `Slider`, `FileInput`, `Rating`, `Icon` |
| **Feedback**   | `dandy-ui`          | `Alert`, `Badge`, `Chips`, `Spinner`, `Skeleton`, `ProgressBar`, `CircularProgress`                                                          |
| **Overlays**   | `dandy-ui`          | `Dialog`, `Popover`, `InfoTip`                                                                                                               |
| **Snackbar**   | `dandy-ui`          | `SnackbarProvider`, `useSnackbar`                                                                                                            |
| **Compound**   | `dandy-ui`          | `Accordion`, `AccordionItem`, `AccordionTrigger`, `AccordionContent`                                                                         |
| **Extra**      | `dandy-ui/extra`    | `Drawer`, `DatePicker`, `DateRangePicker`, `MultiDatePicker`, `MultiSelect`, `InputOTP`, `SidebarLayout`, `SideBar`                          |
| **Markdown**   | `dandy-ui/markdown` | `MarkdownViewer`                                                                                                                             |

---

## Core API Patterns

### Variants & Sizes

Most components support `variant` and `size`:

```tsx
<Button variant="primary" size="md">Submit</Button>
<Button variant="error" size="sm">Delete</Button>
<Button variant="ghost" size="lg">Cancel</Button>
```

**Variants:** `primary`, `secondary`, `ghost`, `success`, `warning`, `error`, `info`  
**Sizes:** `sm`, `md`, `lg`

### Appearance

Buttons and some components support `appearance`:

```tsx
<Button appearance="filled" variant="primary">Filled</Button>
<Button appearance="outlined" variant="primary">Outlined</Button>
```

### Slots (leftSlot / rightSlot)

Inputs and buttons accept slot props for icons:

```tsx
<Input leftSlot={<SearchIcon />} placeholder="Search..." />
<Button leftSlot={<PlusIcon />}>Add Item</Button>
```

### Rounded

Override border radius:

```tsx
<Button rounded="full">Pill Button</Button>
<Input rounded="none" />
```

---

## Layout Components

### Flex

```tsx
<Flex direction="col" gap="4" align="start" justify="between">
  <Text>Item 1</Text>
  <Text>Item 2</Text>
</Flex>
```

Props: `direction`, `gap`, `align`, `justify`, `wrap`, `fullWidth`, `fullHeight`

### Grid

```tsx
<Grid cols={3} gap="4">
  <GridItem colSpan={2}>Wide</GridItem>
  <GridItem>Normal</GridItem>
</Grid>
```

### Paper

Surface container with elevation:

```tsx
<Paper elevation="md" padding="lg">
  Card content
</Paper>
```

### SidebarLayout (dandy-ui/extra)

Layout with collapsible sidebar:

```tsx
import { SidebarLayout } from "dandy-ui/extra";

<SidebarLayout>
  <SidebarLayout.Sidebar>
    <nav>Navigation items</nav>
  </SidebarLayout.Sidebar>
  <SidebarLayout.Content>
    <main>Main content</main>
  </SidebarLayout.Content>
</SidebarLayout>;
```

### SideBar (dandy-ui/extra)

Standalone sidebar overlay (mobile-first):

```tsx
import { SideBar } from "dandy-ui/extra";

<SideBar open={open} onOpenChange={setOpen} side="left">
  <nav>Sidebar content</nav>
</SideBar>;
```

---

## Form Components

### Input

```tsx
<Input
  variant="default"
  size="md"
  placeholder="Email"
  leftSlot={<MailIcon />}
  errorMessage="Invalid email"
/>
```

### Select (Compound)

```tsx
<Select value={value} onValueChange={setValue}>
  <Select.Trigger>
    <Select.Value placeholder="Choose..." />
  </Select.Trigger>
  <Select.Content>
    <Select.Item value="a">Option A</Select.Item>
    <Select.Item value="b">Option B</Select.Item>
  </Select.Content>
</Select>
```

### MultiSelect (dandy-ui/extra)

```tsx
import { MultiSelect } from "dandy-ui/extra";

<MultiSelect value={selected} onValueChange={setSelected} maxSelection={3}>
  <MultiSelect.Trigger placeholder="Select items" />
  <MultiSelect.Content>
    <MultiSelect.Label>Options</MultiSelect.Label>
    <MultiSelect.Item value="a">Option A</MultiSelect.Item>
    <MultiSelect.Item value="b">Option B</MultiSelect.Item>
    <MultiSelect.Separator />
    <MultiSelect.Item value="c">Option C</MultiSelect.Item>
  </MultiSelect.Content>
</MultiSelect>;
```

### CheckBox & Radio

```tsx
<CheckBox checked={checked} onCheckedChange={setChecked}>
  Accept terms
</CheckBox>

<Radio name="plan" value="pro" checked={plan === "pro"} onChange={handleChange}>
  Pro Plan
</Radio>
```

### Switch

```tsx
<Switch checked={enabled} onCheckedChange={setEnabled} />
```

### Rating

```tsx
<Rating value={rating} onChange={setRating} max={5} />
```

### Icon

```tsx
<Icon size="md" className="text-primary">
  <svg>...</svg>
</Icon>
```

### FileInput

```tsx
<FileInput
  accept="image/*"
  multiple
  onChange={handleFileChange}
  placeholder="Upload files"
/>
```

### InputOTP (dandy-ui/extra)

```tsx
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "dandy-ui/extra";

<InputOTP maxLength={6} value={otp} onChange={setOtp}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>;
```

Requires: `input-otp`

---

## Overlay Components

### Dialog (Compound)

```tsx
<Dialog>
  <Dialog.Trigger asChild>
    <Button>Open</Button>
  </Dialog.Trigger>
  <Dialog.Content size="md">
    <Dialog.Header>
      <Dialog.Title>Confirm</Dialog.Title>
      <Dialog.Description>Are you sure?</Dialog.Description>
    </Dialog.Header>
    <Dialog.Footer>
      <Dialog.Close asChild>
        <Button variant="ghost">Cancel</Button>
      </Dialog.Close>
      <Button>Confirm</Button>
    </Dialog.Footer>
  </Dialog.Content>
</Dialog>
```

Props on `Dialog.Content`: `size`, `placement`, `overlay`, `backdropExit`, `fullscreen`

### Popover

```tsx
<Popover>
  <Popover.Trigger asChild>
    <Button>Menu</Button>
  </Popover.Trigger>
  <Popover.Content>Popover content</Popover.Content>
</Popover>
```

### InfoTip

```tsx
<InfoTip content="Helpful text">
  <Button>Hover me</Button>
</InfoTip>
```

### Snackbar (Toast System)

```tsx
import { SnackbarProvider, useSnackbar } from "dandy-ui";

// Wrap your app
<SnackbarProvider position="bottom-right">
  <App />
</SnackbarProvider>;

// Use in components
function MyComponent() {
  const { showSnackbar } = useSnackbar();
  return (
    <Button
      onClick={() => showSnackbar({ message: "Saved!", variant: "success" })}
    >
      Save
    </Button>
  );
}
```

### Drawer (dandy-ui/extra)

```tsx
import { Drawer } from "dandy-ui/extra";

<Drawer open={open} onOpenChange={setOpen}>
  <Drawer.Trigger asChild>
    <Button>Open Drawer</Button>
  </Drawer.Trigger>
  <Drawer.Content>
    <Drawer.Header>
      <Drawer.Title>Drawer Title</Drawer.Title>
    </Drawer.Header>
    Drawer content
  </Drawer.Content>
</Drawer>;
```

---

## Typography

```tsx
<Heading level={1} size="3xl">Page Title</Heading>
<Text size="lg" weight="medium">Body text</Text>
<Hint variant="error">Error message</Hint>
<Code>const x = 1;</Code>
<Kbd>⌘K</Kbd>
```

### MarkdownViewer (dandy-ui/markdown)

````tsx
import { MarkdownViewer } from "dandy-ui/markdown";

<MarkdownViewer content="# Hello\n\n```js\nconsole.log('world');\n```" />;
````

Requires: `react-markdown`, `rehype-highlight`, `rehype-raw`, `rehype-sanitize`, `remark-gfm`

---

## Accordion

```tsx
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Section 1</AccordionTrigger>
    <AccordionContent>Content 1</AccordionContent>
  </AccordionItem>
</Accordion>
```

---

## Utilities (dandy-ui/utils)

### cn (classname utility)

```tsx
import { cn } from "dandy-ui/utils";

<div className={cn("bg-primary", isActive && "bg-secondary")} />;
```

Also re-exported from `dandy-ui` for convenience.

### Date utilities

`formatDate`, `formatTime`, `formatDateTime`, `formatRelativeTime`, `formatDuration`, `isToday`, `isYesterday`, `isThisWeek`, `startOfDay`, `endOfDay`

### Number utilities

`formatNumber`, `formatCurrency`, `formatPercentage`, `formatCompactNumber`, `formatDigits`, `formatList`, `clampNumber`, `pluralize`

### Input utilities

`formatPhoneNumber`, `formatCreditCard`, `maskInput`, `formatFileSize`, `sanitize`

### Validation

`isEmail`, `isPhoneNumber`, `isURL`

### Async

`debounce`, `throttle`, `copyToClipboard`

---

## Hooks

### useTheme

```tsx
import { useTheme } from "dandy-ui";

const { theme, onThemeChange } = useTheme();
// theme: "light" | "dark"
onThemeChange("dark");
```

SSR-safe — uses `useSyncExternalStore` internally.

### useMediaQuery

```tsx
import { useMediaQuery } from "dandy-ui";

const isMobile = useMediaQuery("(max-width: 768px)");
```

---

## Theme System

All colors come from CSS variables in `theme.css`. Never hardcode colors.

**Available tokens:**

- Brand: `primary`, `secondary`, `accent`
- Neutral: `background`, `foreground`, `muted`, `border`, `input`
- Surfaces: `card`, `popover`
- Feedback: `success`, `warning`, `error`, `info`
- Each has a `-foreground` variant for text

**Radius tokens:** `--radius-control`, `--radius-overlay`, `--radius-surface`, `--radius-button`

Usage in Tailwind:

```tsx
<div className="bg-primary text-primary-foreground" />
<div className="bg-card border-border" />
```

---

## Do's and Don'ts

**DO:**

- Use theme tokens (`bg-primary`, `text-foreground`)
- Use `Flex` and `Grid` for layouts
- Use compound component patterns for Dialog, Select, Accordion
- Spread `className` for customization
- Use `asChild` on triggers to compose with custom elements
- Import heavy components from `dandy-ui/extra`, not `dandy-ui`

**DON'T:**

- Hardcode colors (`bg-blue-500` ❌)
- Import from internal paths
- Mix UI libraries
- Override theme tokens unless intentional
- Import `MarkdownViewer` from `dandy-ui` (use `dandy-ui/markdown`)

---

## Common Patterns

### Form with validation

```tsx
<Flex direction="col" gap="4">
  <Label htmlFor="email">Email</Label>
  <Input id="email" errorMessage={errors.email} />
  <Button type="submit">Submit</Button>
</Flex>
```

### Card layout

```tsx
<Paper padding="lg" elevation="sm">
  <Flex direction="col" gap="3">
    <Heading level={3}>Card Title</Heading>
    <Text>Card description</Text>
    <Button size="sm">Action</Button>
  </Flex>
</Paper>
```

### Confirmation dialog

```tsx
<Dialog>
  <Dialog.Trigger asChild>
    <Button variant="error">Delete</Button>
  </Dialog.Trigger>
  <Dialog.Content size="sm">
    <Dialog.Header>
      <Dialog.Title>Delete Item?</Dialog.Title>
    </Dialog.Header>
    <Dialog.Footer>
      <Dialog.Close asChild>
        <Button variant="ghost">Cancel</Button>
      </Dialog.Close>
      <Button variant="error">Delete</Button>
    </Dialog.Footer>
  </Dialog.Content>
</Dialog>
```

---

## Imports

Core components from main package:

```tsx
import {
  // Layout
  Container,
  Flex,
  Grid,
  GridItem,
  Paper,
  Section,
  Table,
  ScrollShadow,
  // Typography
  Text,
  Heading,
  Hint,
  Divider,
  Code,
  Kbd,
  // Forms
  Button,
  IconButton,
  Input,
  TextArea,
  NumberInput,
  FileInput,
  Select,
  CheckBox,
  Radio,
  Switch,
  Slider,
  Label,
  Rating,
  Icon,
  // Feedback
  Alert,
  Badge,
  Chips,
  Spinner,
  Skeleton,
  ProgressBar,
  CircularProgress,
  // Overlays
  Dialog,
  Popover,
  InfoTip,
  // Snackbar
  SnackbarProvider,
  useSnackbar,
  // Compound
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  // Media
  Avatar,
  AvatarGroup,
  AspectRatio,
  // Providers & Hooks
  ThemeProvider,
  ThemeScript,
  cn,
  useTheme,
  useMediaQuery,
} from "dandy-ui";
```

Extra components (heavy, optional peer deps):

```tsx
import {
  Drawer,
  DatePicker,
  DateRangePicker,
  MultiDatePicker,
  MultiSelect,
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
  SidebarLayout,
  SideBar,
} from "dandy-ui/extra";
```

Markdown (isolated):

```tsx
import { MarkdownViewer } from "dandy-ui/markdown";
```

Utilities (pure functions):

```tsx
import { cn, formatDate, debounce, isEmail } from "dandy-ui/utils";
```

CSS imports:

```tsx
import "dandy-ui/theme.css";
import "dandy-ui/base.css";
import "dandy-ui/syntax-highlighting.css"; // Optional, for MarkdownViewer
```
