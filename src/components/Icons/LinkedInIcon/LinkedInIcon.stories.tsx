import type { Meta, StoryObj } from '@storybook/react';

import LinkedInIcon from './LinkedInIcon';

const meta: Meta<typeof LinkedInIcon> = {
  title: 'Icons/LinkedInIcon',
  component: LinkedInIcon,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof LinkedInIcon>;

const defaultArgs = { width: 64, height: 64 };

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};
