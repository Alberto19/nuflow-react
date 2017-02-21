import React, { Component } from 'react';
import { Layout, Header, Navigation, Content} from 'react-mdl';
import {Link} from 'react-router';
import SideBar from './components/Sidebar';
import Settings from './components/Settings';
// import Search from './components/search';


export default class App extends Component {

 render() {
    return (
<div>
    <Layout fixedHeader>
        <Header title={<span><strong>Nuflow</strong></span>}>
            <Navigation>
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

      // <div className="container">
      // <header className="header row">
      //   <div className="col-xs-2">
      //     <SideBar/>
      //   </div>
      //     <div className="col-xs-6 col-lg-7  inputSearch">
      //     <Search/>
      //     </div>
      // </header>
      //   <div className="secondary-navbar row">
      //     <div className="secondary-navbar-inner col"></div>
      //   </div>
      // </div>
