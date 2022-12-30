import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

import '__tests__/mocks/IntersectionObserver.mock';
describe('Home', () => {

  test('Should HomePage work as expected', () => {
    // Arrange
    render(<App />);
    const linkElement = screen.getByText(/There are not gifs/i);
    // Act
    // Assert
    expect(linkElement).toBeInTheDocument();
  });
  test('Should render form', async () => {
    render(<App />);
    const input = await screen.findByRole('textbox');
    const button = await screen.findByRole('button');

    fireEvent.change(input, { target: { value: 'Matrix' }});
    fireEvent.click(button);

    const title = await screen.findByText('Results for: Matrix');

    expect(title).toBeVisible();
  });
});
