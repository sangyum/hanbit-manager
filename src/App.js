import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import apolloClient from './apolloClient';
import MokjangList from './mokjangList';
import './App.css';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <div className="App">
        <header className="App-header">
          <p>Hanbit Manager Coming Soon!</p>
        </header>
        <MokjangList />
      </div>
    </ApolloProvider>
  );
}

export default App;
