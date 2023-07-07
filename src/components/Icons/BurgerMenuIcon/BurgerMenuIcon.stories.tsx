import type { Meta, StoryObj } from '@storybook/react';

import BurgerMenuIcon, { BurgerMenuIconProps } from './BurgerMenuIcon';

const meta: Meta<typeof BurgerMenuIcon> = {
  title: 'Icons/BurgerMenuIcon',
  component: BurgerMenuIcon,
  argTypes: {
    state: { control: 'select' },
  },
};

export default meta;
type Story = StoryObj<typeof BurgerMenuIcon>;

const defaultArgs: BurgerMenuIconProps = {
  state: 'menu',
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};

export const Close: Story = {
  args: {
    ...defaultArgs,
    state: 'close',
  },
};
