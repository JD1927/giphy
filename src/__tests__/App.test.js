import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

import '__tests__/mocks/IntersectionObserver.mock';

describe('App', () => {

  test('Should render without crashing', () => {
    // Arrange
    render(<App />);
    // Act
    const linkElement = screen.getByText(/Most popular gifs/i);
    // Assert
    expect(linkElement).toBeInTheDocument();
  });
});
