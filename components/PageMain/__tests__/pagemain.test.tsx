import { render, screen } from '@testing-library/react';
import Home from '../../../pages/index';
import '@testing-library/jest-dom';

describe('Home Page', () => {
  it('render home page', () => {
    render(<Home />)
    expect(screen.getByTestId('page-home')).toBeInTheDocument()
  })
});