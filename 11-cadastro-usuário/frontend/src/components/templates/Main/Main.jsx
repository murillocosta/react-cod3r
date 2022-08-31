/* eslint-disable import/no-anonymous-default-export */
import './Main.css';
import React from 'react';

import Header from '../Header/Header';

export default props => (
  <>
    <Header {...props} />
    <main className="content container-fluid">
      <div className="p-3 mt-3">{props.children}</div>
    </main>
  </>
);
