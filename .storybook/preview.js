import '../src/styles/variables.css';
import '../src/styles/global.css';

/**
 * Configuración de preview de Storybook
 * 
 * Aquí importamos los estilos globales para que se apliquen
 * a todas las stories y definimos parámetros globales.
 */
export const parameters = {
  // Centrar los componentes en el canvas
  layout: 'centered',
  
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
  backgrounds: {
    options: {
      light: {
        name: 'light',
        value: '#ffffff',
      },

      dark: {
        name: 'dark',
        value: '#1a1a1a',
      },

      gray: {
        name: 'gray',
        value: '#f5f5f5',
      }
    }
  },
};

export const initialGlobals = {
  backgrounds: {
    value: 'light'
  }
};

