import ApolloClient from 'apollo-boost';

const apolloClient = new ApolloClient({
  // eslint-disable-next-line prefer-template
  uri: process.env.REACT_APP_BACKEND_URL + '/graphql',
});

export default apolloClient;
