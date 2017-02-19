import React, {Component} from 'react';
import {Card, CardTitle, CardText, CardActions, CardMenu, IconButton, Button} from 'react-mdl';

export default class Login extends Component{

    constructor(){
        super();
        this.login = this.login.bind(this);
    }

    login(e){
        e.preventDefault();
    }

	render(){
		return(
           <div className="formLogin">
                <form onSubmit={this.enviaForm} method="post">
                    
                    <button onClick={this.login} type="submit">Gravar</button>
                </form>
            </div>
		);
	}
}