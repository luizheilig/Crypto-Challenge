import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

describe('renders the correct content in components', () => {
  it('render Header with correct buttons', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  
    const cryptosLink = screen.getByText(/Cryptos/i);
    const walletLink = screen.getByText(/My Wallet/i);
    const logoutLink = screen.getByText(/Logout/i);
  
    expect(cryptosLink).toBeInTheDocument();
    expect(walletLink).toBeInTheDocument();
    expect(logoutLink).toBeInTheDocument();
  })

  it('render footer with correct content', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
  
    const footerElement = screen.getByText(/Crypto Challenge 2024/i);
    expect(footerElement).toBeInTheDocument();
  })
});