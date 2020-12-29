/* eslint-disable no-console */
import React, { Fragment } from 'react';
import ResetPasswordScreen from './resetPasswordScreen';
import EmailSendScreen from './emailSend';

class ResetPasswordPage extends React.Component {
  componentDidMount() {
    if (this.props.location.search) {
      const token = this.props.location.search.split('=');
      console.log(token);
    }
  }

  render() {
    return (
      <Fragment>
        {' '}
        {this.props.location.search ? (
          <ResetPasswordScreen token={this.props.location.search.split('=')[1]} />
        ) : (
          <EmailSendScreen />
        )}
      </Fragment>
    );
  }
}

export default ResetPasswordPage;
