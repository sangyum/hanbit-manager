import ApolloClient from 'apollo-boost';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';

const apolloClient = new ApolloClient({
  // eslint-disable-next-line prefer-template
  uri: `${BACKEND_URL}/graphql`,
});

export default apolloClient;
