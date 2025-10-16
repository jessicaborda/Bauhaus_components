import { RowCard } from './RowCard';
import { Button } from '../Button/Button';

/**
 * Stories de Storybook para el componente RowCard
 */

export default {
  title: 'Components/RowCard',
  component: RowCard,
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