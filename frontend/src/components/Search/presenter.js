import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";

const Search = (props, context) => (
  <div className={styles.container}>
    tesa
  </div>
);

Search.contextTypes = {
  t: PropTypes.func.isRequired
};

export default Search;
