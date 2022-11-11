import { Meta, Story } from '@storybook/react';

import { Main } from './Main';

const meta: Meta = {
  title: 'Components/Main',
  component: Main,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (props) => <Main {...props} />;

export const Default = Template.bind({});
Default.args = {};