import type { Meta, StoryObj } from '@storybook/react';

import ClientsSection from './ClientsSection';

const meta: Meta<typeof ClientsSection> = {
  title: 'Sections/Clients',
  component: ClientsSection,
  parameters: {
    options: {
      showPanel: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof ClientsSection>;

const defaultArgs = {};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    ...defaultArgs,
    clients: [
      {
        logoLightUrl:
          'https://images.ctfassets.net/6jfmcr2hylt7/oQ2rkUe3qDUgTGQD48rEO/0b730264cea8f2394e93db675b19054d/WWE_Logo_Vector.svg',
        logoDarkUrl:
          'https://images.ctfassets.net/6jfmcr2hylt7/14c4DoTgQhdbkb0SNLSHGk/1a2381aafbab288be880ab4774d5eb71/WWE_Logo_Vector.svg',
        name: 'WWE',
      },
      {
        logoLightUrl:
          'https://images.ctfassets.net/6jfmcr2hylt7/NPRjMZoMOmTUDKiHmTpMA/abd1f14108abb68e44abea9d2e02ec89/nike-4-logo-svg-vector.svg',
        logoDarkUrl:
          'https://images.ctfassets.net/6jfmcr2hylt7/7xbfByrXdySz4F6iXE4ZSW/cd2f1a7baa79c7f3aa0778d8d38f5598/nike-4-logo-svg-vector.svg',
        name: 'Nike',
      },
      {
        logoLightUrl:
          'https://images.ctfassets.net/6jfmcr2hylt7/oQ2rkUe3qDUgTGQD48rEO/0b730264cea8f2394e93db675b19054d/WWE_Logo_Vector.svg',
        logoDarkUrl:
          'https://images.ctfassets.net/6jfmcr2hylt7/14c4DoTgQhdbkb0SNLSHGk/1a2381aafbab288be880ab4774d5eb71/WWE_Logo_Vector.svg',
        name: 'WWE',
      },
      {
        logoLightUrl:
          'https://images.ctfassets.net/6jfmcr2hylt7/NPRjMZoMOmTUDKiHmTpMA/abd1f14108abb68e44abea9d2e02ec89/nike-4-logo-svg-vector.svg',
        logoDarkUrl:
          'https://images.ctfassets.net/6jfmcr2hylt7/7xbfByrXdySz4F6iXE4ZSW/cd2f1a7baa79c7f3aa0778d8d38f5598/nike-4-logo-svg-vector.svg',
        name: 'Nike',
      },
      {
        logoLightUrl:
          'https://images.ctfassets.net/6jfmcr2hylt7/oQ2rkUe3qDUgTGQD48rEO/0b730264cea8f2394e93db675b19054d/WWE_Logo_Vector.svg',
        logoDarkUrl:
          'https://images.ctfassets.net/6jfmcr2hylt7/14c4DoTgQhdbkb0SNLSHGk/1a2381aafbab288be880ab4774d5eb71/WWE_Logo_Vector.svg',
        name: 'WWE',
      },
      {
        logoLightUrl:
          'https://images.ctfassets.net/6jfmcr2hylt7/NPRjMZoMOmTUDKiHmTpMA/abd1f14108abb68e44abea9d2e02ec89/nike-4-logo-svg-vector.svg',
        logoDarkUrl:
          'https://images.ctfassets.net/6jfmcr2hylt7/7xbfByrXdySz4F6iXE4ZSW/cd2f1a7baa79c7f3aa0778d8d38f5598/nike-4-logo-svg-vector.svg',
        name: 'Nike',
      },
    ],
  },
};
