import type { Meta, StoryObj } from '@storybook/react';

import ChevronLeftIcon from './ChevronLeftIcon';

const meta: Meta<typeof ChevronLeftIcon> = {
  title: 'Icons/ChevronLeftIcon',
  component: ChevronLeftIcon,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ChevronLeftIcon>;

const defaultArgs = { width: 64, height: 64 };

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};
