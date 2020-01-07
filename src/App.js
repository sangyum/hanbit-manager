import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import apolloClient from './apolloClient';
import './App.css';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <div className="App">
        <header className="App-header">
          <p>Hanbit Manager Coming Soon!</p>
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
