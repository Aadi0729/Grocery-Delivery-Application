import React from "react";
import { connect } from "react-redux";
import { logout } from "../../../store/actions/authActions";
import styles from "./SignOut.module.css";

import PropTypes from "prop-types";

// Function to log out
const SignOut = ({ logout }) => (
  <li className={styles.customHover} onClick={logout}>
    Sign Out
  </li>
);

SignOut.propTypes = {
  logout: PropTypes.func.isRequired
};

export default connect(
  null,
  { logout }
)(SignOut);
