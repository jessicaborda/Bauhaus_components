# Bauhaus UI

A minimalist React + TypeScript component library inspired by the Bauhaus design school. Clean, functional, and beautiful.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.0.0-61dafb.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178c6.svg)](https://www.typescriptlang.org/)

## Features

- ⚛️ React 19 + TypeScript components
- 🎨 Bauhaus-inspired design system
- 📦 Tree-shakeable ESM builds
- 🎯 CSS Modules with BEM methodology
- 🎛️ Customizable via CSS variables (`--bh-*` prefix)
- 📚 Fully documented with Storybook
- 🚀 Built with Vite

## Installation

```bash
npm install @ars-design/bauhaus-ui
```

## Quick Start

```tsx
import { Button, VerticalTitleCard } from '@ars-design/bauhaus-ui';
import '@ars-design/bauhaus-ui/styles';

function App() {
  return (
    <VerticalTitleCard 
      title="Welcome" 
      buttonText="Get Started"
      onButtonClick={() => console.log('Clicked!')}
    >
      <p>Hello Bauhaus!</p>
    </VerticalTitleCard>
  );
}
```

## Components

### Button

Versatile button with Bauhaus-style thick borders and 3D hover effect.

```tsx
<Button variant="solid" color="blue" size="medium" onClick={(e) => console.log(e)}>
  Primary Action
</Button>

<Button variant="outline" color="red" size="small">
  Secondary
</Button>

<Button variant="text" color="green" fullWidth>
  Full Width
</Button>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'solid' \| 'outline' \| 'text'` | `'solid'` | Button style |
| `color` | `'blue' \| 'red' \| 'yellow' \| 'green' \| 'orange' \| 'purple'` | `'blue'` | Button color |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Button size |
| `disabled` | `boolean` | `false` | Disabled state |
| `fullWidth` | `boolean` | `false` | 100% width |
| `className` | `string` | `''` | Custom CSS class |
| `onClick` | `(event: MouseEvent) => void` | - | Click handler |

---

### Input

Text input with underline focus effect.

```tsx
<Input 
  label="Email" 
  type="email" 
  placeholder="you@example.com"
  error="Invalid email"
  fullWidth
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `ReactNode` | - | Label text |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Input size |
| `error` | `ReactNode` | - | Error message |
| `fullWidth` | `boolean` | `false` | 100% width |
| `disabled` | `boolean` | `false` | Disabled state |
| `className` | `string` | `''` | Custom CSS class |

---

### Checkbox

Checkbox with diamond indicator when checked.

```tsx
<Checkbox 
  label="Subscribe to newsletter"
  onCheckedChange={(checked) => console.log(checked)}
/>

// Or with full event
<Checkbox 
  label="Accept terms"
  onChange={(e) => console.log(e.target.checked)}
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `ReactNode` | - | Label text |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Checkbox size |
| `checked` | `boolean` | - | Controlled state |
| `defaultChecked` | `boolean` | - | Uncontrolled default |
| `onCheckedChange` | `(checked: boolean) => void` | - | Simple change handler |
| `onChange` | `(event: ChangeEvent) => void` | - | Full event handler |
| `disabled` | `boolean` | `false` | Disabled state |

---

### Dropdown

Dropdown menu with keyboard navigation (↑↓, Enter, Escape).

```tsx
<Dropdown 
  label="Actions"
  size="medium"
  items={[
    { label: 'Edit', onClick: () => console.log('Edit') },
    { label: 'Delete', onClick: () => console.log('Delete'), disabled: true },
  ]}
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `ReactNode` | `'Options'` | Trigger text |
| `items` | `DropdownItem[]` | `[]` | Menu items |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Dropdown size |
| `disabled` | `boolean` | `false` | Disabled state |

---

### VerticalTitleCard

Card with vertical rotated title, colored accents, and integrated button.

```tsx
<VerticalTitleCard 
  title="Card Title"
  buttonText="Action"
  buttonColor="blue"
  buttonVariant="solid"
  onButtonClick={() => console.log('Clicked!')}
  tail={true}
>
  <p>Card content</p>
</VerticalTitleCard>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | **required** | Vertical title text |
| `icon` | `ReactNode` | - | Icon (replaces blue accent) |
| `tail` | `boolean` | `true` | Show yellow tail accent |
| `buttonVariant` | `'solid' \| 'outline' \| 'text' \| 'none'` | `'solid'` | Button style |
| `buttonText` | `string` | `'Action'` | Button text |
| `buttonColor` | `Color` | `'blue'` | Button color |
| `onButtonClick` | `() => void` | - | Button click handler |
| `buttonFill` | `boolean` | `false` | Full width button |
| `minHeight` | `string \| number` | `'300px'` | Minimum height |
| `minWidth` | `string \| number` | `'400px'` | Minimum width |

---

### HorizontalImageCard

Card with image on left, content on right, and yellow tail accent.

```tsx
<HorizontalImageCard 
  imageSrc="/path/to/image.jpg"
  title="Card Title"
  subtitle="Subtitle text"
  buttonText="Learn More"
  onButtonClick={() => console.log('Clicked!')}
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `imageSrc` | `string` | **required** | Image URL |
| `title` | `string` | **required** | Card title |
| `subtitle` | `string` | - | Card subtitle |
| `imageAlt` | `string` | `''` | Image alt text |
| `tail` | `boolean` | `true` | Show yellow tail accent |
| `buttonVariant` | `'solid' \| 'outline' \| 'text' \| 'none'` | `'solid'` | Button style |
| `buttonText` | `string` | `'Action'` | Button text |
| `buttonColor` | `Color` | `'blue'` | Button color |
| `onButtonClick` | `() => void` | - | Button click handler |
| `buttonFill` | `boolean` | `false` | Full width button |
| `minHeight` | `string \| number` | `'300px'` | Minimum height |
| `minWidth` | `string \| number` | `'500px'` | Minimum width |

---

### VerticalImageCard

Card with image on top, content below, and yellow tail accent.

```tsx
<VerticalImageCard
  imageSrc="/path/to/image.jpg"
  title="Card Title"
  subtitle="Subtitle text"
  buttonText="Action"
  onButtonClick={() => console.log('Clicked!')}
  imageHeight="40%"
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `imageSrc` | `string` | **required** | Image URL |
| `title` | `string` | - | Card title |
| `subtitle` | `string` | - | Card subtitle |
| `imageAlt` | `string` | `''` | Image alt text |
| `imageHeight` | `string \| number` | `'40%'` | Image height |
| `tail` | `boolean` | `true` | Show yellow tail accent |
| `buttonVariant` | `'solid' \| 'outline' \| 'text' \| 'none'` | `'solid'` | Button style |
| `buttonText` | `string` | `'Action'` | Button text |
| `buttonColor` | `Color` | `'blue'` | Button color |
| `onButtonClick` | `() => void` | - | Button click handler |
| `buttonFill` | `boolean` | `false` | Full width button |
| `minHeight` | `string \| number` | `'400px'` | Minimum height |
| `minWidth` | `string \| number` | `'300px'` | Minimum width |

---

### Card

Card with Bauhaus-style accents: top blue accent, red divider, optional subtitle/children and optional tail.

```tsx
<Card
  title="Card Title"
  subtitle="Subtitle text"
  buttonText="Action"
  onButtonClick={() => console.log('Clicked!')}
>
  <p>Optional extra content (children)</p>
</Card>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Card title |
| `subtitle` | `string` | - | Card subtitle |
| `children` | `ReactNode` | - | Optional extra content |
| `tail` | `boolean` | `true` | Show yellow tail accent |
| `buttonVariant` | `'solid' \| 'outline' \| 'text' \| 'none'` | `'solid'` | Button style |
| `buttonText` | `string` | `'Action'` | Button text |
| `buttonColor` | `Color` | `'blue'` | Button color |
| `onButtonClick` | `() => void` | - | Button click handler |
| `buttonFill` | `boolean` | `false` | Full width button |
| `minHeight` | `string \| number` | `'300px'` | Minimum height |
| `minWidth` | `string \| number` | `'400px'` | Minimum width |

---

## Design System

### CSS Variables

All variables use the `--bh-` prefix to avoid collisions with your project:

#### Colors (no prefix - Bauhaus identity)
```css
--bauhaus-blue: #0063C2
--bauhaus-red: #CD3F2A
--bauhaus-yellow: #F9B700
--bauhaus-green: #06A77D
--bauhaus-orange: #FF6B35
--bauhaus-purple: #7209B7
--bauhaus-black: #000000
--bauhaus-white: #FFFFFF
```

#### Spacing
```css
--bh-space-xs: 4px
--bh-space-sm: 8px
--bh-space-md: 16px
--bh-space-lg: 24px
--bh-space-xl: 32px
```

#### Typography
```css
--bh-font-size-xs: 12px
--bh-font-size-sm: 14px
--bh-font-size-md: 16px
--bh-font-size-lg: 20px
--bh-font-size-xl: 24px

--bh-font-weight-normal: 400
--bh-font-weight-medium: 500
--bh-font-weight-bold: 700
```

#### Borders
```css
--bh-border-width: 1px
--bh-border-width-thick: 2px
--bh-border-card: 8px solid var(--bauhaus-black)
--bh-border-accent: 6px
--bh-btn-border-width: 3px
```

#### Transitions
```css
--bh-transition-fast: 150ms ease-in-out
--bh-transition-normal: 250ms ease-in-out
```

### Customization

Override variables in your CSS:

```css
:root {
  /* Change primary blue */
  --bauhaus-blue: #0066FF;
  
  /* Adjust spacing */
  --bh-space-md: 20px;
  
  /* Thicker borders */
  --bh-btn-border-width: 4px;
}
```

---

## Development

### Setup

```bash
# Install dependencies
npm install

# Start Storybook
npm run storybook

# Build library
npm run build
```

### Project Structure

```
bauhaus-ui/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.module.css
│   │   │   ├── Button.stories.tsx
│   │   │   └── index.ts
│   │   ├── Input/
│   │   ├── Checkbox/
│   │   ├── Dropdown/
│   │   ├── VerticalTitleCard/
│   │   ├── HorizontalImageCard/
│   │   ├── VerticalImageCard/
│   │   ├── Card/
│   │   └── Toggle/
│   ├── styles/
│   │   ├── variables.css
│   │   └── global.css
│   ├── types/
│   │   └── index.ts
│   └── index.ts
├── dist/
├── package.json
├── tsconfig.json
└── vite.config.ts
```

### Creating a New Component

1. Create component directory:
```
src/components/MyComponent/
├── MyComponent.tsx
├── MyComponent.module.css
├── MyComponent.stories.tsx
└── index.ts
```

2. Follow BEM methodology for CSS classes:
```css
.bh-my-component { }
.bh-my-component__element { }
.bh-my-component--modifier { }
```

3. Export from `src/index.ts`:
```typescript
export { MyComponent } from './components/MyComponent';
export type { MyComponentProps } from './components/MyComponent';
```

---

## TypeScript Support

All components are fully typed. Import types:

```typescript
import type { 
  ButtonProps, 
  InputProps, 
  CheckboxProps,
  DropdownProps,
  VerticalTitleCardProps,
  HorizontalImageCardProps,
  Size,
  Color,
  ButtonVariant,
} from '@ars-design/bauhaus-ui';
```

---

## Design Philosophy

Bauhaus UI follows the principles of the Bauhaus design school:

- **Form Follows Function** - No unnecessary decorations
- **Simple Geometry** - Basic shapes, sharp corners, bold lines
- **Primary Colors** - Red, blue, yellow + neutrals
- **Thick Borders** - 8px card borders, 3px button borders
- **Visual Accents** - Colored bars (yellow tail, red divider, blue accent)

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## Contact

Questions, feedback, or collaboration?

[![Instagram](https://img.shields.io/badge/Instagram-@ars__design__st-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/ars_design_st/)

---

## License

MIT © ars-design

---

**Made with ❤️ inspired by Bauhaus design principles**
