import React from 'react';
import List from '@material-ui/core/List';
import Mokjang from './mokjang';

const MokjangList = ({ mokjangList }) => (
  <List>
    {
        mokjangList.map(({ id, name, leader }) => <Mokjang key={id} name={name} leader={leader} />)
    }
  </List>
);

export default MokjangList;
