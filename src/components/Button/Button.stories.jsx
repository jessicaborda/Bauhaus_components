import { Button } from './Button';

/**
 * Stories de Storybook para el componente Button
 * 
 * Aquí defines todas las variantes y estados del componente
 * para visualizarlos en Storybook.
 * 
 * Documentación: https://storybook.js.org/docs/react/writing-stories/introduction
 */

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
      description: 'Variante visual del botón',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Tamaño del botón',
    },
    disabled: {
      control: 'boolean',
      description: 'Estado deshabilitado',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Ocupa todo el ancho disponible',
    },
    children: {
      control: 'text',
      description: 'Contenido del botón',
    },
  },
};

// Story por defecto
export const Primary = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Outline = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};

// Tamaños
export const Small = {
  args: {
    variant: 'primary',
    size: 'small',
    children: 'Small Button',
  },
};

export const Medium = {
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Medium Button',
  },
};

export const Large = {
  args: {
    variant: 'primary',
    size: 'large',
    children: 'Large Button',
  },
};

// Estados
export const Disabled = {
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Disabled Button',
  },
};

export const FullWidth = {
  args: {
    variant: 'primary',
    fullWidth: true,
    children: 'Full Width Button',
  },
};

// Todas las variantes juntas
export const AllVariants = () => (
  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="outline">Outline</Button>
  </div>
);

// Todos los tamaños juntos
export const AllSizes = () => (
  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
    <Button size="small">Small</Button>
    <Button size="medium">Medium</Button>
    <Button size="large">Large</Button>
  </div>
);

