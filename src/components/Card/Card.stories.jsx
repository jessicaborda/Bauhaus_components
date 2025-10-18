import { Card } from './Card';
import { Button } from '../Button/Button';

/**
 * Card Component Stories
 */

export default {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    shadow: {
      control: 'boolean',
      description: 'Whether card has shadow',
    },
    hoverable: {
      control: 'boolean',
      description: 'Whether card has hover effect',
    },
  },
};

// Basic card
export const Basic = {
  args: {
    children: (
      <div>
        <div style={{ padding: '0 16px', display: 'block' }}>
          <div style={{ width:'5px', height: '20px', backgroundColor: 'var(--bauhaus-blue)' }}></div>
          <h3 style={{ marginBottom: '8px' }}>Card Title</h3>
        </div>
        <div style={{ width:'80%', height: '3px', backgroundColor: 'var(--bauhaus-red)' }}></div>
        <div style={{ paddingRight: '16px', display: 'flex', alignItems: 'end' }}>
          <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p style={{ color: '#757575' }}>
              This is a basic card component. You can put any content inside.
            </p>
            <Button variant="solid" color="blue">Action</Button>
          </div>
          <div style={{ width:'5px', height: '80px', backgroundColor: 'var(--bauhaus-yellow)' }}></div>
        </div>
      </div>
    ),
  },
};

// With image
export const WithImage = {
  args: {
    shadow: true,
    children: (
      <div>
        <img src="assets/img_default.jpg" alt="Card" style={{ width: '100%' }} />
        <div style={{ padding: '16px' }}>
          <h3 style={{ marginBottom: '8px' }}>Card with Shadow</h3>
          <div style={{ width:'80%', height: '3px', backgroundColor: 'var(--bauhaus-red)', margin: '8px 0' }}></div>
          <p style={{ color: '#757575', marginBottom: '16px' }}>
            Card with image and shadow effect.
          </p>
          <Button variant="solid" color="blue">Learn More</Button>
        </div>
      </div>
    ),
  },
};

// With icon
export const WithIcon = {
  args: {
    children: (
      <div>
        <div style={{ padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3>Card Title</h3>
          <img src="assets/icon_default.svg" alt="Icon" style={{ width: '32px', height: '32px' }} />
        </div>
        <div style={{ width:'80%', height: '3px', backgroundColor: 'var(--bauhaus-red)' }}></div>
        <div style={{ padding: '16px', display: 'flex', alignItems: 'end', gap: '16px' }}>
          <div style={{ flex: 1 }}>
            <p style={{ color: '#757575' }}>
              Card with icon and content.
            </p>
          </div>
          <div style={{ width:'5px', height: '60px', backgroundColor: 'var(--bauhaus-yellow)' }}></div>
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
        <div style={{ padding: '16px' }}>
          <div style={{ width:'5px', height: '20px', backgroundColor: 'var(--bauhaus-blue)' }}></div>
          <h3 style={{ marginBottom: '8px' }}>Interactive Card</h3>
          <div style={{ width:'80%', height: '3px', backgroundColor: 'var(--bauhaus-red)', margin: '8px 0' }}></div>
          <p style={{ color: '#757575' }}>
            Hover over this card to see the effect.
          </p>
        </div>
      </div>
    ),
  },
};

// Card grid
export const CardGrid = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '16px',
    }}
  >
    <Card shadow hoverable>
      <div style={{ padding: '8px' }}>
        <h3>Card 1</h3>
        <div style={{ width:'60%', height: '3px', backgroundColor: 'var(--bauhaus-red)', margin: '8px 0' }}></div>
        <p style={{ color: '#757575' }}>First card content</p>
      </div>
    </Card>
    
    <Card shadow hoverable>
      <div style={{ padding: '8px' }}>
        <div style={{ width:'5px', height: '15px', backgroundColor: 'var(--bauhaus-blue)' }}></div>
        <h3>Card 2</h3>
        <div style={{ width:'60%', height: '3px', backgroundColor: 'var(--bauhaus-red)', margin: '8px 0' }}></div>
        <p style={{ color: '#757575' }}>Second card content</p>
      </div>
    </Card>
    
    <Card shadow hoverable>
      <div style={{ padding: '8px' }}>
        <div style={{ width:'5px', height: '15px', backgroundColor: 'var(--bauhaus-blue)' }}></div>
        <h3>Card 3</h3>
        <div style={{ width:'60%', height: '3px', backgroundColor: 'var(--bauhaus-red)', margin: '8px 0' }}></div>
        <p style={{ color: '#757575' }}>Third card content</p>
      </div>
    </Card>
  </div>
);
