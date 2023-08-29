import type { Meta, StoryObj } from '@storybook/react';

import Footer, { FooterProps } from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Footer',
  component: Footer,
};

export default meta;
type Story = StoryObj<typeof Footer>;

const defaultArgs: FooterProps = {};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};
