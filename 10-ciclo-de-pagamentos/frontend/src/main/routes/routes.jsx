import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Dashboard2 from '../../Dashboard2/Dashboard2';
import BillingCycle from '../../BillingCycle/BillingCycle';

export default props => (
  <Router history={hashHistory}>
    <Route path="/" component={Dashboard2} />
    <Route path="/billingCycles" component={BillingCycle} />
    <Redirect from="*" to="/" />
  </Router>
);
