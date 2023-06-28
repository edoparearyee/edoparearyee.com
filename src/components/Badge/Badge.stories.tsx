import type { Meta, StoryObj } from '@storybook/react';

import Badge, { BadgeProps } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Badge',
  component: Badge,
  argTypes: {
    appearance: { control: 'select' },
    shape: { control: 'select' },
    color: { control: 'select' },
    size: { control: 'select' },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

const defaultArgs: BadgeProps = {
  appearance: 'solid',
  color: 'primary',
  shape: 'square',
  size: 'small',
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};

export const Primary: Story = {
  args: {
    ...defaultArgs,
    appearance: 'solid',
    color: 'primary',
    shape: 'square',
  },
};

export const Secondary: Story = {
  args: {
    ...defaultArgs,
    appearance: 'solid',
    color: 'secondary',
    shape: 'square',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const Warning: Story = {
  args: {
    ...defaultArgs,
    appearance: 'solid',
    color: 'warning',
    shape: 'square',
  },
};

export const Success: Story = {
  args: {
    ...defaultArgs,
    appearance: 'solid',
    color: 'success',
    shape: 'square',
  },
};

export const Destructive: Story = {
  args: {
    ...defaultArgs,
    appearance: 'solid',
    color: 'destructive',
    shape: 'square',
  },
};

export const OutlinePrimary: Story = {
  args: {
    ...defaultArgs,
    appearance: 'outline',
    color: 'primary',
    shape: 'square',
  },
};

export const OutlineSecondary: Story = {
  args: {
    ...defaultArgs,
    appearance: 'outline',
    color: 'secondary',
    shape: 'square',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const PillPrimary: Story = {
  args: {
    ...defaultArgs,
    appearance: 'solid',
    color: 'primary',
    shape: 'pill',
  },
};

export const PillSecondary: Story = {
  args: {
    ...defaultArgs,
    appearance: 'solid',
    color: 'secondary',
    shape: 'pill',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const PillOutlinePrimary: Story = {
  args: {
    ...defaultArgs,
    appearance: 'outline',
    color: 'primary',
    shape: 'pill',
  },
};

export const PillOutlineSecondary: Story = {
  args: {
    ...defaultArgs,
    appearance: 'outline',
    color: 'secondary',
    shape: 'pill',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const Small: Story = {
  args: {
    ...defaultArgs,
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    ...defaultArgs,
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    ...defaultArgs,
    size: 'large',
  },
};
