import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './app/App';
import Home from './app/components/Home';
import Login from './app/components/Login';
import Register from './app/components/Register';
import Feed from './app/components/Feed';
import Logout from './app/components/Logout';

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/login" component={Login}/>
    <Route path="/register" component={Register}/>
    <Route path="/Feed" component={Feed}/>
    <Route path="/logout" component={Logout}/>
  </Route>
);
