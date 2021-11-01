import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Checkbox from './index';

test('renders Checkbox component', () => {
  render(<Checkbox id="test" name="test-checkbox" label="test-label" handleOnChange={() => { }} />);
  const checkboxLabel = screen.getByText(/test-label/i);
  expect(checkboxLabel).toBeInTheDocument();
});

test('It should change checked state on checkbox', () => {
  render(<Checkbox id="test" name="test-checkbox" label="test-label" handleOnChange={() => { }} />);
  const checkbox: any = screen.getByRole('checkbox');
  expect(checkbox.checked).toBe(false)
  fireEvent.change(checkbox, { target: { checked: true } })
  expect(checkbox.checked).toBe(true)
})