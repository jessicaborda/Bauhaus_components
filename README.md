# Bauhaus UI

A minimalist React component library inspired by the Bauhaus design school. Clean, functional, and beautiful.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.0.0-61dafb.svg)](https://reactjs.org/)

## Features

- ⚛️ React 19 components
- 🎨 Bauhaus-inspired design system
- 📦 Tree-shakeable ESM/UMD builds
- 🎯 CSS Modules with scoped styles
- 📚 Fully documented with Storybook
- 🚀 Built with Vite

## Installation

```bash
npm install bauhaus-ui
```

## Quick Start

```jsx
import { Button, Card, RowCard } from 'bauhaus-ui';
import 'bauhaus-ui/styles';

function App() {
  return (
    <Card shadow hoverable>
      <h2>Hello Bauhaus</h2>
      <Button variant="solid" color="blue" onClick={() => alert('Click!')}>
        Click Me
      </Button>
    </Card>
  );
}
```

## Components

### Button

Versatile button component with multiple variants and colors.

```jsx
// Variants: solid, outline, text
// Colors: blue, red, yellow, green, orange, purple
// Sizes: small, medium, large

<Button variant="solid" color="blue" size="medium">
  Primary Action
</Button>

<Button variant="outline" color="red" size="small">
  Secondary Action
</Button>

<Button variant="text" color="green" disabled>
  Disabled
</Button>

<Button variant="solid" color="yellow" fullWidth>
  Full Width Button
</Button>
```

**Props:**
- `variant`: `'solid'` | `'outline'` | `'text'` (default: `'solid'`)
- `color`: `'blue'` | `'red'` | `'yellow'` | `'green'` | `'orange'` | `'purple'` (default: `'blue'`)
- `size`: `'small'` | `'medium'` | `'large'` (default: `'medium'`)
- `disabled`: `boolean` (default: `false`)
- `fullWidth`: `boolean` (default: `false`)
- `type`: `'button'` | `'submit'` | `'reset'` (default: `'button'`)
- `onClick`: `() => void`

### Card

Container component for grouping related content. Features Bauhaus-style bold borders.

```jsx
<Card shadow hoverable>
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>
```

**Props:**
- `shadow`: `boolean` - Adds shadow (default: `false`)
- `hoverable`: `boolean` - Hover effect (default: `false`)
- `onClick`: `() => void` - Makes card clickable

### RowCard

Horizontal card layout ideal for list items and side-by-side content.

```jsx
<RowCard shadow hoverable>
  {/* Horizontal layout content */}
</RowCard>
```

**Props:**
- `shadow`: `boolean` - Adds shadow (default: `false`)
- `hoverable`: `boolean` - Hover effect (default: `false`)
- `onClick`: `() => void` - Makes card clickable

## Design System

### Colors

All components use a consistent color palette based on Bauhaus principles:

```css
--bauhaus-blue: #0063C2    /* Primary */
--bauhaus-red: #CD3F2A     /* Danger/Error */
--bauhaus-yellow: #F9B700  /* Warning */
--bauhaus-green: #06A77D   /* Success */
--bauhaus-orange: #FF6B35  /* Accent */
--bauhaus-purple: #7209B7  /* Accent */
```

### Spacing

```css
--space-xs: 4px
--space-sm: 8px
--space-md: 16px
--space-lg: 24px
--space-xl: 32px
```

### Typography

```css
--font-size-xs: 12px
--font-size-sm: 14px
--font-size-md: 16px
--font-size-lg: 20px
--font-weight-normal: 400
--font-weight-medium: 500
--font-weight-bold: 700
```

All design tokens are available in `src/styles/variables.css`.

## Development

### Setup

```bash
# Install dependencies
npm install

# Start Storybook
npm run storybook

# Build library
npm run build

# Preview build
npm run preview
```

### Creating a New Component

1. Create component directory:
```
src/components/MyComponent/
├── MyComponent.jsx
├── MyComponent.module.css
├── MyComponent.stories.jsx
└── index.js
```

2. Export from `src/index.js`:
```javascript
export { MyComponent } from './components/MyComponent';
```

3. View in Storybook at `http://localhost:6006`

See [CREAR-COMPONENTE.md](./CREAR-COMPONENTE.md) for detailed guide.

## Publishing

```bash
# Build library
npm run build

# Publish to npm
npm publish
```

## Project Structure

```
bauhaus-ui/
├── src/
│   ├── components/       # React components
│   │   ├── Button/
│   │   ├── Card/
│   │   └── RowCard/
│   ├── styles/           # Global styles & variables
│   │   ├── variables.css
│   │   └── global.css
│   └── index.js          # Main entry point
├── dist/                 # Build output
├── package.json
└── vite.config.js        # Build configuration
```

## Design Philosophy

Bauhaus UI follows the principles of the Bauhaus design school:

- **Form Follows Function** - No unnecessary decorations
- **Simple Geometry** - Basic shapes and clean lines
- **Primary Colors** - Red, blue, yellow + neutrals
- **Sans-serif Typography** - Clean and legible
- **Grid Systems** - Structured layouts

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT © [Your Name]

---

**Made with ❤️ as a portfolio project**
