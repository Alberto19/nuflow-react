import React, {Component} from 'react';
import {IconButton, Menu, MenuItem} from 'react-mdl';

export default class Settings  extends Component{
	render(){
		return(
			<div style={{position: 'relative'}}>
				<IconButton name="more_vert" id="demo-menu-lower-right" />
				<Menu target="demo-menu-lower-right" align="right">
					<MenuItem>Some Action</MenuItem>
					<MenuItem>Another Action</MenuItem>
					<MenuItem disabled>Disabled Action</MenuItem>
					<MenuItem>Yet Another Action</MenuItem>
				</Menu>
			</div>
		);
	}
}