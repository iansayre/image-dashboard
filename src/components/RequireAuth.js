import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
  class RequireAuth extends Component {
    static contextTypes = {
      router: PropTypes.object
    }

    componentWillMount() {
      if (!this.props.isValidated) {
        this.context.router.push('/login');
      }
    }

    componentWillUpdate(nextProps) {
      if(!nextProps.isValidated) {
        this.context.router.push('/login');
      }
    }

    render() {
      return (
        <div>
          {this.props.children}
        </div>
      );
    }
  }

  function mapStateToProps(state) {
    return {
      isValidated: state.auth.isValidated
    }
  }

  return connect(mapStateToProps)(RequireAuth);
}
