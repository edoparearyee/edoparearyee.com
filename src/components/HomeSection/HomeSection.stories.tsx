import type { Meta, StoryObj } from '@storybook/react';

import HomeSection from './HomeSection';

const meta: Meta<typeof HomeSection> = {
  title: 'Sections/Home',
  component: HomeSection,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof HomeSection>;

const defaultArgs = {};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};
