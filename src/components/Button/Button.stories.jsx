import { Button } from './Button';

/**
 * Button Component Stories
 * 
 * Compact story structure that showcases all variants, sizes, and states
 * in organized groups for easy visualization.
 */

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'warning', 'danger', 'success'],
      description: 'Button visual variant',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Button size',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Full width button',
    },
    children: {
      control: 'text',
      description: 'Button content',
    },
  },
};

// Interactive playground
export const Playground = {
  args: {
    variant: 'default',
    size: 'medium',
    disabled: false,
    fullWidth: false,
    children: 'Button',
  },
};

// All variants with their disabled states
export const AllVariants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
    <div>
      <h4 style={{ marginBottom: '12px', fontWeight: 600 }}>Normal State</h4>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <Button variant="default">Default</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="success">Success</Button>
      </div>
    </div>
    
    <div>
      <h4 style={{ marginBottom: '12px', fontWeight: 600 }}>Disabled State</h4>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <Button variant="default" disabled>Default</Button>
        <Button variant="warning" disabled>Warning</Button>
        <Button variant="danger" disabled>Danger</Button>
        <Button variant="success" disabled>Success</Button>
      </div>
    </div>
  </div>
);

// All sizes for each variant
export const AllSizes = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
    <div>
      <h4 style={{ marginBottom: '12px', fontWeight: 600 }}>Default</h4>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Button variant="default" size="small">Small</Button>
        <Button variant="default" size="medium">Medium</Button>
        <Button variant="default" size="large">Large</Button>
      </div>
    </div>
    
    <div>
      <h4 style={{ marginBottom: '12px', fontWeight: 600 }}>Warning</h4>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Button variant="warning" size="small">Small</Button>
        <Button variant="warning" size="medium">Medium</Button>
        <Button variant="warning" size="large">Large</Button>
      </div>
    </div>
    
    <div>
      <h4 style={{ marginBottom: '12px', fontWeight: 600 }}>Danger</h4>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Button variant="danger" size="small">Small</Button>
        <Button variant="danger" size="medium">Medium</Button>
        <Button variant="danger" size="large">Large</Button>
      </div>
    </div>
    
    <div>
      <h4 style={{ marginBottom: '12px', fontWeight: 600 }}>Success</h4>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Button variant="success" size="small">Small</Button>
        <Button variant="success" size="medium">Medium</Button>
        <Button variant="success" size="large">Large</Button>
      </div>
    </div>
  </div>
);

// Full width examples
export const FullWidth = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Button variant="default" fullWidth>Default Full Width</Button>
    <Button variant="warning" fullWidth>Warning Full Width</Button>
    <Button variant="danger" fullWidth>Danger Full Width</Button>
    <Button variant="success" fullWidth>Success Full Width</Button>
  </div>
);

