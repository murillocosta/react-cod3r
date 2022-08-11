/* eslint-disable import/no-anonymous-default-export */
import 'modules/bootstrap/dist/css/bootstrap.min.css';
import 'modules/font-awesome/css/font-awesome.min.css';

import React from 'react';
import Menu from '../templates/Menu/Menu';
import Routes from './Routes';

export default props => (
  <div className="container">
    <Menu />
    <Routes />
  </div>
);
