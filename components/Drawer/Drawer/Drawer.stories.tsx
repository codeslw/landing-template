import { Meta, Story } from '@storybook/react';

import { Drawer } from './Drawer';

const meta: Meta = {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (props: any) => <Drawer {...props} />;

export const Default = Template.bind({});
Default.args = {
  open: false,
  handleClose: () => { console.log("good") }
};