import type { Preview } from '@storybook/react';

import '../src/styles/globals.scss';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    layout: 'fullscreen',
  },
};

export default preview;
