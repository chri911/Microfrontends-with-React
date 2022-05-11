import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { createGenerateClassName, StylesProvider } from '@material-ui/core';
import Signin from './components/Signin';
import Signup from './components/Signup';

const generateClassname = createGenerateClassName({
  productionPrefix: 'au'
});

export const App = ({ history, onSignIn }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassname}>
        <Router history={ history }>
          <Switch>
            <Route path="/auth/signin">
              <Signin onSignIn={onSignIn}/>
            </Route>
            <Route path="/auth/signup">
              <Signup onSignIn={onSignIn} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  )
}