/* eslint-disable import/no-anonymous-default-export */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './App.css';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Logo from '../components/templates/Logo/Logo';
import Nav from '../components/templates/Nav/Nav';
import Routes from './Routes';
import Footer from '../components/templates/Footer/Footer';

export default props => (
  <BrowserRouter>
    <div className="app">
      <Logo />
      <Nav />
      <Routes />
      <Footer />
    </div>
  </BrowserRouter>
);
