import React, {Component} from 'react';
import {Link} from 'react-router';

export default class User extends Component{

    constructor(props){
       super(props); 
       this.verifyAuth();
    }   
    verifyAuth(){
        let token = localStorage.getItem('token');
        if(token !== null){
			this.authenticate = true;
        }else{
	   		this.authenticate = false;
		}
    }

render(){
	return(
	<Link to="/login">login</Link>
	);
	
}

}