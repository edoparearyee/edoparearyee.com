import type { Meta, StoryObj } from '@storybook/react';

import Section from './Section';

const meta: Meta<typeof Section> = {
  title: 'Section',
  component: Section,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Section>;

const defaultArgs = {};

const boxStyle = {
  alignItems: 'center',
  background: '#F1F2F5',
  border: '1px solid #101823',
  display: 'flex',
  height: '200px',
  justifyContent: 'center',
  width: '100%',
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    ...defaultArgs,
    children: (
      <>
        <div style={boxStyle}>Content</div>
      </>
    ),
  },
};

export const Overflow: Story = {
  args: {
    ...defaultArgs,
    children: (
      <>
        <div style={boxStyle}>Content</div>
        <div style={boxStyle}>Content</div>
        <div style={boxStyle}>Content</div>
        <div style={boxStyle}>Content</div>
      </>
    ),
  },
};
