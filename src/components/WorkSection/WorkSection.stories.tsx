import type { Meta, StoryObj } from '@storybook/react';

import WorkSection from './WorkSection';

const meta: Meta<typeof WorkSection> = {
  title: 'Sections/Work',
  component: WorkSection,
  parameters: {
    options: {
      showPanel: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof WorkSection>;

const defaultArgs = {};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};
