/*
 * ROUTER JS
 * @AUTHOR Ian Sayre 06/15/16
 */

import React from 'react';
import { Route, IndexRoute } from 'react-router'
import App from './components/App';
import LoginPage from './components/LoginPage';
import AdQuality from './components/AdQuality';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={AdQuality}/>
    <Route path="/" component={AdQuality}/>
    <Route path='/login' component={LoginPage}/>

    <Route path='*' component={NotFoundPage}/>
  </Route>
);
