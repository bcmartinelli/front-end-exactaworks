import { render, screen } from '@testing-library/react';
import ConfirmDialog from './ConfirmDialog';

test('renders learn react link', () => {
  render(<ConfirmDialog />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
