import React,{Component} from 'react';
import PubSub from 'pubsub-js';

export default class Logout extends Component{
	render(){
        localStorage.removeItem('token');
        this.context.router.push('/login');
        PubSub.publish('logout');
        return(
            <p>Saindo</p>
        );
	}
}

    Logout.contextTypes ={
        router: React.PropTypes.object.isRequired
    }