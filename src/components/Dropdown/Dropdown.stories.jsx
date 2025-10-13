import React from 'react';
import Dropdown from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
};

const Template = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Actions',
  items: [
    { label: 'Edit', onClick: () => alert('Edit clicked') },
    { label: 'Duplicate', onClick: () => alert('Duplicate clicked') },
    { label: 'Delete', onClick: () => alert('Delete clicked'), disabled: true },
  ],
};
