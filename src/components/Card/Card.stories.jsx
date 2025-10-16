import { Card } from './Card';
import { Button } from '../Button/Button';

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
  },
};

// Story básica
export const Basic = {
  args: {
    children: (
      <div>
        <div style={{ padding: '0 16px', display: 'block', alignItems: 'center' }}>
          <div style={{ width:'5px', height: '20px', backgroundColor: 'var(--bauhaus-blue)' }}></div>
          <h3 style={{ marginBottom: '8px' }}>Card Title</h3>
        </div>
        <div style={{ width:'80%', height: '3px', backgroundColor: 'var(--bauhaus-red)' }}></div>
        <div style={{ paddingRight: '16px', display: 'flex', flexDirection: 'row', alignItems: 'end' }}>
          <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px' }}>
            <p style={{ color: '#757575' }}>
               This is a basic card component. You can put any content inside.
            </p>
            <Button variant="default">Button</Button>
          </div>
        <div style={{ width:'5px', height: '80px', backgroundColor: 'var(--bauhaus-yellow)' }}></div>
        </div>
      </div>
    ),
  },
};

// Con imagen
export const WithImage = {
  args: {
    shadow: true,
    children: (
      <div>
        <img src="assets/img_default.jpg" alt="image_default" style={{ width: '100%' }} />
        <div style={{ padding: '16px', display: 'block', alignItems: 'center' }}>
          <h3 style={{ marginBottom: '8px' }}>Card con Sombra</h3>
        </div>
        <div style={{ width:'80%', height: '3px', backgroundColor: 'var(--bauhaus-red)' }}></div>
        <div style={{ paddingRight: '16px', display: 'flex', flexDirection: 'row', alignItems: 'end' }}>
          <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px' }}>
            <p style={{ color: '#757575' }}>
               This is a basic card component. You can put any content inside.
            </p>
            <Button variant="default">Button</Button>
          </div>
        <div style={{ width:'5px', height: '80px', backgroundColor: 'var(--bauhaus-yellow)' }}></div>
        </div>
      </div>
    ),
  },
};

// Con Iconos
export const WithIcon = {
  args: {
    children: (
      <div>
        <div style={{ padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ marginBottom: '8px' }}>Card Title</h3>
          <img src="assets/icon_default.svg" alt="icon_default" style={{ width: '32px', height: '32px' }} />
        </div>
        <div style={{ width:'80%', height: '3px', backgroundColor: 'var(--bauhaus-red)' }}></div>
        <div style={{ paddingRight: '16px', display: 'flex', flexDirection: 'row', alignItems: 'end' }}>
          <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px' }}>
            <p style={{ color: '#757575' }}>
               This is a basic card component. You can put any content inside.
            </p>
            <Button variant="default">Button</Button>
          </div>
        <div style={{ width:'5px', height: '80px', backgroundColor: 'var(--bauhaus-yellow)' }}></div>
        </div>
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
        <div style={{ padding: '0 16px', display: 'block', alignItems: 'center' }}>
          <div style={{ width:'5px', height: '20px', backgroundColor: 'var(--bauhaus-blue)' }}></div>
          <h3 style={{ marginBottom: '8px' }}>Card Interactiva</h3>
        </div>
        <div style={{ width:'80%', height: '3px', backgroundColor: 'var(--bauhaus-red)' }}></div>
        <div style={{ paddingRight: '16px', display: 'flex', flexDirection: 'row', alignItems: 'end' }}>
          <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px' }}>
            <p style={{ color: '#757575' }}>
               Pasa el mouse por encima para ver el efecto hover.
            </p>
            <Button variant="default">Button</Button>
          </div>
        <div style={{ width:'5px', height: '80px', backgroundColor: 'var(--bauhaus-yellow)' }}></div>
        </div>
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
      <div style={{ padding: '8px', display: 'block', alignItems: 'center' }}>
          
          <h3 style={{ marginBottom: '8px' }}>Card 1</h3>
        </div>
        <div style={{ width:'80%', height: '3px', backgroundColor: 'var(--bauhaus-red)' }}></div>
        <div style={{ paddingRight: '16px', display: 'flex', flexDirection: 'row', alignItems: 'end' }}>
          <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px' }}>
            <p style={{ color: '#757575' }}>
               Contenido de la primera tarjeta
            </p>
          </div>
        <div style={{ width:'5px', height: '80px', backgroundColor: 'var(--bauhaus-yellow)' }}></div>
      </div>
    </Card>
    <Card shadow hoverable>
      <div style={{ padding: '0 16px', display: 'block', alignItems: 'center' }}>
          <div style={{ width:'5px', height: '20px', backgroundColor: 'var(--bauhaus-blue)' }}></div>
          <h3 style={{ marginBottom: '8px' }}>Card 2</h3>
        </div>
        <div style={{ width:'80%', height: '3px', backgroundColor: 'var(--bauhaus-red)' }}></div>
        <div style={{ paddingRight: '16px', display: 'flex', flexDirection: 'row', alignItems: 'end' }}>
          <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px' }}>
            <p style={{ color: '#757575' }}>
               Contenido de la segunda tarjeta
            </p>
          </div>
        <div style={{ width:'5px', height: '80px', backgroundColor: 'var(--bauhaus-yellow)' }}></div>
      </div>
    </Card>
    <Card shadow hoverable>
      <div style={{ padding: '0 16px', display: 'block', alignItems: 'center' }}>
          <div style={{ width:'5px', height: '20px', backgroundColor: 'var(--bauhaus-blue)' }}></div>
          <h3 style={{ marginBottom: '8px' }}>Card 3</h3>
        </div>
        <div style={{ width:'80%', height: '3px', backgroundColor: 'var(--bauhaus-red)' }}></div>
        <div style={{ paddingRight: '16px', display: 'flex', flexDirection: 'row', alignItems: 'end' }}>
          <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px' }}>
            <p style={{ color: '#757575' }}>
               Contenido de la tercera tarjeta
            </p>
          </div>
        <div style={{ width:'5px', height: '80px', backgroundColor: 'var(--bauhaus-yellow)' }}></div>
      </div>
    </Card>
  </div>
);

