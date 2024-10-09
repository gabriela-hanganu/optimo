//generated with copilot
import React from 'react';
import { render } from '@testing-library/react';
import ErrorMessage from './error-mesage';

describe('ErrorMessage Component', () => {
    it('should render the error message', () => {
        const message = 'This is an error message';
        const { getByText } = render(<ErrorMessage message={message} />);
        expect(getByText(message)).toBeInTheDocument();
    });

    it('should have the correct class names', () => {
        const message = 'This is an error message';
        const { container } = render(<ErrorMessage message={message} />);
        const div = container.firstChild;
        expect(div).toHaveClass('text-red-500');
        expect(div).toHaveClass('text-sm');
        expect(div).toHaveClass('mt-2');
    });
});