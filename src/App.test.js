import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio sections', () => {
  render(<App />);

  expect(screen.getByRole('navigation', { name: /primary/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /toggle theme/i })).toBeInTheDocument();

  // Headings
  expect(screen.getByText(/projects/i)).toBeInTheDocument();
  expect(screen.getByText(/skills/i)).toBeInTheDocument();
  expect(screen.getByText(/contact/i)).toBeInTheDocument();
});

