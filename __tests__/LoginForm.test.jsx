// /C:/Users/g.hanganu/Documents/learning/optimo2/app/ui/login-form.test.tsx
// test generated with COPILOT

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginForm from '../app/ui/login-form';

describe('LoginForm', () => {
    test('renders LoginForm component', () => {
        render(<LoginForm onSubmit={jest.fn()} />);
        expect(screen.getByText('Please log in to continue.')).toBeInTheDocument();
    });


    test('renders email input field', () => {
        render(<LoginForm onSubmit={jest.fn()} />);
        const emailInput = screen.getByLabelText('Email');
        expect(emailInput).toBeInTheDocument();
        expect(emailInput).toHaveAttribute('type', 'email');
        expect(emailInput).toHaveAttribute('placeholder', 'Enter your email address');
    });

    test('renders password input field', () => {
        render(<LoginForm onSubmit={jest.fn()} />);
        const passwordInput = screen.getByLabelText('Password');
        expect(passwordInput).toBeInTheDocument();
        expect(passwordInput).toHaveAttribute('type', 'password');
        expect(passwordInput).toHaveAttribute('placeholder', 'Enter password');
    });

    test('shows validation errors when fields are empty', () => {
        render(<LoginForm onSubmit={jest.fn()} />);
        const loginButton = screen.getByText('Log in');
        console.log(loginButton);
        fireEvent.click(loginButton);
        expect(screen.getByText('Please fill out this field.')).toBeInTheDocument();
    });

    test('shows validation error for invalid email', () => {
        render(<LoginForm onSubmit={jest.fn()} />);
        const emailInput = screen.getByPlaceholderText('Enter your email address');
        const loginButton = screen.getByRole('button', { name: /log in/i });

        fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
        fireEvent.click(loginButton);

        expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument();
    });

    test('shows validation error for short password', () => {
        render(<LoginForm onSubmit={jest.fn()} />);
        const passwordInput = screen.getByPlaceholderText('Enter password');
        const loginButton = screen.getByRole('button', { name: /log in/i });

        fireEvent.change(passwordInput, { target: { value: '123' } });
        fireEvent.click(loginButton);

        expect(screen.getByText('Password must be at least 6 characters long.')).toBeInTheDocument();
    });

    test('submits the form with valid inputs', () => {
        render(<LoginForm onSubmit={jest.fn()} />);
        const emailInput = screen.getByLabelText('Email');
        const passwordInput = screen.getByLabelText('Password');
        const loginButton = screen.getByText('Log in');

        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password123' } });
        fireEvent.click(loginButton);

        // Add assertions to check form submission behavior
    });

    test('renders login button', () => {
        render(<LoginForm onSubmit={jest.fn()} />);
        const loginButton = screen.getByText('Log in');
        expect(loginButton).toBeInTheDocument();
        expect(loginButton).toBeEnabled();
    });
});