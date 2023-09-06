import type { Meta, StoryObj } from '@storybook/react';

import ChevronRightIcon from './ChevronRightIcon';

const meta: Meta<typeof ChevronRightIcon> = {
  title: 'Icons/ChevronRightIcon',
  component: ChevronRightIcon,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ChevronRightIcon>;

const defaultArgs = { width: 64, height: 64 };

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};
