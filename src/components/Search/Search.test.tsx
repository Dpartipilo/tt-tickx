import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Search from './';


test('It renders Nasa Search title', () => {
  render(<Search handleSearch={() => { }} />);
  const appTitle = screen.getByText(/nasa search/i);
  expect(appTitle).toBeInTheDocument();
});

test('It renders search disabled button', () => {
  render(<Search handleSearch={() => { }} />);
  const searchButton = screen.getByRole('button', { name: /search/i });

  expect(searchButton).toBeInTheDocument();
  expect(searchButton).toBeDisabled()
});

test('It renders search input', () => {
  render(<Search handleSearch={() => { }} />);
  const searchInput = screen.getByRole('textbox');
  expect(searchInput).toBeInTheDocument();
});

test('It should allow letters to be inputted', () => {
  render(<Search handleSearch={() => { }} />);
  const searchInput: any = screen.getByRole('textbox');
  expect(searchInput.value).toBe('') // empty before
  fireEvent.change(searchInput, { target: { value: 'Moon' } })
  expect(searchInput.value).toBe('Moon') //empty after
})