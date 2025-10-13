import { Badge } from './Badge';

/**
 * Stories de Storybook para el componente Badge
 */

export default {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info', 'neutral'],
      description: 'Variante de color del badge',
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'Tamaño del badge',
    },
    children: {
      control: 'text',
      description: 'Contenido del badge',
    },
  },
};

// Variantes por defecto
export const Success = {
  args: {
    variant: 'success',
    children: 'Success',
  },
};

export const Error = {
  args: {
    variant: 'error',
    children: 'Error',
  },
};

export const Warning = {
  args: {
    variant: 'warning',
    children: 'Warning',
  },
};

export const Info = {
  args: {
    variant: 'info',
    children: 'Info',
  },
};

export const Neutral = {
  args: {
    variant: 'neutral',
    children: 'Neutral',
  },
};

// Tamaños
export const Small = {
  args: {
    variant: 'info',
    size: 'small',
    children: 'Small Badge',
  },
};

export const Medium = {
  args: {
    variant: 'info',
    size: 'medium',
    children: 'Medium Badge',
  },
};

// Todas las variantes juntas
export const AllVariants = () => (
  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
    <Badge variant="success">Success</Badge>
    <Badge variant="error">Error</Badge>
    <Badge variant="warning">Warning</Badge>
    <Badge variant="info">Info</Badge>
    <Badge variant="neutral">Neutral</Badge>
  </div>
);

// Ejemplo de uso real
export const RealWorldExample = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <span>Estado del pedido:</span>
      <Badge variant="success">Entregado</Badge>
    </div>
    
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <span>Conexión:</span>
      <Badge variant="error" size="small">Desconectado</Badge>
    </div>
    
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <span>Notificaciones:</span>
      <Badge variant="info" size="small">3</Badge>
    </div>
  </div>
);

