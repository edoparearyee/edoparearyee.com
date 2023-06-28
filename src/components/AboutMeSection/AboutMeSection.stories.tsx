import type { Meta, StoryObj } from '@storybook/react';

import AboutMeSection from './AboutMeSection';

const meta: Meta<typeof AboutMeSection> = {
  title: 'Sections/AboutMe',
  component: AboutMeSection,
  parameters: {
    options: {
      showPanel: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof AboutMeSection>;

const defaultArgs = {};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};
