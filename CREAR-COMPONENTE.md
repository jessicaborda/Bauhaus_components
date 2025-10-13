# 🚀 Guía: Cómo Crear un Nuevo Componente

Esta guía te mostrará **paso a paso** cómo agregar un nuevo componente a Bauhaus UI.

---

## 📝 PASO 1: PLANIFICA TU COMPONENTE

Antes de escribir código, responde estas preguntas:

### ✅ Checklist de Planificación:
- [ ] **¿Qué hace el componente?** (descripción en una frase)
- [ ] **¿Qué variantes necesita?** (primary, secondary, success, error, etc.)
- [ ] **¿Qué tamaños?** (small, medium, large)
- [ ] **¿Qué props necesita?** (children, onClick, disabled, etc.)

### 📋 Ejemplo - Componente Badge:
```
✓ ¿Qué hace? → Etiqueta pequeña para mostrar estados
✓ Variantes → success, error, warning, info, neutral
✓ Tamaños → small, medium
✓ Props → children (texto), variant, size
```

---

## 🛠️ PASO 2: CREA LA ESTRUCTURA DE ARCHIVOS

### 2.1 Crea la carpeta del componente

```bash
# Reemplaza "MiComponente" con el nombre de tu componente
mkdir -p src/components/MiComponente
```

### 2.2 Crea los 4 archivos necesarios

```bash
cd src/components/MiComponente

# Archivo principal (lógica del componente)
touch MiComponente.jsx

# Estilos (CSS Modules)
touch MiComponente.module.css

# Documentación (Storybook)
touch MiComponente.stories.jsx

# Export limpio
touch index.js
```

**Resultado:**
```
MiComponente/
├── MiComponente.jsx           ← Lógica
├── MiComponente.module.css    ← Estilos
├── MiComponente.stories.jsx   ← Documentación
└── index.js                   ← Export
```

---

## 💻 PASO 3: ESCRIBE EL COMPONENTE (.jsx)

### 3.1 Plantilla Base

Copia esta plantilla en `MiComponente.jsx`:

```jsx
import styles from './MiComponente.module.css';

/**
 * Componente MiComponente
 * 
 * [Descripción de qué hace el componente]
 * 
 * @param {Object} props - Propiedades del componente
 * @param {React.ReactNode} props.children - Contenido del componente
 * @param {string} props.variant - Variante visual (ej: 'primary', 'secondary')
 * @param {string} props.size - Tamaño (ej: 'small', 'medium', 'large')
 */
export const MiComponente = ({
  children,
  variant = 'primary',
  size = 'medium',
  ...props
}) => {
  // Construir clases dinámicamente
  const classNames = [
    styles.componente,
    styles[variant],
    styles[size],
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
};
```

### 3.2 Personaliza según tus necesidades

- Cambia el elemento HTML (`<div>`, `<button>`, `<span>`, etc.)
- Agrega más props si necesitas
- Ajusta los valores por defecto

---

## 🎨 PASO 4: ESCRIBE LOS ESTILOS (.module.css)

### 4.1 Plantilla Base

Copia esta plantilla en `MiComponente.module.css`:

```css
/**
 * Estilos del componente MiComponente
 */

.componente {
  /* Estilos base compartidos por todas las variantes */
  display: inline-block;
  
  /* SIEMPRE usa variables CSS */
  padding: var(--space-md);
  border-radius: var(--border-radius-md);
  font-family: var(--font-family);
}

/* ===== VARIANTES ===== */

.primary {
  background-color: var(--bauhaus-blue);
  color: var(--bauhaus-white);
}

.secondary {
  background-color: var(--bauhaus-red);
  color: var(--bauhaus-white);
}

/* ===== TAMAÑOS ===== */

.small {
  padding: var(--space-sm);
  font-size: var(--font-size-sm);
}

.medium {
  padding: var(--space-md);
  font-size: var(--font-size-md);
}

.large {
  padding: var(--space-lg);
  font-size: var(--font-size-lg);
}
```

### 4.2 Reglas de Oro para Estilos

✅ **SIEMPRE usa variables CSS** → `var(--bauhaus-blue)`  
✅ **NO valores hardcodeados** → ❌ `color: #0066cc`  
✅ **Usa clases descriptivas** → `.primary`, `.large`, `.disabled`  
✅ **Organiza con comentarios** → `/* ===== SECCIÓN ===== */`

### 4.3 Variables CSS Disponibles

Consulta `src/styles/variables.css` para ver todas las variables disponibles:

```css
/* Colores */
--bauhaus-blue, --bauhaus-red, --bauhaus-yellow
--bauhaus-green, --bauhaus-orange, --bauhaus-purple
--bauhaus-white, --bauhaus-black
--bauhaus-gray-100, --bauhaus-gray-200, etc.

/* Espaciado */
--space-xs, --space-sm, --space-md, --space-lg, --space-xl

/* Tipografía */
--font-size-xs, --font-size-sm, --font-size-md, --font-size-lg
--font-weight-normal, --font-weight-medium, --font-weight-bold

/* Bordes */
--border-radius-sm, --border-radius-md, --border-radius-lg
--border-width, --border-width-thick

/* Sombras */
--shadow-sm, --shadow-md, --shadow-lg, --shadow-xl

/* Transiciones */
--transition-fast, --transition-normal, --transition-slow
```

---

## 📚 PASO 5: CREA LAS STORIES (.stories.jsx)

### 5.1 Plantilla Base

Copia esta plantilla en `MiComponente.stories.jsx`:

