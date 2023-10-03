// testing libraries
import { render, screen } from '@testing-library/react';
// component
import Button from './button';

describe('Button Example', () => {
  it('renders Button', () => {
    render(<Button>hola</Button>);

    expect(screen.getAllByText('hola'));
  });
});
