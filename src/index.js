/**
 * Bauhaus UI - Minimalist UI Kit
 * 
 * Main entry point for the library.
 * Exports all available components.
 * 
 * Usage:
 * import { Button, Card, RowCard } from 'bauhaus-ui';
 * import 'bauhaus-ui/styles';
 */

// Export components
export { Button } from './components/Button';
export { CardHeader } from './components/CardHeader';
export { RowCard } from './components/RowCard';
export { Checkbox } from './components/Checkbox';
export { default as Dropdown } from './components/Dropdown';
export { Input } from './components/Input';
export { Toggle } from './components/Toggle';

// Import global styles
import './styles/variables.css';
import './styles/global.css';

