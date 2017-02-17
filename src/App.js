import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content, Cell} from 'react-mdl';
// import SideBar from './components/sidebar';
// import Search from './components/search';


export default class App extends Component {

 render() {
    return (
<div>
    <Layout fixedHeader>
        <Header title={<span><span style={{ color: '#ddd' }}>Area / </span><strong>The Title</strong></span>}>
            <Navigation>
                <a href="">Link</a>
                <a href="">Link</a>
                <a href="">Link</a>
                <a href="">Link</a>
            </Navigation>
        </Header>
        <Cell hideDesktop={true}>
        <Drawer title="Title" >
            <Navigation>
                <a href="">Link</a>
                <a href="">Link</a>
                <a href="">Link</a>
                <a href="">Link</a>
            </Navigation>
        </Drawer>
        </Cell>
        <Content />
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
