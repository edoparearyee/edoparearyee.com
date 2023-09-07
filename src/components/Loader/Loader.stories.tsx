import type { Meta, StoryObj } from '@storybook/react';

import Loader, { LoaderProps } from './Loader';

const meta: Meta<typeof Loader> = {
  title: 'Loader',
  component: Loader,
};

export default meta;
type Story = StoryObj<typeof Loader>;

const defaultArgs: LoaderProps = {};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};
