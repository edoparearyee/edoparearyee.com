import type { Meta, StoryObj } from '@storybook/react';

import FacebookIcon from './FacebookIcon';

const meta: Meta<typeof FacebookIcon> = {
  title: 'Icons/FacebookIcon',
  component: FacebookIcon,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof FacebookIcon>;

const defaultArgs = { width: 64, height: 64 };

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};
