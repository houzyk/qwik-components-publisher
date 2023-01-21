//@ts-nocheck
import { Meta } from '@storybook/html';
import { Component2 } from '../component2';

export default {
  component: Component2,
  title: 'Component 2 Story',
  parameters: {
    docs: {
      description: {}
    }
  },
  argTypes: {}
} as Meta;

const Template = () => (<Component2 />);

export const Component2Story = Template.bind({});

