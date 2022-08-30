import React from 'react';

import Header from '../common/template/Header/Header';
import Sidebar from '../common/template/Sidebar/Sidebar';
import Footer from '../common/template/Footer/Footer';
import Messages from '../common/msg/Messages';

export default props => (
  <div className="wrapper">
    <Header />
    <Sidebar />
    <div className="content-wrapper">{props.children}</div>
    <Footer />
    <Messages />
  </div>
);
