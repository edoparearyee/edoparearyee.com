import type { Meta, StoryObj } from '@storybook/react';

import GitHubIcon from './GitHubIcon';

const meta: Meta<typeof GitHubIcon> = {
  title: 'Icons/GitHubIcon',
  component: GitHubIcon,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof GitHubIcon>;

const defaultArgs = { width: 64, height: 64 };

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};
