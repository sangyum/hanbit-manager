import React from 'react';
import {
  Link,
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import MokjangList from '../mokjangList';

const Admin = () => {
// The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  const { path, url } = useRouteMatch();

  return (
    <>
      <h2>Admin Functions</h2>
      <ul>
        <li>
          <Link to={`${url}/mokjangs`}>Mokjang List</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/mokjangs`}>
          <MokjangList />
        </Route>
      </Switch>
    </>

  );
};

export default Admin;
