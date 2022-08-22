import '../common/template/dependencies';

import React from 'react';

import Header from '../common/template/Header/Header';
import Sidebar from '../common/template/Sidebar/Sidebar';
import Footer from '../common/template/Footer/Footer';
import Routes from './routes/routes';

export default props => (
  <div className="wrapper">
    <Header />
    <Sidebar />
    <div className="content-wrapper">
      <Routes />
    </div>
    <Footer />
  </div>
);
