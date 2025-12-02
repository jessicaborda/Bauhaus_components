/**
 * Configuración principal de Storybook
 * 
 * Aquí se definen:
 * - Dónde buscar las stories (archivos *.stories.jsx)
 * - Qué addons usar (essentials incluye controles, docs, etc.)
 * - El framework (React con Vite)
 */
export default {
  stories: ['../src/**/*.stories.@(js|jsx|mjs)'],
  addons: ['@storybook/addon-links', '@storybook/addon-docs'],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  // GitHub Pages configuration
  viteFinal: async (config) => {
    // Set base path for GitHub Pages deployment
    if (process.env.NODE_ENV === 'production') {
      config.base = '/Bauhaus_components/';
    }
    return config;
  }
};

