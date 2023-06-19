import React from 'react';
import { render, screen } from '@testing-library/react';

import Image from './Image';

test('component loads button', async () => {
  render(
    <Image
      sources={[
        {
          breakpoint: 1024,
          '1x': 'https://picsum.photos/id/195/1024/576',
          '2x': 'https://picsum.photos/id/195/2048/1152',
        },
        {
          breakpoint: 768,
          '1x': 'https://picsum.photos/id/195/768/1365',
          '2x': 'https://picsum.photos/id/195/1536/2730',
        },
        {
          breakpoint: 375,
          '1x': 'https://picsum.photos/id/195/375/666',
          '2x': 'https://picsum.photos/id/195/750/1332',
        },
      ]}
      alt=""
    />,
  );
  expect(screen.getByRole('img')).toBeInTheDocument();
});
