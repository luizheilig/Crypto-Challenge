// src/components/Login.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';

describe('Login page test', () => {
    it('renders the Login component', () => {
        render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        );

    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const enterButton = screen.getByText('Enter');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(enterButton).toBeInTheDocument();
    });

    it('allows user input and submission', () => {
        render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        );

    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const enterButton = screen.getByText('Enter');

    fireEvent.change(emailInput, { target: { value: 'testuserm' } });
    fireEvent.change(passwordInput, { target: { value: 'pas' } });

    expect(emailInput.value).toBe('testuserm');
    expect(passwordInput.value).toBe('pas');

    expect(enterButton).toBeDisabled();

    fireEvent.change(emailInput, { target: { value: 'valid@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'validpassword' } });

    expect(enterButton).not.toBeDisabled();

    fireEvent.click(enterButton);
    });
});