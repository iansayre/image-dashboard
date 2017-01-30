import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import AdQuality from './components/AdQuality';

import './utils/loadPlugins.js';

import '!style!css!sass!./styles/App.scss';

// Render the main component into the dom
ReactDOM.render(<AdQuality />, document.getElementById('app'));
