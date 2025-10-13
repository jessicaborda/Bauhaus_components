

import { Input } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    error: { control: 'text' },
    placeholder: { control: 'text' },
    label: { control: 'text' },
  },
};

export const Playground = {
  args: {
    id: 'example',
    label: 'Nombre',
    placeholder: 'Escribe tu nombre',
    size: 'medium',
  },
};

export const WithError = {
  args: {
    id: 'email',
    label: 'Email',
    placeholder: 'correo@ejemplo.com',
    error: 'Email inválido',
  },
};

export const Disabled = {
  args: {
    id: 'disabled',
    label: 'Disabled',
    placeholder: 'No editable',
    disabled: true,
  },
};

export const FullWidth = {
  args: {
    id: 'full',
    label: 'Full width',
    placeholder: 'Ocupa todo el ancho',
    fullWidth: true,
  },
};