```jsx
import { MiComponente } from './MiComponente';

/**
 * Stories de Storybook para el componente MiComponente
 */

export default {
  title: 'Components/MiComponente',
  component: MiComponente,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Variante visual del componente',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Tamaño del componente',
    },
    children: {
      control: 'text',
      description: 'Contenido del componente',
    },
  },
};

// Story básica
export const Default = {
  args: {
    children: 'Contenido de ejemplo',
  },
};

// Variante primaria
export const Primary = {
  args: {
    variant: 'primary',
    children: 'Primary',
  },
};

// Variante secundaria
export const Secondary = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

// Todas las variantes juntas
export const AllVariants = () => (
  <div style={{ display: 'flex', gap: '16px' }}>
    <MiComponente variant="primary">Primary</MiComponente>
    <MiComponente variant="secondary">Secondary</MiComponente>
  </div>
);
```

### 5.2 Tips para Stories

- **Cada `export`** = una historia diferente en Storybook
- **`args`** = props del componente
- **`argTypes`** = controles interactivos
- **Crea ejemplos realistas** → Muestra cómo se usaría en producción

---

## 📤 PASO 6: CREA EL EXPORT (index.js)

Copia esto en `index.js`:

```javascript
/**
 * Export del componente MiComponente
 */
export { MiComponente } from './MiComponente';
```

**¿Por qué este archivo?**

Permite importar de manera limpia:
```javascript
// En lugar de:
import { Badge } from './components/Badge/Badge';

// Puedes hacer:
import { Badge } from './components/Badge';
```

---

## 🔗 PASO 7: AGRÉGALO AL EXPORT PRINCIPAL

### 7.1 Edita `src/index.js`

Agrega tu componente a la lista de exports:

```javascript
// src/index.js
export { Button } from './components/Button';
export { Card } from './components/Card';
export { Badge } from './components/Badge';
export { MiComponente } from './components/MiComponente';  // ← AGREGAR AQUÍ
```

**¡ESTE PASO ES CRUCIAL!** Sin esto, tu componente no se exportará en la librería.

---

## 👀 PASO 8: VE TU COMPONENTE EN STORYBOOK

### 8.1 Inicia Storybook (si no está corriendo)

```bash
npm run storybook
```

### 8.2 Abre el navegador

```
http://localhost:6006
```

### 8.3 Busca tu componente

En el sidebar izquierdo:
```
Components
  ├── Badge
  ├── Button
  ├── Card
  └── MiComponente  ← ¡Aquí está!
```

### 8.4 Juega con los controles

- Cambia los valores en el panel "Controls"
- Prueba diferentes variantes
- Verifica que todo funciona

---

## ✅ CHECKLIST FINAL

Antes de dar por terminado tu componente, verifica:

### Código:
- [ ] El componente acepta todas las props necesarias
- [ ] Tiene valores por defecto razonables
- [ ] Usa `{...props}` para extender props
- [ ] Está bien documentado (JSDoc)

### Estilos:
- [ ] Usa **solo variables CSS** (no valores hardcodeados)
- [ ] Funciona en diferentes tamaños
- [ ] Se ve bien en todos los backgrounds de Storybook

### Stories:
- [ ] Tiene al menos 3-5 stories diferentes
- [ ] Muestra todas las variantes
- [ ] Incluye un ejemplo "real world"
- [ ] Los controles funcionan correctamente

### Exports:
- [ ] Tiene `index.js` en su carpeta
- [ ] Está agregado a `src/index.js`
- [ ] Aparece en Storybook

---

## 🔧 TROUBLESHOOTING

### ❌ "Mi componente no aparece en Storybook"

**Solución:**
1. Verifica que el archivo termine en `.stories.jsx`
2. Reinicia Storybook (Ctrl+C y `npm run storybook`)
3. Verifica que el `export default` esté correcto

### ❌ "Los estilos no se aplican"

**Solución:**
1. Verifica que importaste el CSS: `import styles from './MiComponente.module.css'`
2. Verifica que las clases coinciden: `.badge` en CSS → `styles.badge` en JSX
3. Revisa que la clase se esté aplicando en el HTML (inspecciona con DevTools)

### ❌ "Las variables CSS no funcionan"

**Solución:**
1. Verifica la sintaxis: `var(--bauhaus-blue)` (con guiones)
2. Asegúrate de que la variable existe en `src/styles/variables.css`
3. Las variables deben estar dentro de `:root {}`

### ❌ "No puedo importar mi componente"

**Solución:**
1. Verifica que esté en `src/index.js`
2. Reconstruye: `npm run build`
3. Verifica el nombre: debe coincidir exactamente (case-sensitive)

---

## 📚 EJEMPLOS DE COMPONENTES POR DIFICULTAD

### 🟢 Fácil (Empieza aquí):
- **Badge** → Etiqueta simple
- **Avatar** → Imagen circular
- **Divider** → Línea divisoria
- **Spinner** → Animación de carga

### 🟡 Intermedio:
- **Input** → Campo de texto
- **Checkbox** → Casilla de verificación
- **Switch** → Toggle on/off
- **Tooltip** → Mensaje al hover

### 🔴 Avanzado:
- **Modal** → Ventana emergente
- **Dropdown** → Menú desplegable
- **Tabs** → Pestañas navegables
- **Accordion** → Secciones colapsables

---

## 🎯 SIGUIENTE PASO

Ahora que sabes cómo crear componentes:

1. **Elige uno de la lista de fáciles** (Badge, Avatar, Divider)
2. **Sigue esta guía paso a paso**
3. **Mira Button y Card como referencia**
4. **Experimenta y aprende**

**¡Recuerda!** No hay forma de romper nada. Si algo no funciona, borra y empieza de nuevo. Así se aprende.

---

**¿Dudas?** Revisa los componentes existentes (Button, Card, Badge) como ejemplos.

**¡Buena suerte!** 🚀

