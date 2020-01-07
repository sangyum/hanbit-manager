import React from 'react';
import MokjangList from '../mokjangList/mokjangList';

export default {
  title: 'Mokjang List',
};

const mokjangList = [
  {
    name: 'Grace',
    leader: {
      name: 'Sang Yum',
    },
  },
  {
    name: 'Grace2',
    leader: {
      name: 'Sang Yum2',
    },
  },
];

export const defaultRender = () => <MokjangList mokjangList={mokjangList} />;
