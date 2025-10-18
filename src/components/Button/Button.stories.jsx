import { Button } from './Button';

/**
 * Button Component Stories (Refactored)
 * 
 * Nueva arquitectura con variant + color para mayor flexibilidad.
 * Ahora es mucho más fácil crear cualquier combinación de estilo y color.
 */

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'text'],
      description: 'Estilo visual del botón',
    },
    color: {
      control: 'select',
      options: ['blue', 'red', 'yellow', 'green', 'orange', 'purple'],
      description: 'Color del botón',
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
      description: 'Botón de ancho completo',
    },
    children: {
      control: 'text',
      description: 'Contenido del botón',
    },
  },
};

// ===== PLAYGROUND =====

export const Playground = {
  args: {
    variant: 'solid',
    color: 'blue',
    size: 'medium',
    children: 'Button',
  },
};

// ===== VARIANTS =====

export const Solid = {
  args: {
    variant: 'solid',
    color: 'blue',
    children: 'Solid Button',
  },
};

export const Outline = {
  args: {
    variant: 'outline',
    color: 'blue',
    children: 'Outline Button',
  },
};

export const Text = {
  args: {
    variant: 'text',
    color: 'blue',
    children: 'Text Button',
  },
};

// ===== COLORS =====

export const ColorBlue = {
  args: {
    color: 'blue',
    children: 'Blue',
  },
};

export const ColorRed = {
  args: {
    color: 'red',
    children: 'Red',
  },
};

export const ColorYellow = {
  args: {
    color: 'yellow',
    children: 'Yellow',
  },
};

export const ColorGreen = {
  args: {
    color: 'green',
    children: 'Green',
  },
};

// ===== SIZES =====

export const Small = {
  args: {
    size: 'small',
    children: 'Small Button',
  },
};

export const Medium = {
  args: {
    size: 'medium',
    children: 'Medium Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    children: 'Large Button',
  },
};

// ===== STATES =====

export const Disabled = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

export const FullWidth = {
  args: {
    fullWidth: true,
    children: 'Full Width Button',
  },
};

// ===== COMPREHENSIVE EXAMPLES =====

export const AllVariants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
    <div>
      <h4 style={{ marginBottom: '12px', fontWeight: 600, color: '#333' }}>
        Solid Buttons
      </h4>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <Button variant="solid" color="blue">Blue</Button>
        <Button variant="solid" color="red">Red</Button>
        <Button variant="solid" color="yellow">Yellow</Button>
        <Button variant="solid" color="green">Green</Button>
        <Button variant="solid" color="orange">Orange</Button>
        <Button variant="solid" color="purple">Purple</Button>
      </div>
    </div>
    
    <div>
      <h4 style={{ marginBottom: '12px', fontWeight: 600, color: '#333' }}>
        Outline Buttons
      </h4>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <Button variant="outline" color="blue">Blue</Button>
        <Button variant="outline" color="red">Red</Button>
        <Button variant="outline" color="yellow">Yellow</Button>
        <Button variant="outline" color="green">Green</Button>
        <Button variant="outline" color="orange">Orange</Button>
        <Button variant="outline" color="purple">Purple</Button>
      </div>
    </div>
    
    <div>
      <h4 style={{ marginBottom: '12px', fontWeight: 600, color: '#333' }}>
        Text Buttons
      </h4>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <Button variant="text" color="blue">Blue</Button>
        <Button variant="text" color="red">Red</Button>
        <Button variant="text" color="yellow">Yellow</Button>
        <Button variant="text" color="green">Green</Button>
        <Button variant="text" color="orange">Orange</Button>
        <Button variant="text" color="purple">Purple</Button>
      </div>
    </div>
  </div>
);

export const AllSizes = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
    <div>
      <h4 style={{ marginBottom: '12px', fontWeight: 600, color: '#333' }}>
        Solid Buttons
      </h4>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Button variant="solid" color="blue" size="small">Small</Button>
        <Button variant="solid" color="blue" size="medium">Medium</Button>
        <Button variant="solid" color="blue" size="large">Large</Button>
      </div>
    </div>
    
    <div>
      <h4 style={{ marginBottom: '12px', fontWeight: 600, color: '#333' }}>
        Outline Buttons
      </h4>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Button variant="outline" color="red" size="small">Small</Button>
        <Button variant="outline" color="red" size="medium">Medium</Button>
        <Button variant="outline" color="red" size="large">Large</Button>
      </div>
    </div>
    
    <div>
      <h4 style={{ marginBottom: '12px', fontWeight: 600, color: '#333' }}>
        Text Buttons
      </h4>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Button variant="text" color="green" size="small">Small</Button>
        <Button variant="text" color="green" size="medium">Medium</Button>
        <Button variant="text" color="green" size="large">Large</Button>
      </div>
    </div>
  </div>
);

export const DisabledStates = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
    <div>
      <h4 style={{ marginBottom: '12px', fontWeight: 600, color: '#333' }}>
        Normal State
      </h4>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <Button variant="solid" color="blue">Enabled</Button>
        <Button variant="outline" color="red">Enabled</Button>
        <Button variant="text" color="green">Enabled</Button>
      </div>
    </div>
    
    <div>
      <h4 style={{ marginBottom: '12px', fontWeight: 600, color: '#333' }}>
        Disabled State
      </h4>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <Button variant="solid" color="blue" disabled>Disabled</Button>
        <Button variant="outline" color="red" disabled>Disabled</Button>
        <Button variant="text" color="green" disabled>Disabled</Button>
      </div>
    </div>
  </div>
);

export const FullWidthExample = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '600px', padding: '20px' }}>
    <Button variant="solid" color="blue" fullWidth>
      Full Width Solid
    </Button>
    <Button variant="outline" color="red" fullWidth>
      Full Width Outline
    </Button>
    <Button variant="text" color="green" fullWidth>
      Full Width Text
    </Button>
  </div>
);

export const RealWorldExample = () => (
  <div style={{ padding: '20px' }}>
    <div style={{ 
      maxWidth: '500px', 
      padding: '24px', 
      background: 'white',
      border: '2px solid #e0e0e0',
      borderRadius: '8px'
    }}>
      <h3 style={{ marginTop: 0, marginBottom: '8px' }}>¿Eliminar esta cuenta?</h3>
      <p style={{ color: '#666', marginBottom: '24px' }}>
        Esta acción no se puede deshacer. Todos tus datos serán eliminados permanentemente.
      </p>
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
        <Button variant="outline" color="blue">
          Cancelar
        </Button>
        <Button variant="solid" color="red">
          Eliminar
        </Button>
      </div>
    </div>
  </div>
);
