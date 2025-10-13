# 🏛️ Bauhaus UI

UI Kit minimalista inspirado en la escuela de diseño Bauhaus. Componentes React simples, funcionales y hermosos.

## 🎯 Sobre este Proyecto

Este es un proyecto de portafolio que demuestra la capacidad de crear una librería de componentes UI publicable en npm. Perfecto para mostrar habilidades de desarrollo frontend y diseño de sistemas.

## ✨ Características

- ⚛️ Componentes React 19
- 🎨 Sistema de diseño inspirado en Bauhaus
- 📦 Publicable en npm
- 📚 Documentación con Storybook
- 🎯 CSS Modules (scoped automáticamente)
- 🚀 Build rápido con Vite

## 🚀 Inicio Rápido

### 1. Instalar Dependencias

```bash
npm install
```

### 2. Ver Componentes en Storybook

```bash
npm run storybook
```

Esto abrirá Storybook en `http://localhost:6006` donde podrás ver todos los componentes y jugar con sus propiedades.

### 3. Construir la Librería

```bash
npm run build
```

Esto generará los archivos de distribución en la carpeta `dist/`.

## 📦 Cómo Usar la Librería (Después de Publicar)

### Instalación

```bash
npm install bauhaus-ui
```

### Uso en tu Proyecto

```jsx
import { Button, Card } from 'bauhaus-ui';
import 'bauhaus-ui/styles'; // Importar estilos

function App() {
  return (
    <div>
      <Button variant="primary" onClick={() => alert('Hola!')}>
        Click Me
      </Button>
      
      <Card shadow hoverable>
        <h2>Mi Tarjeta</h2>
        <p>Contenido de la tarjeta</p>
      </Card>
    </div>
  );
}
```

## 🎨 Componentes Disponibles

### Button

Botón versátil con múltiples variantes.

```jsx
<Button variant="primary" size="medium">
  Primary Button
</Button>

<Button variant="secondary" size="large">
  Secondary Button
</Button>

<Button variant="outline" disabled>
  Outline Button
</Button>
```

**Props:**
- `variant`: `'primary'` | `'secondary'` | `'outline'` (default: `'primary'`)
- `size`: `'small'` | `'medium'` | `'large'` (default: `'medium'`)
- `disabled`: `boolean` (default: `false`)
- `fullWidth`: `boolean` (default: `false`)
- `onClick`: Función a ejecutar al hacer click

### Card

Tarjeta contenedora para agrupar contenido.

```jsx
<Card shadow hoverable>
  <h3>Título</h3>
  <p>Contenido de la tarjeta</p>
</Card>
```

**Props:**
- `shadow`: `boolean` - Muestra sombra (default: `false`)
- `bordered`: `boolean` - Muestra borde (default: `true`)
- `hoverable`: `boolean` - Efecto hover (default: `false`)
- `padding`: `'small'` | `'medium'` | `'large'` (default: `'medium'`)
- `onClick`: Función opcional para hacer la card clickeable

## 🛠️ Cómo Agregar un Nuevo Componente

Sigue estos pasos para crear un nuevo componente:

### 1. Crear la Carpeta del Componente

```
src/components/TuComponente/
├── TuComponente.jsx
├── TuComponente.module.css
├── TuComponente.stories.jsx
└── index.js
```

### 2. Crear el Componente (.jsx)

```jsx
// TuComponente.jsx
import styles from './TuComponente.module.css';

export const TuComponente = ({ children, ...props }) => {
  return (
    <div className={styles.container} {...props}>
      {children}
    </div>
  );
};
```

### 3. Crear los Estilos (.module.css)

```css
/* TuComponente.module.css */
.container {
  padding: var(--space-md);
  background-color: var(--bauhaus-white);
  border-radius: var(--border-radius-md);
}
```

**Tip:** Usa las variables CSS definidas en `src/styles/variables.css` para mantener consistencia.

### 4. Crear las Stories de Storybook (.stories.jsx)

```jsx
// TuComponente.stories.jsx
import { TuComponente } from './TuComponente';

export default {
  title: 'Components/TuComponente',
  component: TuComponente,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    children: 'Contenido de ejemplo',
  },
};
```

### 5. Exportar el Componente

```js
// src/components/TuComponente/index.js
export { TuComponente } from './TuComponente';
```

### 6. Agregarlo al Export Principal

Edita `src/index.js`:

```js
export { TuComponente } from './components/TuComponente';
```

### 7. ¡Listo! Ver en Storybook

```bash
npm run storybook
```

## 🎨 Sistema de Diseño

### Variables CSS Disponibles

Todas las variables están en `src/styles/variables.css`:

#### Colores
```css
--bauhaus-blue      /* Azul primario */
--bauhaus-red       /* Rojo secundario */
--bauhaus-yellow    /* Amarillo */
--bauhaus-orange    /* Naranja */
--bauhaus-green     /* Verde */
--bauhaus-black     /* Negro */
--bauhaus-white     /* Blanco */
```

#### Espaciado
```css
--space-xs    /* 4px */
--space-sm    /* 8px */
--space-md    /* 16px */
--space-lg    /* 24px */
--space-xl    /* 32px */
```

#### Tipografía
```css
--font-size-xs    /* 12px */
--font-size-sm    /* 14px */
--font-size-md    /* 16px */
--font-size-lg    /* 20px */
```

#### Bordes
```css
--border-radius-sm    /* 4px */
--border-radius-md    /* 8px */
--border-radius-lg    /* 12px */
```

## 📤 Publicar en npm

### Preparación

1. **Crear cuenta en npmjs.com** (si no tienes)
2. **Login desde la terminal:**

```bash
npm login
```

### Publicar

```bash
# 1. Asegúrate de que todo esté construido
npm run build

# 2. Verifica que el package.json tenga un nombre único
# Edita el "name" en package.json si es necesario

# 3. Publica
npm publish
```

### Actualizar Versiones

Cuando hagas cambios y quieras publicar una nueva versión:

```bash
# Aumentar versión patch (1.0.0 -> 1.0.1)
npm version patch

# Aumentar versión minor (1.0.0 -> 1.1.0)
npm version minor

# Aumentar versión major (1.0.0 -> 2.0.0)
npm version major

# Luego publicar
npm publish
```

## 🎓 Recursos para Aprender

- **Storybook**: https://storybook.js.org/docs/react/get-started/introduction
- **CSS Modules**: https://github.com/css-modules/css-modules
- **Vite**: https://vitejs.dev/guide/
- **React Docs**: https://react.dev/
- **npm Publishing**: https://docs.npmjs.com/creating-and-publishing-scoped-public-packages

## 🎨 Inspiración de Diseño

Este proyecto está inspirado en la **Bauhaus**, una escuela de diseño alemana que revolucionó el arte, arquitectura y diseño en el siglo XX. Sus principios:

- **Forma sigue función**: Diseño funcional y sin adornos innecesarios
- **Geometría simple**: Uso de formas básicas (círculos, cuadrados, triángulos)
- **Paleta de colores primarios**: Rojo, azul, amarillo + blanco y negro
- **Tipografía sans-serif**: Limpia y legible

## 📝 Licencia

MIT

---

**Hecho con ❤️ como proyecto de portafolio**

*¿Tienes preguntas o sugerencias? ¡Abre un issue!*

