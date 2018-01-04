import React, { Component } from "react";
import PropTypes from 'prop-types';
import SignupForm from './presenter';

class Container extends Component {
  state = {
    email: '',
    fullName: '',
    username: '',
    password: '',
  };
  static propTypes = {
    facebookLogin: PropTypes.func.isRequired
  };
  render() {
    const {
      email,
      fullName,
      username,
      password,
    } = this.state;
    return (
      <SignupForm
        handleFacebookLogin={this._handleFacebookLogin}
        handleInputChange={this._handleInputChange}
        handleSumbit={this._handleSubmit}
        emailValue={email}
        fullNameValue={fullName}
        usernameValue={username}
        passwordValue={password}

      />
    );
  }
  
  _handleInputChange = event => {
    const { target: { value, name } } = event;
    this.setState({
      [name]: value
    });
  }

  _handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  }

  _handleFacebookLogin = response => {
    const { facebookLogin } = this.props;
    facebookLogin(response.accessToken);
  }
}

export default Container;
