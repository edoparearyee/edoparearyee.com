import type { Meta, StoryObj } from '@storybook/react';

import InstagramIcon from './InstagramIcon';

const meta: Meta<typeof InstagramIcon> = {
  title: 'Icons/InstagramIcon',
  component: InstagramIcon,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof InstagramIcon>;

const defaultArgs = { width: 64, height: 64 };

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};
