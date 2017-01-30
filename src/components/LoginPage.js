import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthActions from '../actions/AuthActions';
import AuthParams from '../utils/GoogleAuthUtil';
import BSNavbar from '../Bootstrap/BSNavbar';
import Grid from './Layout/Grid';
import Row from './Layout/Row';
import Col from './Layout/Col';
import LoginForm from './LoginForm';

class LoginPage extends Component {
  static propTypes = {};
  static defaultProps = {};

  constructor(props) {
    super(props);
    // this.listenForVerification = this.listenForVerification.bind(this);
  }

  componentDidMount() {
   // this.listenForVerification();
  }

  loginClick() {
    location.assign('https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=' + AuthParams.redirectUri + '&prompt=consent&response_type=' + AuthParams.responseType + '&client_id=' + AuthParams.clientId + '&scope=' + AuthParams.scope);
  }

  render() {
    return (
      <div>
        <BSNavbar fixed={'top'} brandLink={'/'} brandSrc={'../images/ac-logo-white.png'} className="ad-nav">
          <h4 className="marg-l-md pad-t-sm">Ad Quality</h4>
        </BSNavbar>
        <Grid>
          <Row>
            <Col sm={6} md={6} lg={6} offsetSm={3} offsetMd={3} offsetLg={3}>
              <LoginForm loginClick={this.loginClick.bind(this)}/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default connect()(LoginPage);
