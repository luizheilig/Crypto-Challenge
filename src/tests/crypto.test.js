// src/pages/CryptoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import CryptoList from '../pages/CryptoList';


test('renders CryptoList component', () => {
  render(
    <BrowserRouter>
      <CryptoList />
    </BrowserRouter>
  );
  const containerElement = screen.getByTestId('crypto-list-container');
  expect(containerElement).toBeInTheDocument();
});
