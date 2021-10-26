import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from './';

test('renders learn react link', () => {
  render(<Search handleSearch={() => { }} />);
  const appTitle = screen.getByText(/nasa/i);
  expect(appTitle).toBeInTheDocument();
});
