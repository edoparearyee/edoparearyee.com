import type { Meta, StoryObj } from '@storybook/react';

import SkillsSection from './SkillsSection';

const meta: Meta<typeof SkillsSection> = {
  title: 'Sections/Skills',
  component: SkillsSection,
  parameters: {
    options: {
      showPanel: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof SkillsSection>;

const defaultArgs = {};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};
