import React from "react";
import Ionicon from "react-ionicons";
import styles from "./styles.scss";

export const LoginForm = props => (
  <div className={styles.formComponent}>
    <form className={styles.form}>
      <input className={styles.textInput} type="text" placeholder="Username" />
      <input
        className={styles.textInput}
        type="password"
        placeholder="Password"
      />
      <input className={styles.button} type="submit" value="Log in" />
    </form>
    <span className={styles.divider}>or</span>
    <span className={styles.facebookLink}>
      <Ionicon icon="logo-facebook" fontSize="20px" color="#385185" />
      Log in with Facebook
    </span>
    <span className={styles.forgotLink}>Forgot password?</span>
  </div>
);

export const SignupForm = props => (
  <div className={styles.formComponent}>
    <h3 className={styles.signupHeader}>
      Sign up to see photos and<br />videos from your friends.
    </h3>
    <button className={styles.facebookButton}>
      <Ionicon icon="logo-facebook" fontSize="20px" color="white" />
      Log in with Facebook
    </button>
    <span className={styles.divider}>or</span>
    <form className={styles.form}>
      <input className={styles.textInput} type="email" placeholder="Email" />
      <input className={styles.textInput} type="text" placeholder="Full Name" />
      <input
        className={styles.textInput}
        type="username"
        placeholder="Username"
      />
      <input
        className={styles.textInput}
        type="password"
        placeholder="Password"
      />
      <input className={styles.button} type="submit" placeholder="Sign up" />
    </form>
    <p className={styles.terms}>
      By signing up, you agree to our<br />
      <span>Terms & Privacy Policy</span>.
    </p>
  </div>
);
