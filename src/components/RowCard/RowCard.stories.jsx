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
      <div style={{ display: 'flex',
                    alignItems: 'stretch',
                    position: 'relative',
                    minHeight: '300px',
                    border: '4px solid var(--bauhaus-black)',
                  }}
      >

        {/* Sección título vertical */}
        <div style={{
                      position: 'relative',
                      width: '60px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
        >

    {/* Línea azul */}
          <div style={{
                        position: 'absolute',
                        bottom: '30%',
                        left: '20px',
                        transform: 'translateX(-50%)',
                        width: '40px',
                        height: '6px',
                        backgroundColor: 'var(--bauhaus-blue)',
                      }}
          ></div>

    {/* Título card */}
          <h3 style={{
                      position: 'absolute',
                      left: '30%',
                      top: '50%',
                      transform: 'translate(-50%, -50%) rotate(-90deg)',
                      transformOrigin: 'center center',
                      whiteSpace: 'nowrap',
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      margin: 0,
                    }}> Card Title
          </h3>
      </div>

        {/* Línea roja */}
        <div style={{ width: '4px',
                      backgroundColor: 'var(--bauhaus-red)',
                      margin: '0 0 2rem 0',
                    }}> 
        </div>

    {/* Contenido principal card */}
        <div style={{ flex: 1,
                      display: 'flex',
                      alignItems: 'flex-end',
                      justifyContent: 'space-between',
                      paddingRight: '24px',
                    }}
        >

          <div style={{ padding: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        gap: '16px', 
                      }}
          >
            <p style={{ color: '#757575' }}>
               This is a basic card component. You can put any content inside.
            </p>
            <Button variant="default">Button</Button>
          </div>

          {/* Línea amarilla */}
        <div style={{ width:'6px', height: '200px', backgroundColor: 'var(--bauhaus-yellow)' }}></div>
        </div>
      </div>
    ),
  },
};

// Story con icono
export const WithIcon = {
  args: {
    children: (
      <div style={{ display: 'flex',
                    alignItems: 'stretch',
                    position: 'relative',
                    minHeight: '300px',
                    border: '4px solid var(--bauhaus-black)',
                  }}
      >

        {/* Sección título vertical */}
        <div style={{
                      position: 'relative',
                      width: '60px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
        >

    {/* Icono */}
          <img src="assets/icon_default.svg" alt="icon_default" style={{ 
                        position: 'absolute',
                        bottom: '20%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '32px', 
                        height: '32px' }} />

    {/* Título card */}
          <h3 style={{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%, -50%) rotate(-90deg)',
                      transformOrigin: 'center center',
                      whiteSpace: 'nowrap',
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      margin: 0,
                    }}> Card Title
          </h3>
      </div>

        {/* Línea roja */}
        <div style={{ width: '4px',
                      backgroundColor: 'var(--bauhaus-red)',
                      margin: '0 0 2rem 0',
                    }}> 
        </div>

    {/* Contenido principal card */}
        <div style={{ flex: 1,
                      display: 'flex',
                      alignItems: 'flex-end',
                      justifyContent: 'space-between',
                      paddingRight: '24px',
                    }}
        >

          <div style={{ padding: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        gap: '16px', 
                      }}
          >
            <p style={{ color: '#757575' }}>
               This is a basic card component. You can put any content inside.
            </p>
            <Button variant="default">Button</Button>
          </div>
          
          {/* Línea amarilla */}
        <div style={{ width:'6px', height: '200px', backgroundColor: 'var(--bauhaus-yellow)' }}></div>
        </div>
      </div>
    ),
  },
};

// Story con imagen
export const WithImage = {
  args: {
    children: (
      <div style={{ display: 'flex',
                    alignItems: 'stretch',
                    position: 'relative',
                    minHeight: '300px',
                    border: '4px solid var(--bauhaus-black)',
                  }}
      >

        {/* Sección título vertical */}
        <div style={{
                      position: 'relative',
                      width: '40%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
        >

        <img src="assets/img_default.jpg" alt="image_default" style={{ width: '100%', height:'100%' }} />  
      </div>

    {/* Contenido principal card */}
        <div style={{ flex: 1,
                      display: 'flex',
                      alignItems: 'flex-end',
                      justifyContent: 'space-between',
                      paddingRight: '24px',
                    }}
        >

          <div style={{ padding: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        gap: '16px', 
                      }}
          >
            <h3 style={{ marginBottom: '8px' }}>Título de la card</h3>
            <div style={{ width:'60%', height: '4px', backgroundColor: 'var(--bauhaus-red)' }}></div>
            <p style={{ color: '#757575' }}>
               This is a basic card component. You can put any content inside.
            </p>
            <Button variant="default">Button</Button>
          </div>
          
          {/* Línea amarilla */}
        <div style={{ width:'6px', height: '200px', backgroundColor: 'var(--bauhaus-yellow)' }}></div>
        </div>
      </div>
    ),
  },
};