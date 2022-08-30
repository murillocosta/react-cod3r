import React from 'react';
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router';

import Dashboard from '../../Dashboard/Dashboard';
import BillingCycle from '../../BillingCycle/BillingCycle';
import AuthOrApp from '../authOrApp/AuthOrApp';

export default props => (
  <Router history={hashHistory}>
    <Route path="/" component={AuthOrApp}>
      <IndexRoute component={Dashboard}></IndexRoute>
      <Route path="billingCycles" component={BillingCycle} />
    </Route>

    <Redirect from="*" to="/" />
  </Router>
);
