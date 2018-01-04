import React from "react";
import Ionicon from "react-ionicons";
import formStyles from "shared/formStyles.scss";

const SignupForm = props => (
  <div className={formStyles.formComponent}>
    <h3 className={formStyles.signupHeader}>
      Sign up to see photos and<br />videos from your friends.
    </h3>
    <button className={formStyles.facebookButton}>
      <Ionicon icon="logo-facebook" fontSize="20px" color="white" />
      Log in with Facebook
    </button>
    <span className={formStyles.divider}>or</span>
    <form className={formStyles.form}>
      <input
        className={formStyles.textInput}
        type="email"
        placeholder="Email"
      />
      <input
        className={formStyles.textInput}
        type="text"
        placeholder="Full Name"
      />
      <input
        className={formStyles.textInput}
        type="username"
        placeholder="Username"
      />
      <input
        className={formStyles.textInput}
        type="password"
        placeholder="Password"
      />
      <input
        className={formStyles.button}
        type="submit"
        placeholder="Sign up"
      />
    </form>
    <p className={formStyles.terms}>
      By signing up, you agree to our<br />
      <span>Terms & Privacy Policy</span>.
    </p>
  </div>
);

export default SignupForm;
