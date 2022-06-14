import React from 'react';
import { render, screen } from '@testing-library/react';

import { App } from './App';

it('renders without crashing', () => {
  render(<App />);
});

test('renders welcoming message', () => {
  render(<App />);
  const linkElement = screen.getByText(/This is boilerplate/i);
  expect(linkElement).toBeInTheDocument();
});
