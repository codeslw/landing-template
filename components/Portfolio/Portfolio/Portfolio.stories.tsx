import { Meta, Story } from '@storybook/react';

import { Portfolio } from './Portfolio';

const meta: Meta = {
  title: 'Components/Portfolio',
  component: Portfolio,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (props) => <Portfolio {...props} />;

export const Default = Template.bind({});
Default.args = {};