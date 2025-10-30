import React from 'react';
import { Checkbox } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Option',
  size: 'medium',
  disabled: false,
};

export const Checked = Template.bind({});
Checked.args = {
  label: 'Checked',
  defaultChecked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  disabled: true,
};
