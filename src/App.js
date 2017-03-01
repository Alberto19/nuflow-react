import React, { Component } from 'react';
import { Layout, Header, Navigation, Content} from 'react-mdl';
import {Link} from 'react-router';
import SideBar from './components/Sidebar';
import Settings from './components/Settings';
import Search from './components/Search';


export default class App extends Component {
 
 render() {
    return (
        <div>
            <Layout fixedHeader>
                <Header title={<span><strong><Link to="/Feed">Nuflow</Link></strong></span>}>
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
