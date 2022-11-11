import { Meta, Story } from '@storybook/react';

import { Testimonals } from './Testimonals';

const meta: Meta = {
  title: 'Components/Testimonals',
  component: Testimonals,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (props) => <Testimonals {...props} />;

export const Default = Template.bind({});
Default.args = {};