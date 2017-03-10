import React, {Component} from 'react';
import {IconButton, Menu, MenuItem} from 'react-mdl';

export default class Settings extends Component {
  render() {
    return (
      <div style={{
        position: 'relative'
      }}>
        <IconButton name="more_vert" id="demo-menu-lower-right"/>
        <Menu target="demo-menu-lower-right" align="right">
          <MenuItem>Regulamento</MenuItem>
          <MenuItem>
            <a href="https://github.com/Alberto19">GitHub</a>
          </MenuItem>
          <MenuItem>About</MenuItem>
        </Menu>
      </div>
    );
  };
};