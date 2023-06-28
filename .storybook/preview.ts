import type { Preview } from '@storybook/react';

import '../src/styles/globals.scss';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    layout: 'fullscreen',
    controls: {
      exclude: ['className', 'innerClassName', 'children'],
      hideNoControlsWarning: true,
    },
    options: {
      showPanel: true,
    },
  },
};

export default preview;
