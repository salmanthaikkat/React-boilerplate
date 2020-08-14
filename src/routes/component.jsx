import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

export default function AppRouter() {
  return (
    <Router>
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/" component={Dashboard} />
    </Router>
  )
}