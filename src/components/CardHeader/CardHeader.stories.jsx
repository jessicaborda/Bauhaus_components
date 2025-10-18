import { CardHeader } from './CardHeader';

/**
 * CardHeader Component Stories
 */

export default {
  title: 'Components/CardHeader',
  component: CardHeader,
  tags: ['autodocs'],
  argTypes: {
    header: {
      control: 'text',
      description: 'Header text',
    },
    children: {
      control: 'text',
      description: 'Main content',
    },
    button: {
      control: 'object',
      description: 'Button configuration',
    },
  },
};

// Basic example
export const Basic = {
  args: {
    header: 'Card Title',
    children: (
      <p style={{ color: '#757575' }}>
        This is a basic card component. You can put any content inside.
      </p>
    ),
    button: {
      text: 'Action',
      variant: 'solid',
      color: 'blue',
      onClick: () => alert('Button clicked!'),
    },
  },
};

// Different button variants
export const WithOutlineButton = {
  args: {
    header: 'Card with Outline Button',
    children: (
      <p style={{ color: '#757575' }}>
        Card with outline button style.
      </p>
    ),
    button: {
      text: 'Learn More',
      variant: 'outline',
      color: 'red',
    },
  },
};

// Without button
export const WithoutButton = {
  args: {
    header: 'Card without Button',
    children: (
      <p style={{ color: '#757575' }}>
        This card doesn't have an action button.
      </p>
    ),
  },
};

// Rich content
export const RichContent = {
  args: {
    header: 'Product Card',
    children: (
      <div>
        <p style={{ color: '#757575', marginBottom: '8px' }}>
          Premium Bauhaus Design Kit
        </p>
        <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>
          $49.99
        </p>
      </div>
    ),
    button: {
      text: 'Add to Cart',
      variant: 'solid',
      color: 'green',
    },
  },
};

