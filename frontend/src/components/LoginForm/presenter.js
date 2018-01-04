import React from "react";
import PropTypes from "prop-types";
import FacebookLogin from "react-facebook-login";
import formStyles from "shared/formStyles.scss";

const LoginForm = props => (
  <div className={formStyles.formComponent}>
    <form className={formStyles.form} onSubmit={props.handleSubmit}>
      <input
        className={formStyles.textInput}
        type="text"
        placeholder="Username"
        value={props.usernameValue}
        onChange={props.handleInputChange}
        name="username"
      />
      <input
        className={formStyles.textInput}
        type="password"
        placeholder="Password"
        value={props.passwordValue}
        onChange={props.handleInputChange}        
        name="password"
      />
      <input className={formStyles.button} type="submit" value="Log in" />
    </form>
    <span className={formStyles.divider}>or</span>
    <FacebookLogin
      appId="509534036092768"
      autoLoad={true}
      fields="name,email,picture"
      cssClass={formStyles.facebookLink}
      callback={props.handleFacebookLogin}
      icon="fa-facebook-official"
    />
    <span className={formStyles.forgotLink}>Forgot password?</span>
  </div>
);

LoginForm.propTypes = {
  usernameValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleFacebookLogin: PropTypes.func.isRequired,
};

export default LoginForm;
