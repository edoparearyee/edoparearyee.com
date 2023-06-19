import type { Meta, StoryObj } from '@storybook/react';

import Button, { ButtonProps } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    color: { control: 'select' },
    appearance: { control: 'select' },
    size: { control: 'select' },
    renderAs: { control: 'select' },
    external: {
      if: { arg: 'renderAs', eq: 'a' },
    },
    href: {
      control: 'text',
      type: 'string',
      if: { arg: 'renderAs', eq: 'a' },
    },
    children: { control: 'text', defaultValue: '', name: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

const defaultArgs: ButtonProps = {
  color: 'primary',
  appearance: 'solid',
  size: 'medium',
  renderAs: 'button',
  children: 'Click here',
  external: false,
  href: 'https://www.example.com',
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Solid: Story = {
  args: {
    ...defaultArgs,
    appearance: 'solid',
  },
};

export const Outline: Story = {
  args: {
    ...defaultArgs,
    appearance: 'outline',
  },
};

export const Link: Story = {
  args: {
    ...defaultArgs,
    appearance: 'link',
  },
};

export const NoAppearance: Story = {
  args: {
    ...defaultArgs,
    appearance: 'none',
  },
};

export const Small: Story = {
  args: {
    ...defaultArgs,
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    ...defaultArgs,
    size: 'large',
  },
};
