import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";

const CommentBox = (props, context) => (
  <form className={styles.form}>
    <textarea
      className={styles.textarea}
      placeholder={context.t("Add a comment...")}
    />
  </form>
);

CommentBox.contextTypes = {
  t: PropTypes.func.isRequired
};

export default CommentBox;
