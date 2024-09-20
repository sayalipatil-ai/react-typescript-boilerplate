
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('App', () => {
  it('should render the app', () => {
    render(<App />);
    // Use screen.getByText to query elements
    // Example:
    // expect(screen.getByText('Learn React')).toBeInTheDocument();
  });
});