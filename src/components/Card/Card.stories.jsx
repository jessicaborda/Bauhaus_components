import { Card } from './Card';

/**
 * Stories de Storybook para el componente Card
 */

export default {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    shadow: {
      control: 'boolean',
      description: 'Muestra sombra en la tarjeta',
    },
    bordered: {
      control: 'boolean',
      description: 'Muestra borde en la tarjeta',
    },
    hoverable: {
      control: 'boolean',
      description: 'Efecto hover en la tarjeta',
    },
    padding: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Tamaño del padding interno',
    },
  },
};

// Story básica
export const Basic = {
  args: {
    children: (
      <div>
        <h3 style={{ marginBottom: '8px' }}>Card Title</h3>
        <p style={{ color: '#757575' }}>
          This is a basic card component. You can put any content inside.
        </p>
      </div>
    ),
  },
};

// Con sombra
export const WithShadow = {
  args: {
    shadow: true,
    children: (
      <div>
        <h3 style={{ marginBottom: '8px' }}>Card con Sombra</h3>
        <p style={{ color: '#757575' }}>
          Esta tarjeta tiene una sombra sutil que le da profundidad.
        </p>
      </div>
    ),
  },
};

// Sin borde
export const NoBorder = {
  args: {
    bordered: false,
    shadow: true,
    children: (
      <div>
        <h3 style={{ marginBottom: '8px' }}>Card sin Borde</h3>
        <p style={{ color: '#757575' }}>
          Esta tarjeta no tiene borde, solo sombra.
        </p>
      </div>
    ),
  },
};

// Hoverable
export const Hoverable = {
  args: {
    shadow: true,
    hoverable: true,
    children: (
      <div>
        <h3 style={{ marginBottom: '8px' }}>Card Interactiva</h3>
        <p style={{ color: '#757575' }}>
          Pasa el mouse por encima para ver el efecto hover.
        </p>
      </div>
    ),
  },
};

// Diferentes tamaños de padding
export const SmallPadding = {
  args: {
    padding: 'small',
    bordered: true,
    children: (
      <div>
        <h3 style={{ marginBottom: '8px' }}>Small Padding</h3>
        <p style={{ color: '#757575' }}>Padding reducido</p>
      </div>
    ),
  },
};

export const LargePadding = {
  args: {
    padding: 'large',
    bordered: true,
    children: (
      <div>
        <h3 style={{ marginBottom: '8px' }}>Large Padding</h3>
        <p style={{ color: '#757575' }}>Padding generoso</p>
      </div>
    ),
  },
};

// Ejemplo con contenido complejo
export const WithComplexContent = {
  args: {
    shadow: true,
    hoverable: true,
    children: (
      <div>
        <div
          style={{
            width: '100%',
            height: '150px',
            backgroundColor: '#0066cc',
            marginBottom: '16px',
            borderRadius: '8px',
          }}
        />
        <h3 style={{ marginBottom: '8px' }}>Producto Destacado</h3>
        <p style={{ color: '#757575', marginBottom: '16px' }}>
          Esta es una tarjeta con contenido más complejo: imágenes, texto y
          botones.
        </p>
        <button
          style={{
            padding: '8px 16px',
            backgroundColor: '#0066cc',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Ver más
        </button>
      </div>
    ),
  },
};

// Grid de Cards
export const CardGrid = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '16px',
    }}
  >
    <Card shadow hoverable>
      <h3 style={{ marginBottom: '8px' }}>Card 1</h3>
      <p style={{ color: '#757575' }}>Contenido de la primera tarjeta</p>
    </Card>
    <Card shadow hoverable>
      <h3 style={{ marginBottom: '8px' }}>Card 2</h3>
      <p style={{ color: '#757575' }}>Contenido de la segunda tarjeta</p>
    </Card>
    <Card shadow hoverable>
      <h3 style={{ marginBottom: '8px' }}>Card 3</h3>
      <p style={{ color: '#757575' }}>Contenido de la tercera tarjeta</p>
    </Card>
  </div>
);

