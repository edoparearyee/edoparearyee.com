import type { Meta, StoryObj } from '@storybook/react';

import ModalBackground from './ModalBackground';

const meta: Meta<typeof ModalBackground> = {
  title: 'ModalBackground',
  component: ModalBackground,
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof ModalBackground>;

const defaultArgs = {};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};
