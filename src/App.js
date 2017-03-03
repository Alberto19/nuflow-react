import React, { Component } from 'react';
import { Layout, Header, Navigation, Content} from 'react-mdl';
import {Link} from 'react-router';
import SideBar from './components/Sidebar';
import Settings from './components/Settings';
import Search from './components/Search';


export default class App extends Component {

    constructor(){
         super();
        this.state={
            login: false
        }
    };
    componentWillMount(){
        if(localStorage.getItem('token') !== null){
            this.setState({login:true});
            this.context.router.push('/Feed');
        }else{
             this.context.router.push('/login');
        }
    }
 
 render() {
    return (
        <div>
            <Layout fixedHeader>
                <Header title={<span><strong>Nuflow</strong></span>}>
                    <Navigation>
                <Search/>
                        <Link to="/login">login</Link>
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