import { Meta, Story } from '@storybook/react';

import { Hero } from './Hero';

const meta: Meta = {
  title: 'Components/Hero',
  component: Hero,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (props) => <Hero {...props} />;

export const Default = Template.bind({});
Default.args = {};