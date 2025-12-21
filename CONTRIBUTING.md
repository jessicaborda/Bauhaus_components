# Contributing to Bauhaus UI

## Releases (versioning & publishing)

This project uses **Changesets** to manage versions, changelogs, and npm publishing.

### When you make a PR

1. Create your feature branch and commit your code changes.
2. Add a changeset:

```bash
npm run changeset
```

Pick the bump type:
- **patch**: fixes, styling tweaks, internal refactors, small API additions
- **minor**: new features/components, backwards compatible
- **major**: breaking changes

3. Commit the generated `.md` file in `.changeset/` and push your PR.

### What happens after merge to `main`

GitHub Actions will automatically:

1. Open/update a **"Version Packages"** PR (bumps `package.json` version + updates `CHANGELOG.md`)
2. When that PR is merged, publish to npm and create a GitHub Release/tag

### GitHub repo requirements

To enable publishing, add this secret in GitHub:

- **`NPM_TOKEN`**: an npm access token with publish permission for `@ars-design/bauhaus-ui`

## Creating a New Component

### File Structure

Each component should follow this structure:

```
src/components/ComponentName/
├── ComponentName.jsx          # Component logic
├── ComponentName.module.css   # Scoped styles
├── ComponentName.stories.jsx  # Storybook documentation
└── index.js                   # Clean export
```

### Component Template

**ComponentName.jsx**

```jsx
import styles from './ComponentName.module.css';

/**
 * ComponentName
 * 
 * Brief description of what the component does.
 * 
 * @param {Object} props - Component properties
 * @param {React.ReactNode} props.children - Component content
 * @param {string} props.variant - Visual variant
 * @param {string} props.size - Component size
 */
export const ComponentName = ({
  children,
  variant = 'default',
  size = 'medium',
  ...props
}) => {
  const classNames = [
    styles.component,
    styles[variant],
    styles[size],
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
};
```

**ComponentName.module.css**

```css
/**
 * ComponentName Styles
 */

.component {
  /* Base styles shared by all variants */
  display: inline-block;
  padding: var(--space-md);
  border-radius: var(--border-radius-md);
  font-family: var(--font-family);
}

/* Variants */
.default {
  background-color: var(--bauhaus-blue);
  color: var(--bauhaus-white);
}

.secondary {
  background-color: var(--bauhaus-red);
  color: var(--bauhaus-white);
}

/* Sizes */
.small {
  padding: var(--space-sm);
  font-size: var(--font-size-sm);
}

.medium {
  padding: var(--space-md);
  font-size: var(--font-size-md);
}

.large {
  padding: var(--space-lg);
  font-size: var(--font-size-lg);
}
```

**ComponentName.stories.jsx**

```jsx
import { ComponentName } from './ComponentName';

export default {
  title: 'Components/ComponentName',
  component: ComponentName,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary'],
      description: 'Visual variant',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Component size',
    },
    children: {
      control: 'text',
      description: 'Component content',
    },
  },
};

export const Default = {
  args: {
    children: 'Example content',
  },
};

export const AllVariants = () => (
  <div style={{ display: 'flex', gap: '16px' }}>
    <ComponentName variant="default">Default</ComponentName>
    <ComponentName variant="secondary">Secondary</ComponentName>
  </div>
);
```

**index.js**

```javascript
export { ComponentName } from './ComponentName';
```

### Styling Guidelines

1. **Always use CSS variables** from `src/styles/variables.css`
   - ✅ `color: var(--bauhaus-blue)`
   - ❌ `color: #0063C2`

2. **Use consistent naming conventions**
   - Base class: `.component`
   - Variants: `.primary`, `.secondary`, `.success`
   - Modifiers: `.disabled`, `.active`, `.fullWidth`

3. **Follow mobile-first approach**
   ```css
   .component {
     /* Mobile styles */
   }
   
   @media (min-width: 768px) {
     /* Tablet and up */
   }
   ```

4. **Use CSS custom properties for complex color logic**
   ```css
   .component {
     --btn-main: var(--bauhaus-blue);
     background-color: var(--btn-main);
   }
   
   .variant-red {
     --btn-main: var(--bauhaus-red);
   }
   ```

### Adding Component to Library

Add your component export to `src/index.js`:

```javascript
export { ComponentName } from './components/ComponentName';
```

### Testing in Storybook

```bash
npm run storybook
```

Open `http://localhost:6006` and verify:
- ✅ Component appears in sidebar
- ✅ All variants render correctly
- ✅ Controls work properly
- ✅ Styles are applied
- ✅ No console errors

### Building

```bash
npm run build
```

Verify the build output in `dist/`:
- `bauhaus-ui.js` (ESM)
- `bauhaus-ui.umd.cjs` (UMD)
- `style.css` (Styles)

## Design Tokens Reference

### Colors

```css
/* Primary Colors */
--bauhaus-blue
--bauhaus-red
--bauhaus-yellow

/* Accent Colors */
--bauhaus-green
--bauhaus-orange
--bauhaus-purple

/* Neutrals */
--bauhaus-black
--bauhaus-white
--bauhaus-gray-{100-500}

/* Color Shades */
--bauhaus-{color}-300  /* Light */
--bauhaus-{color}-700  /* Dark */
--bauhaus-{color}-900  /* Darker */
```

### Spacing

```css
--space-xs: 4px
--space-sm: 8px
--space-md: 16px
--space-lg: 24px
--space-xl: 32px
--space-2xl: 48px
```

### Typography

```css
--font-family
--font-family-mono
--font-size-{xs,sm,md,lg,xl,2xl}
--font-weight-{normal,medium,bold}
--line-height-{tight,normal,relaxed}
```

### Borders & Shadows

```css
--border-radius-{sm,md,lg,full}
--border-width
--border-width-thick
--shadow-{sm,md,lg,xl}
```

### Transitions

```css
--transition-fast: 150ms
--transition-normal: 250ms
--transition-slow: 350ms
```

## Code Quality

### Component Checklist

- [ ] Follows file structure pattern
- [ ] Has proper JSDoc documentation
- [ ] Uses only CSS variables (no hardcoded values)
- [ ] Has at least 3 Storybook stories
- [ ] Accepts `...props` for extensibility
- [ ] Has sensible default values
- [ ] Works with all size variants
- [ ] Disabled state (if applicable)
- [ ] Exported in `src/index.js`

### PR Guidelines

1. Create a feature branch: `git checkout -b feat/new-component`
2. Follow existing code style
3. Test in Storybook
4. Update documentation if needed
5. Create PR with clear description

## Questions?

Review existing components (Button, Card, Badge) as reference examples.

