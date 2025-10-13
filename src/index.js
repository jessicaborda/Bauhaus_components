/**
 * Bauhaus UI - UI Kit minimalista
 * 
 * Este es el punto de entrada principal de la librería.
 * Aquí exportamos todos los componentes disponibles.
 * 
 * Uso:
 * import { Button, Card } from 'bauhaus-ui';
 * import 'bauhaus-ui/styles'; // Importar estilos
 */

// Exportar componentes
export { Button } from './components/Button';
export { Card } from './components/Card';
export { Badge } from './components/Badge';

// También exportar estilos para que el usuario pueda importarlos
// El usuario debe importar: import 'bauhaus-ui/styles';
import './styles/variables.css';
import './styles/global.css';

