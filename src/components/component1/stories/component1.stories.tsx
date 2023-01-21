//@ts-nocheck
import { Meta } from '@storybook/html';
import { Component1 } from '../component1';

export default {
  component: Component1,
  title: 'Component 1 Story',
  parameters: {
    docs: {
      description: {}
    }
  },
  argTypes: {}
} as Meta;

const Template = () => (<Component1 />);

export const Component1Story = Template.bind({});

