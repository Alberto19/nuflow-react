import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import 'material-design-icons/iconfont/material-icons.css';
import 'react-mdl/extra/css/material.blue-indigo.min.css';
import './index.css';
import 'react-mdl/extra/material.min.js';

render(
  <Router routes={routes} history={browserHistory}/>, document.getElementById('root'));