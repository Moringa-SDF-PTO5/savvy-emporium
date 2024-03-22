import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from './auth';
const PrivateRoute = ({ component: Component, roles, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          roles.includes(getUserRole()) ? (
            <Component {...props} />
          ) : (
            
            <Redirect to="/unauthorized" />
          )
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
