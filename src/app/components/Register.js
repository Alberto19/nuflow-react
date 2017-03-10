import React, {Component} from 'react';
// import {Card, CardTitle, CardText, CardActions, CardMenu, IconButton, Button}
// from 'react-mdl';
import {Grid, Cell, Textfield, Button} from 'react-mdl';
import axios from 'axios';

// import face from '../style/'
export default class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.RegisterUser = this
      .RegisterUser
      .bind(this);
  };

  inputChange(nome, e) {
    this.setState({[nome]: e.target.value});
  };

  RegisterUser(e) {
    e.preventDefault();
    // axios.defaults.baseURL = '';
    let user = {
      login: this.state.email,
      password: this.state.password
    };

    axios
      .post('/user/singUp', user)
      .then((result) => {
        localStorage.setItem('token', result.data.token);
        this
          .context
          .router
          .push('/Feed');
      })
      .catch(() => {
        alert('Erro ao cadastrar usuario');
      });
  };

  render() {
    return (
      <Grid className="section--center">
        <Cell offsetDesktop={3} col={6} offsetTablet={1} tablet={6} phone={5}>
          <div className="mdl-shadow--2dp formLogin ">
            <form
              onSubmit={this.RegisterUser}
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
                  <Button raised colored type="submit">SingUp</Button>
                </Cell>
              </Grid>
            </form>
          </div>
        </Cell>
      </Grid>
    );
  };
};

Register.contextTypes = {
  router: React.PropTypes.object.isRequired
};