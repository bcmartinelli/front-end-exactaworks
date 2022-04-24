import { render, screen } from '@testing-library/react';
import ProfileList from './ProfileForm';

test('renders learn react link', () => {
  render(<ProfileList />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
