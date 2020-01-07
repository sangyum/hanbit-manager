import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';

const Mokjang = ({ name, leader }) => (
  <ListItemText primary={name} secondary={leader.name} />
);

export default Mokjang;
