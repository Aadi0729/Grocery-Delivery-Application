import React from "react";
import { Link } from "react-router-dom";
import SignOut from "../Auth/SignOut";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const AuthNav = ({ user }) => (
  <>
    <li>{user && `Welcome ${user.name}`}</li>
    <SignOut />
  </>
);

const NonAuthNav = () => (
  <>
    <li>
      <Link to="/signup">Sign Up</Link>
    </li>
    <li>
      <Link to="/signin">Sign In</Link>
    </li>
  </>
);

const Navigation = ({ auth }) => {
  const { token, user } = auth;

  return (
    <>
      <nav>
        <div className="nav-wrapper green accent-4">
          <div className="container">
            <Link to="/" className="brand-logo">
              Grocerme
            </Link>
            <ul className="right hide-on-med-and-down">
              {token ? <AuthNav user={user} /> : <NonAuthNav />}
              <li>
                <a href="https://github.com/SNVtahoe">GitHub</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

Navigation.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = ({ auth }) => ({
  auth
});

export default connect(mapStateToProps)(Navigation);
