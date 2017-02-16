import React, { Component } from 'react';
import SideBar from './components/sidebar';
import Search from './components/search';


export default class App extends Component {

 render() {
    return (
      <div className="container-fluid">
      <header className="header row">
        <div className="col-xs-2">
          <SideBar/>
        </div>
          <div className="col-xs-6 col-lg-7  inputSearch">
          <Search/>
          </div>
      </header>
        <div className="secondary-navbar row">
          <div className="secondary-navbar-inner col"></div>
        </div>
      </div>
    );
  }
}

