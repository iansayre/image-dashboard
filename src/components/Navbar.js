/* NAVBAR COMPONENT
 * @AUTHOR Ian Sayre 06/23/16
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import HelpModalActions from '../actions/HelpModalActions';
import apiUtil from '../utils/apiUtil';
import BSNavbar from '../Bootstrap/BSNavbar';
import BSDropdown from '../Bootstrap/BSDropdown';
import BSDropdownButton from '../Bootstrap/BSDropdownButton';
import Button from './Button';

class Navbar extends Component {
  static propTypes = {};
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    setTimeout(this.logout, 86400000) // this is iffy, but it should work!
  }

  dropDownItemClick(url) {
    const { dispatch } = this.props;
    dispatch(HelpModalActions.showHelpModal(url));
  }

  logout() {
    const audience = localStorage.getItem('audience');
    const user = localStorage.getItem('user');
    const verification = localStorage.getItem('isVerified');

    console.log('cookie cookie ' + audience + ' ' + user + ' ' + verification);

    if (audience && user && verification) {

      localStorage.clear();
      location.assign('/');
    }
  }

  render() {
    return(
      <BSNavbar fixed={'top'} brandLink={'/'} brandSrc={'./images/ac-logo-white.png'} className="ad-nav">
        <h4 className="pad-t-sm">Ad Quality</h4>
        <ul className="nav navbar-nav header-nav-items">
          <li className="nav-item">
            <BSDropdown label="Help">
              <BSDropdownButton label="Overview" onClick={this.dropDownItemClick.bind(this, apiUtil.HELP_PATH + 'Overview.htm')}/>
              <BSDropdownButton label="Viewing Bad Ads" onClick={this.dropDownItemClick.bind(this, apiUtil.HELP_PATH + 'ViewingBadAds.htm')}/>
            </BSDropdown>
          </li>
          <li className="nav-item">
            <Button block={false} className="logout-btn" label='Logout' onClick={this.logout}/>
          </li>
        </ul>
      </BSNavbar>
    );
  }
}

export default connect()(Navbar);
