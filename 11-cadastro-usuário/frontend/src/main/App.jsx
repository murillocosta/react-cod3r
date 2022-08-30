/* eslint-disable import/no-anonymous-default-export */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './App.css';

import React from 'react';

import Logo from '../components/templates/Logo/Logo';
import Nav from '../components/templates/Nav/Nav';
import Main from '../components/templates/Main/Main';
import Footer from '../components/templates/Footer/Footer';

export default props => (
  <div className="app">
    <Logo />
    <Nav />
    <Main icon="home" title="Início" subtitle="Projeto Cadastro com React" />
    <Footer />
  </div>
);
