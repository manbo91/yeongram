import React from "react";
import Ionicon from "react-ionicons";
import formStyles from "shared/formStyles.scss";

const LoginForm = props => (
  <div className={formStyles.formComponent}>
    <form className={formStyles.form}>
      <input className={formStyles.textInput} type="text" placeholder="Username" />
      <input
        className={formStyles.textInput}
        type="password"
        placeholder="Password"
      />
      <input className={formStyles.button} type="submit" value="Log in" />
    </form>
    <span className={formStyles.divider}>or</span>
    <span className={formStyles.facebookLink}>
      <Ionicon icon="logo-facebook" fontSize="20px" color="#385185" />
      Log in with Facebook
    </span>
    <span className={formStyles.forgotLink}>Forgot password?</span>
  </div>
);

export default LoginForm;
