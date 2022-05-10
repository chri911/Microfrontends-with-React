import { createGenerateClassName, StylesProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import { MarketingApp } from './components/MarketingApp';

const generateClassname = createGenerateClassName({
  productionPrefix: 'co'
});

export const App = () => {
  return (
    <StylesProvider generateClassName={generateClassname}>
      <BrowserRouter>
        <Header />
        <MarketingApp />
      </BrowserRouter>
    </StylesProvider>
  )
}