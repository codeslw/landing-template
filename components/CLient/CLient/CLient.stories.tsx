import { Meta, Story } from '@storybook/react';

import { CLient } from './CLient';

const meta: Meta = {
  title: 'Components/CLient',
  component: CLient,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (props) => <CLient {...props} />;

export const Default = Template.bind({});
Default.args = {};