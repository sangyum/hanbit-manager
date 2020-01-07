import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import MokjangList from './mokjangList';

const GET_MOKJANGS = gql`
  query getMokjangs {
    mokjangs {
      name
      leader {
          name
      }
    }
  }
`;

export default () => {
  const { loading, error, data } = useQuery(GET_MOKJANGS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <MokjangList mokjangList={data.mokjangs} />
  );
};
