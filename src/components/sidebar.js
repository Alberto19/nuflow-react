import React, {Component} from 'react';
import {Drawer, Navigation} from 'react-mdl'
import {Link} from 'react-router';

export default class SideBar extends Component{
    render() {
        return (
        <Drawer className="mdl-layout--small-screen-only">
            <Navigation>
                <Link to="">legal</Link>
                <Link to="">tem</Link>
            </Navigation>
            
        </Drawer>
        );
    }
}