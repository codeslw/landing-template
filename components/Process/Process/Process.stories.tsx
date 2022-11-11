import { Meta, Story } from '@storybook/react';

import { Process } from './Process';

const meta: Meta = {
  title: 'Components/Process',
  component: Process,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (props) => <Process {...props} />;

export const Default = Template.bind({});
Default.args = {};