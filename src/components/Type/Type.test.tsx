import React from 'react';
import { render, screen } from '@testing-library/react';

import Type from './Type';

test('component loads type', async () => {
  render(<Type>Cillum sit nisi labore commodo excepteur sit.</Type>);
  expect(
    screen.getByText('Cillum sit nisi labore commodo excepteur sit.'),
  ).toBeInTheDocument();
});
