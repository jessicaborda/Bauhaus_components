# Changelog

All notable changes to Bauhaus UI will be documented in this file.

---

## [0.2.0] - 2024-12-20

### 🚀 Architecture Refactor

Major improvements to library architecture and component APIs.

---

### 1. 🎨 New Card Components

Introduced two new specialized card components with integrated Bauhaus design elements:

- **VerticalTitleCard** - Card with rotated vertical title, blue accent, red divider, yellow tail, and integrated button
- **HorizontalImageCard** - Card with image section (40%), content area with title/subtitle/CTA, and yellow tail accent

Both components include:
- Configurable button (variant, color, text, onClick)
- Optional tail accent
- Responsive sizing via `minHeight`/`minWidth` props
- Full TypeScript support

**Removed:** `RowCard` component (replaced by new cards)

---

### 2. 🏗️ BEM Methodology & CSS Architecture

All components now follow BEM naming convention with `bh-` prefix:

```css
/* Before */
.wrapper { }
.button { }
.disabled { }

/* After */
.bh-component { }
.bh-component__element { }
.bh-component--modifier { }
```

**Why:** Prevents CSS collisions, improves maintainability, clearer component structure.

---

### 3. 🎛️ CSS Variables Namespacing

All design tokens now use `--bh-` prefix to avoid collisions with user projects:

```css
/* Before */
--space-md: 16px;
--font-size-sm: 14px;

/* After */
--bh-space-md: 16px;
--bh-font-size-sm: 14px;
```

**Colors retain** `--bauhaus-*` prefix (brand identity).

**New variables:**
- `--bh-border-card: 8px solid var(--bauhaus-black)`
- `--bh-border-accent: 6px`
- `--bh-btn-border-width: 3px`

---

### 4. 📝 Enhanced Component APIs

All form components now have consistent prop patterns:

| New Prop | Components | Description |
|----------|------------|-------------|
| `className` | All | Custom CSS class support |
| `name` | Input, Checkbox, Toggle | Form field name |
| `onCheckedChange` | Checkbox, Toggle | Simple `(checked: boolean) => void` handler |
| `size` | Dropdown, Toggle | Size variants (small/medium/large) |
| `disabled` | Dropdown | Disable entire dropdown |

**Fixed:** `Button.onClick` now correctly typed as `(event: MouseEvent) => void`

---

### 5. 📚 Documentation & Stories

- **README** completely rewritten with TypeScript examples, props tables, and customization guide
- **Storybook stories** expanded for all components:
  - Variants grids
  - Size comparisons
  - State demonstrations
  - Real-world form examples
  - Interactive Playground

---

## Breaking Changes from 0.1.x

1. **RowCard removed** → Use `VerticalTitleCard` or `HorizontalImageCard`
2. **CSS class names changed** → BEM format with `bh-` prefix
3. **CSS variables renamed** → `--bh-*` prefix for all tokens
4. **Default exports removed** → Use named imports only

---

## [0.1.3] - Previous Release

Initial release with Button, Card, RowCard, Input, Checkbox, Toggle, Dropdown components.
