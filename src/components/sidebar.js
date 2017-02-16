import React, {Component} from 'react';

export default class SideBar extends Component{
     constructor(){
        super();
        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }

    openNav(e) {
        e.preventDefault();
        this.refs.mySidenav.style.width = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }

    closeNav(e) {
        e.preventDefault();
        this.refs.mySidenav.style.width = "0";
        document.body.style.backgroundColor = "white";
    }
    render() {
        return (
        <div className="buttonSide ">
        <button onClick={this.openNav} type="button" className="ant-btn ant-btn-primary ant-btn-icon-only"><i className="material-icons ">list</i></button>

            <div ref="mySidenav" className="sidenav">
                <a href="#" className="closebtn" onClick={this.closeNav}>&times;</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>
        </div>
        );
    }
}