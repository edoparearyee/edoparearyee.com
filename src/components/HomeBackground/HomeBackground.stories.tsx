import type { Meta, StoryObj } from '@storybook/react';

import HomeBackground from './HomeBackground';

const meta: Meta<typeof HomeBackground> = {
  title: 'HomeBackground',
  component: HomeBackground,
};

export default meta;
type Story = StoryObj<typeof HomeBackground>;

const defaultArgs = {};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};
