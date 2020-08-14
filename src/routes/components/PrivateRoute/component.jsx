import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({
  component: Component, ...rest
}) {
  let isAuthenticated = false;
  return (
    <Route 
      {...rest}
      render={(props) => 
        isAuthenticated
        ? <Component {...props}/>
        : <Redirect to="/login" />
      }
    />
  )
}