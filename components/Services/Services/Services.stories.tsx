import { Meta, Story } from '@storybook/react';

import { Services } from './Services';

const meta: Meta = {
  title: 'Components/Services',
  component: Services,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (props) => <Services {...props} />;

export const Default = Template.bind({});
Default.args = {};