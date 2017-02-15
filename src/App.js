import React, { Component } from 'react';
import SideBar from './sidebar';

export default class App extends Component {

 render() {
    return (
      <div>
      <header className="header">
        <SideBar/>
      </header>
      </div>
    );
  }
}

