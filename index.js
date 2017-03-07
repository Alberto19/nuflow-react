import React from 'react'
import { render } from 'react-dom'
import 'material-design-icons/iconfont/material-icons.css';
import './src/style/app.css';
import 'react-mdl/extra/css/material.blue-indigo.min.css';
import 'react-mdl/extra/material.min.js';
import { Router, browserHistory } from 'react-router'
import routes from './src/routes';

render(
  <Router routes={routes} history={browserHistory}/>,
  document.getElementById('root')
)