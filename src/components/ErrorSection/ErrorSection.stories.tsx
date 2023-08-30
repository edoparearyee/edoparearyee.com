import type { Meta, StoryObj } from '@storybook/react';

import ErrorSection from './ErrorSection';

const meta: Meta<typeof ErrorSection> = {
  title: 'Sections/Error',
  component: ErrorSection,
  parameters: {
    options: {
      showPanel: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof ErrorSection>;

const defaultArgs = {};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};
