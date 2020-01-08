import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import apolloClient from './apolloClient';
import Home from './home';
import Admin from './admin';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
