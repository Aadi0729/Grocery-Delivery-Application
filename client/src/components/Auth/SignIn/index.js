import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../../store/actions/authActions";
import * as ROUTES from "../../../routes";
import { Redirect } from "react-router-dom";

const INITIAL_STATE = {
  email: "",
  password: "",
  msg: null
};

class SignIn extends React.Component {
  state = { ...INITIAL_STATE };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      // Check for login error
      if (error.id === "LOGIN_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }

    // If authenticated, forward user to homepage
    if (isAuthenticated) {
      // Reset state
      this.setState({ ...INITIAL_STATE });
      // Send user to dashboard
      this.props.history.push(ROUTES.HOME);
    }
  }

  onChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = event => {
    event.preventDefault();

    // Grabbing state values to login
    const { email, password } = this.state;

    // Attempt to login
    this.props.login({ email, password });
  };

  render() {
    const { email, password, msg } = this.state;
    const { token } = this.props;

    if (token) {
      return <Redirect to="/" />;
    }

    return (
      <div style={{ marginTop: "3rem" }} className="row">
        <div className="col s12 m6" style={{ transform: "translateX(50%)" }}>
          <div className="card">
            <form onSubmit={this.onSubmit}>
              <div className="card-content">
                <span className="card-title center-align green-text text-accent-4">
                  Sign In
                </span>
                <div className="row">
                  <div className="input-field col s12">
                    <span className="helper-text">Email Address</span>
                    <input
                      name="email"
                      type="email"
                      onChange={this.onChange}
                      value={email}
                      placeholder="janedoe@gmail.com"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <span className="helper-text">Password</span>
                    <input
                      name="password"
                      type="password"
                      onChange={this.onChange}
                      value={password}
                      placeholder="Password"
                    />
                  </div>
                </div>
              </div>
              <div className="card-action right-align">
                <button
                  type="submit"
                  className="btn-small waves-effect waves-light green accent-4"
                >
                  Sign in
                </button>
              </div>
              {msg && (
                <p
                  style={{ padding: "1rem" }}
                  className="center-align red-text text-darken-1 red lighten-5"
                >
                  {msg}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error.error,
  token: state.auth.token
});

const mapDispatchToProps = {
  login
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
