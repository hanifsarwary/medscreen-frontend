/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  SquarePaymentForm,
  CreditCardNumberInput,
  CreditCardExpirationDateInput,
  CreditCardPostalCodeInput,
  CreditCardCVVInput,
  CreditCardSubmitButton,
} from 'react-square-payment-form';
import 'react-square-payment-form/lib/default.css';
import './PaymentPage.css';
import { Grid } from '@material-ui/core';
import { PAYMENT_CREDENTIALS } from 'config';
import { createPaymentAction, updateAppointmentPaymentStatus } from 'pages/appointments/containers/actions';

const APPLICATION_ID = PAYMENT_CREDENTIALS.PRODUCTION_APPLICATION_ID;
const LOCATION_ID = PAYMENT_CREDENTIALS.PRODUCTION_LOCATION_ID;

class PaymentPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessages: [],
      status: '',
      payment: false,
      givenName: null,
      amount: this.props.amount,
    };
    this.createVerificationDetails.bind(this);
  }

  cardNonceResponseReceived = (errors, nonce, cardData, buyerVerificationToken) => {
    let nameValidation = { type: 'VALIDATION_ERROR', message: 'Name is not valid', field: 'givenName' };
    nameValidation = this.state.givenName ? '' : errors.push(nameValidation);
    if (errors) {
      this.setState({
        errorMessages: errors.map((error) => error.message),
        status: 'failed',
        payment: false,
      });
      return;
    }
    this.setState({
      errorMessages: [],
      status: 'paid',
      payment: true,
    });
    const payload = {
      status: 'paid',
      transaction_details: JSON.stringify(this.createVerificationDetails()),
      appointment_id: this.props.appointment_id,
    };
    const paymentPayload = {
      source_id: nonce,
      location_id: LOCATION_ID,
      autocomplete: true,
      verification_token: buyerVerificationToken,
      amount_money: this.createVerificationDetails(),
      appointment_id: this.props.appointment_id,
    };
    // this.props.createPaymentAction(JSON.stringify(paymentPayload), this.props.history);
    this.props.updateAppointmentPaymentStatus(paymentPayload, this.props.history);
  };

  getAmount() {
    return this.props.amount;
  }

  handleName = (event) => {
    this.setState({
      givenName: event.target.value,
    });
  };

  createVerificationDetails = () => {
    const { givenName, amount } = this.state;
    return {
      amount: String(amount),
      currencyCode: 'USD',
      intent: 'CHARGE',
      billingContact: {
        givenName: givenName,
      },
    };
  };

  render() {
    return (
      <>
        {this.state.payment === false ? (
          <div>
            <SquarePaymentForm
              // sandbox={true}
              applicationId={APPLICATION_ID}
              locationId={LOCATION_ID}
              cardNonceResponseReceived={this.cardNonceResponseReceived}
              createVerificationDetails={this.createVerificationDetails}
            >
              <div className="sq-fieldset">
                <h4 className="sq-form-text-center">Enter Card Info Below </h4>
                <CreditCardNumberInput />
                <div className="card-holder-name">
                  <label htmlFor="card-holder">CARD NAME</label>
                  <input
                    required
                    type="text"
                    name="givenName"
                    className={'sq-input ' + (this.state.givenName ? '' : 'card-holder-name-error')}
                    placeholder="Enter name"
                    onChange={this.handleName}
                  />
                </div>
                <div className="sq-form-third">
                  <CreditCardExpirationDateInput />
                </div>

                <div className="sq-form-third">
                  <CreditCardPostalCodeInput />
                </div>

                <div className="sq-form-third">
                  <CreditCardCVVInput />
                </div>
              </div>
              <CreditCardSubmitButton> Pay </CreditCardSubmitButton>
            </SquarePaymentForm>

            <div className="sq-error-message">
              {this.state.errorMessages.map((errorMessage) => (
                <li key={`sq-error-${errorMessage}`}>{errorMessage}</li>
              ))}
            </div>
          </div>
        ) : (
          <Grid container direction="column" style={{ textAlign: 'center' }} justify="center">
            <div className="row">
              <div className="col-sm-12 success-mark" style={{ marginLeft: '8px' }}>
                <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                  <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                  <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                </svg>
              </div>
            </div>
            <h3 style={{ marginTop: '60px' }}>Successful</h3>
            <button style={{ marginTop: '25px' }} class="btn success-btn" onClick={() => window.location.reload(false)}>
              Your appointment is booked.
            </button>
          </Grid>
        )}
      </>
    );
  }
}

const mapDispatchToProps = {
  createPaymentAction,
  updateAppointmentPaymentStatus,
};

export default withRouter(connect(null, mapDispatchToProps)(PaymentPage));
