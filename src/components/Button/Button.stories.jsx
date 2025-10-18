import { Button } from './Button';

/**
 * Button Component Stories
 * 
 * Modern architecture with variant + color for maximum flexibility.
 */

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'text'],
      description: 'Button style',
    },
    color: {
      control: 'select',
      options: ['blue', 'red', 'yellow', 'green', 'orange', 'purple'],
      description: 'Button color',
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

// ===== INTERACTIVE PLAYGROUND =====

export const Playground = {
  args: {
    variant: 'solid',
    color: 'blue',
    size: 'medium',
    children: 'Button',
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
      <h3 style={{ marginTop: 0, marginBottom: '8px' }}>Delete Account?</h3>
      <p style={{ color: '#666', marginBottom: '24px' }}>
        This action cannot be undone. All your data will be permanently deleted.
      </p>
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
        <Button variant="outline" color="blue">
          Cancel
        </Button>
        <Button variant="solid" color="red">
          Delete
        </Button>
      </div>
    </div>
  </div>
);
