/* eslint-disable import/no-anonymous-default-export */
import './Main.css';
import React from 'react';

import Header from '../Header/Header';

export default props => (
  <>
    <Header {...props} />
    <main className="content">Conteúdo</main>
  </>
);
