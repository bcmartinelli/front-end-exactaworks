import { render, screen } from '@testing-library/react';
import ProfileList from './ProfileList';

test('renders learn react link', () => {
  render(<ProfileList />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
