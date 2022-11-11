import { Meta, Story } from '@storybook/react';

import { Header } from './Header';

const meta: Meta = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (props: any) => <Header {...props} />;

export const Default = Template.bind({});
Default.args = {};