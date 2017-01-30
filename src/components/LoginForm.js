/* @RETURNS LoginForm Component
 * @AUTHOR Ian Sayre
 */


import React, { PropTypes, Component } from 'react';
import Button from './Button';


class LoginForm extends Component {
  static protTypes = {
    isValidated: PropTypes.bool,
    loginClick: PropTypes.func
  };

  static defaultProps = {
    loginClick: () => {}
  };

  constructor(props) {
    super(props);
  }

  loginClick(event) {
    this.props.loginClick(event);
  }

  render() {
    const loginLabel = () => {
      return (
        <span><i className="fa fa-google" aria-hidden="true"></i> LOG IN</span>
      );
    }

    return (
      <div className="card marg-t-xl pad-md">
        <div className="login-instructions marg-t-lg">
          Use your AdColony email ID to log in.
        </div>
        <Button className="marg-t-lg" label={loginLabel()} onClick={this.loginClick.bind(this)}/>
      </div>
    );
  }
}

export default LoginForm;
