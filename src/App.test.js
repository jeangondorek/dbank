import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Dbank', () => {
  render(<App />);
  const el = screen.getByText(/Dbank/i);
  expect(el).toBeInTheDocument();
});
