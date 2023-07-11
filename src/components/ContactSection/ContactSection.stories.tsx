import type { Meta, StoryObj } from '@storybook/react';

import ContactSection from './ContactSection';

const meta: Meta<typeof ContactSection> = {
  title: 'Sections/Contact',
  component: ContactSection,
  parameters: {
    options: {
      showPanel: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof ContactSection>;

const defaultArgs = {};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};
