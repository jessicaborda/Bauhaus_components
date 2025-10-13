import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

/**
 * Configuración de Vite para construir la librería Bauhaus UI
 * 
 * Esta configuración permite:
 * - Construir la librería en formato ESM y UMD
 * - Incluir React como dependencia externa (peer dependency)
 * - Generar el CSS en un archivo separado
 */
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'BauhausUI',
      formats: ['es', 'umd'],
      fileName: (format) => `bauhaus-ui.${format === 'es' ? 'js' : 'umd.cjs'}`,
    },
    rollupOptions: {
      // Asegurarse de que React no se incluya en el bundle
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
        },
      },
    },
  },
});

