import { RowCard } from './RowCard';
import { Button } from '../Button/Button';

/**
 * RowCard Component Stories
 */

export default {
  title: 'Components/RowCard',
  component: RowCard,
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

// Basic horizontal card
export const Basic = {
  args: {
    children: (
      <div style={{ 
        display: 'flex',
        alignItems: 'stretch',
        minHeight: '300px',
        border: '4px solid var(--bauhaus-black)',
      }}>
        {/* Vertical title section */}
        <div style={{
          position: 'relative',
          width: '60px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <div style={{
            position: 'absolute',
            bottom: '30%',
            left: '20px',
            transform: 'translateX(-50%)',
            width: '40px',
            height: '6px',
            backgroundColor: 'var(--bauhaus-blue)',
          }}></div>
          
          <h3 style={{
            position: 'absolute',
            left: '30%',
            top: '50%',
            transform: 'translate(-50%, -50%) rotate(-90deg)',
            whiteSpace: 'nowrap',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            margin: 0,
          }}>Card Title</h3>
        </div>

        {/* Red divider */}
        <div style={{ 
          width: '4px',
          backgroundColor: 'var(--bauhaus-red)',
          margin: '0 0 2rem 0',
        }}></div>

        {/* Main content */}
        <div style={{ 
          flex: 1,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          paddingRight: '24px',
        }}>
          <div style={{ 
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px', 
          }}>
            <p style={{ color: '#757575' }}>
              This is a horizontal card layout. Ideal for list items.
            </p>
            <Button variant="solid" color="blue">Action</Button>
          </div>

          {/* Yellow accent */}
          <div style={{ width:'6px', height: '200px', backgroundColor: 'var(--bauhaus-yellow)' }}></div>
        </div>
      </div>
    ),
  },
};

// With icon
export const WithIcon = {
  args: {
    children: (
      <div style={{ 
        display: 'flex',
        alignItems: 'stretch',
        minHeight: '300px',
        border: '4px solid var(--bauhaus-black)',
      }}>
        <div style={{
          position: 'relative',
          width: '60px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <img src="assets/icon_default.svg" alt="Icon" style={{ 
            position: 'absolute',
            bottom: '20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '32px', 
            height: '32px',
          }} />
          
          <h3 style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%) rotate(-90deg)',
            whiteSpace: 'nowrap',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            margin: 0,
          }}>Card Title</h3>
        </div>

        <div style={{ 
          width: '4px',
          backgroundColor: 'var(--bauhaus-red)',
          margin: '0 0 2rem 0',
        }}></div>

        <div style={{ 
          flex: 1,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          paddingRight: '24px',
        }}>
          <div style={{ 
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px', 
          }}>
            <p style={{ color: '#757575' }}>
              Horizontal card with icon decoration.
            </p>
            <Button variant="solid" color="blue">Action</Button>
          </div>
          
          <div style={{ width:'6px', height: '200px', backgroundColor: 'var(--bauhaus-yellow)' }}></div>
        </div>
      </div>
    ),
  },
};

// With image
export const WithImage = {
  args: {
    children: (
      <div style={{ 
        display: 'flex',
        alignItems: 'stretch',
        minHeight: '300px',
        border: '4px solid var(--bauhaus-black)',
      }}>
        <div style={{
          position: 'relative',
          width: '40%',
          display: 'flex',
        }}>
          <img src="assets/img_default.jpg" alt="Card" style={{ width: '100%', height:'100%', objectFit: 'cover' }} />  
        </div>

        <div style={{ 
          flex: 1,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          paddingRight: '24px',
        }}>
          <div style={{ 
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px', 
          }}>
            <h3>Card Title</h3>
            <div style={{ width:'60%', height: '4px', backgroundColor: 'var(--bauhaus-red)' }}></div>
            <p style={{ color: '#757575' }}>
              Horizontal card with image on the side.
            </p>
            <Button variant="solid" color="blue">Learn More</Button>
          </div>
          
          <div style={{ width:'6px', height: '200px', backgroundColor: 'var(--bauhaus-yellow)' }}></div>
        </div>
      </div>
    ),
  },
};
