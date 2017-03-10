import React, {Component} from 'react';
import {Grid, Cell, Textfield, Button} from 'react-mdl';
import {Link} from 'react-router';
import PubSub from 'pubsub-js';
import axios from 'axios';
import FacebookLogin from 'react-facebook-login';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.login = this
      .login
      .bind(this);
    this.facebook = this
      .facebook
      .bind(this);
  }

  inputChange(nome, e) {
    this.setState({[nome]: e.target.value});
  }

  login(e) {
    e.preventDefault();

    var user = {
      login: this.state.email,
      password: this.state.password
    };
    axios
      .post('/user/singIn', user)
      .then((result) => {
        localStorage.setItem('token', result.data.token);
        PubSub.publish('login');
        this
          .context
          .router
          .push('/Feed');

      })
      .catch((err) => {
        alert(err);
      });
  }

  facebook(response) {
    localStorage.setItem('token', response.accessToken);
    PubSub.publish('login');
    this
      .context
      .router
      .push('/Feed');
    console.log(response);
  }
  render() {
    return (
      <Grid className="section--center">
        <Cell offsetDesktop={3} col={6} offsetTablet={1} tablet={6} phone={5}>
          <div className="mdl-shadow--2dp formLogin ">
            <form
              onSubmit={this.login}
              method="post"
              style={{
              paddingTop: "30px"
            }}>
              <Grid >
                <Cell offsetDesktop={3} col={6} offsetTablet={1} tablet={7} phone={6}>
                  <Textfield
                    type="email"
                    onChange={this
                    .inputChange
                    .bind(this, 'email')}
                    label="exemplo@exemplo.com"/>
                  <Textfield
                    type="password"
                    onChange={this
                    .inputChange
                    .bind(this, 'password')}
                    label="Password"/>
                </Cell>
              </Grid>
              <Grid>
                <Cell
                  offsetDesktop={4}
                  col={7}
                  offsetTablet={3}
                  tablet={7}
                  offsetPhone={1}
                  phone={5}>
                  <Button raised colored type="submit">SingIn</Button>
                  <FacebookLogin
                    appId="780090875680638"
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={this.facebook}
                    cssClass="my-facebook-button-class"
                    icon="fa-facebook-square"/>
                  <div>
                    <span>Ainda não é usuario?</span>
                    <Link to="/register">SingUp in Nuflow</Link>
                  </div>
                </Cell>
              </Grid>
            </form>
          </div>
        </Cell>
      </Grid>
    );
  }

}
Login.contextTypes = {
  router: React.PropTypes.object.isRequired
}