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
    media: {
      control: 'text',
      description: 'Media URL (image/icon) to display in header',
    },
    mediaType: {
      control: 'select',
      options: ['icon', 'banner'],
      description: 'Type of media: "icon" (48x48 top-right) or "banner" (full-width)',
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

// With banner
export const WithBanner = {
  args: {
    header: 'Card with Banner',
    media: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=200&fit=crop',
    mediaType: 'banner',
    children: (
      <p style={{ color: '#757575' }}>
        Banner media displays as a full-width image without padding. The blue accent is not displayed.
      </p>
    ),
    button: {
      text: 'View Details',
      variant: 'solid',
      color: 'blue',
    },
  },
};

// With icon
export const WithIcon = {
  args: {
    header: 'Card with Icon',
    media: 'https://api.iconify.design/mdi/account-circle.svg?color=%23000000&width=48&height=48',
    mediaType: 'icon',
    children: (
      <p style={{ color: '#757575' }}>
        Icon media displays as a 48x48 icon in the top-right corner. The blue accent is not displayed.
      </p>
    ),
    button: {
      text: 'View Profile',
      variant: 'outline',
      color: 'blue',
    },
  },
};

