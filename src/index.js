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
export { Card } from './components/Card';
export { CardHeader } from './components/CardHeader';
export { RowCard } from './components/RowCard';

// Import global styles
import './styles/variables.css';
import './styles/global.css';

