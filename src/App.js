import React, { Component } from 'react';
import { Layout, Header, Navigation, Content} from 'react-mdl';
import {Link} from 'react-router';
import SideBar from './components/Sidebar';
import Settings from './components/Settings';
import Search from './components/Search';
import PubSub from 'pubsub-js';
import axios from 'axios';


export default class App extends Component {

    constructor(){
         super();
        this.state={
            login: false
        }
        this.loginUser = this.loginUser.bind(this);

    axios.defaults.baseURL = 'https://nuflow.herokuapp.com';
    // axios.defaults.baseURL = 'http://localhost:3001';
    };

    componentWillMount(){
        if(localStorage.getItem('token') !== null){
            this.setState({login:true});
            this.context.router.push('/Feed');
        }else{
            this.setState({login:false});
             this.context.router.push('/');
        }
    }
    loginUser(){

        PubSub.subscribe('login', (tipoco)=>{
            this.setState({login:true});
        });
        PubSub.subscribe('logout', (tipoco)=>{
            this.setState({login:false});
        });

        if(this.state.login === false){
            return(
                 <Link to="/login">login</Link>
            );
        }else{
            return(
             <Link to="/logout">Logout</Link>
            )
        }
    }
 
 render() {
    return (
        <div>
            <Layout fixedHeader>
                <Header title={<span><strong>Nuflow</strong></span>}>
                    <Navigation>
                <Search/>
                        {this.loginUser()}
                    </Navigation>
                    <Settings/>
                </Header>
                <SideBar/>
                
                
                <Content>
                        {this.props.children}
                </Content>
            </Layout>
        </div>
    );
  }
}

    App.contextTypes ={
        router: React.PropTypes.object.isRequired
    }
