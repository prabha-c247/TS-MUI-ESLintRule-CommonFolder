import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './components/Header';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
test('navbar has title', () => {
  render(<Header />);
  const linkElement = screen.getByText(/CRUD/i);
  expect(linkElement).toBeInTheDocument();
});
