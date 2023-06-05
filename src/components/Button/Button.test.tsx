import React from 'react';
import { render, screen } from '@testing-library/react';

import Button from './Button';

test('component loads button', async () => {
  render(<Button>Click here</Button>);
  expect(screen.getByRole('button')).toHaveTextContent('Click here');
});
