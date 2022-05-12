import Input from '../Input-container/Index'
import { render, screen } from '@testing-library/react';


it("renders without crashing", () => {
    render(<Input />);
  });

test('check if Contact Length text renders', () => {
    const {container, getByText} = render(<Input />);
    expect(getByText('Contact Length')).toBeInTheDocument();
  });

  