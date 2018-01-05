import React from "react";
import PropTypes from "prop-types";
import FacebookLogin from "react-facebook-login";
import formStyles from "shared/formStyles.scss";

const SignupForm = (props, context) => (
  <div className={formStyles.formComponent}>
    <h3 className={formStyles.signupHeader}>
      Sign up to see photos and<br />videos from your friends.
    </h3>
    <FacebookLogin
      appId="509534036092768"
      autoLoad={false}
      fields="name,email,picture"
      cssClass={formStyles.facebookButton}
      callback={props.handleFacebookLogin}
      icon="fa-facebook-official"
    />
    <span className={formStyles.divider}>or</span>
    <form className={formStyles.form} onSubmit={props.handleSumbit}>
      <input
        className={formStyles.textInput}
        type="email"
        placeholder="Email"
        value={props.emailValue}
        onChange={props.handleInputChange}
        name="email"
      />
      <input
        className={formStyles.textInput}
        type="text"
        placeholder="Full Name"
        value={props.nameValue}
        onChange={props.handleInputChange}
        name="name"
      />
      <input
        className={formStyles.textInput}
        type="username"
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
      <input
        className={formStyles.button}
        type="submit"
        placeholder="Sign up"
        value="Sign up"
      />
    </form>
    <p className={formStyles.terms}>
      By signing up, you agree to our<br />
      <span>Terms & Privacy Policy</span>.
    </p>
  </div>
);

SignupForm.propTypes = {
  handleFacebookLogin: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSumbit: PropTypes.func.isRequired,
  emailValue: PropTypes.string.isRequired,
  nameValue: PropTypes.string.isRequired,
  usernameValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
}

export default SignupForm;
