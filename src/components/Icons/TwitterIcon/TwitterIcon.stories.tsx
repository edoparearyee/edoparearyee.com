import type { Meta, StoryObj } from '@storybook/react';

import TwitterIcon from './TwitterIcon';

const meta: Meta<typeof TwitterIcon> = {
  title: 'Icons/TwitterIcon',
  component: TwitterIcon,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof TwitterIcon>;

const defaultArgs = { width: 64, height: 64 };

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};
