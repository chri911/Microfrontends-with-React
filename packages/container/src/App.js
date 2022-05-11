import { createGenerateClassName, StylesProvider } from '@material-ui/core';
import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import ProgressBar from './components/ProgressBar';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));

const generateClassname = createGenerateClassName({
  productionPrefix: 'co'
});

export const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <StylesProvider generateClassName={generateClassname}>
      <BrowserRouter>
        <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
        <Suspense fallback={<ProgressBar/>} >
          <Switch>
            <Route path="/auth">
              <AuthLazy onSignIn={() => setIsSignedIn(true)} />
            </Route>
            <Route path="/" >
              <MarketingLazy />
            </Route>
          </Switch> 
        </Suspense>
        
      </BrowserRouter>
    </StylesProvider>
  )
}