import type { Meta, StoryObj } from '@storybook/react';

import EmailIcon from './EmailIcon';

const meta: Meta<typeof EmailIcon> = {
  title: 'Icons/EmailIcon',
  component: EmailIcon,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof EmailIcon>;

const defaultArgs = { width: 64, height: 64 };

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};
