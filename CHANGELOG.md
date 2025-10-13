# Changelog

<<<<<<< HEAD
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.2] - 2025-12-08

### Fixed

- CardHeader component styling improvements
- Component layout and spacing refinements

### Changed

- Updated typography variables and color system
- Improved component responsiveness

### Removed

#### Badge Component Removed (Breaking Change)

The Badge component has been removed as it doesn't align with pure Bauhaus design principles.

**Migration:**
- Remove any `Badge` imports and usage from your code
- Consider using custom implementations if needed

### Button Component Refactored (Breaking Change)

The Button component has been redesigned with a more flexible and maintainable architecture.

**Old API:**
```jsx
<Button variant="default">Default</Button>
<Button variant="secondary_warning">Secondary Warning</Button>
<Button variant="tertiary_danger">Tertiary Danger</Button>
```

**New API:**
```jsx
<Button variant="solid" color="blue">Solid Blue</Button>
<Button variant="outline" color="yellow">Outline Yellow</Button>
<Button variant="text" color="red">Text Red</Button>
```

**Migration Guide:**

| Old Variant | New Variant | New Color |
|-------------|-------------|-----------|
| `default` | `solid` | `blue` |
| `warning` | `solid` | `yellow` |
| `danger` | `solid` | `red` |
| `success` | `solid` | `green` |
| `secondary` | `outline` | `blue` |
| `secondary_warning` | `outline` | `yellow` |
| `secondary_danger` | `outline` | `red` |
| `tertiary` | `text` | `blue` |
| `tertiary_warning` | `text` | `yellow` |
| `tertiary_danger` | `text` | `red` |

**Benefits:**
- 60% reduction in CSS code (253 → 193 lines)
- More flexible: 3 variants × 6 colors = 18 combinations
- Easier to maintain and extend
- Follows industry standards (Material UI, Chakra UI pattern)
- Better CSS custom properties usage

### Card Components Simplified

Card and RowCard components have been streamlined:
- Removed unused `padding` prop (use CSS for custom padding)
- Removed redundant `bordered` prop (Bauhaus always has visible borders)
- Simplified CSS from 54 to 29 lines (46% reduction)
- All documentation translated to English

### Added

- Export `RowCard` component (was missing from main exports)
- Professional English documentation
- `CONTRIBUTING.md` guide for developers
- `CHANGELOG.md` for version tracking
- GitHub Actions workflow for deployment

### Fixed (from initial release)

- Button variant naming inconsistency between stories and component
- Missing RowCard export in `src/index.js`
- Card/RowCard props that didn't work (`padding`, `bordered`)
- Button stories simplified (removed redundant individual color stories)

## [0.1.0] - Initial Release

### Added

- Button component with multiple variants
- Card component with shadow and hover effects
- Badge component for status labels
- RowCard component
- Bauhaus-inspired design system
- CSS variables for consistent theming
- Storybook documentation
- Vite build configuration for ESM and UMD outputs

=======
All notable changes to Bauhaus UI will be documented in this file.

---

## [0.2.1] - 2025-12-21

### ✅ Maintenance & Consistency

- Added `Card` and `VerticalImageCard` components and aligned card APIs (e.g. `buttonFill`).
- Removed `CardHeader` component (superseded by the card set).
- Scoped `global.css` to avoid aggressive resets in consuming applications.
- Updated Storybook organization (all cards under `Cards/`) and refreshed README examples.

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
>>>>>>> 5607bdce77c8ee151debddbe2fc1e716f54a3df7
