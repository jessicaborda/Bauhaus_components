import React from 'react';
import { Toggle } from './Toggle';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  argTypes: {
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => <Toggle {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Active',
  size: 'medium',
  disabled: false,
};

export const Checked = Template.bind({});
Checked.args = {
  label: 'On',
  defaultChecked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  disabled: true,
};
